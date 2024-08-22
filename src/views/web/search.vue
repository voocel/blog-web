<template>
  <div class="search_view">
    <Nav is_show></Nav>
    <div class="base_container">
      <div class="inner_container">
        <div class="search_head">
          <div class="search_ipt">
            <a-input
                placeholder="搜索你想要的内容"
                v-model:value="data.query.key"
                @keydown.enter="search"
            ></a-input>
          </div>
          <div class="search_btn">
            <a-button type="primary" @click="search">搜索</a-button>
          </div>
        </div>
        <div class="search_action">
          <div class="search_order">
            <span :class="{active: data.query.sort === ''}" @click="checkOrder('')">综合排序</span>
            <span :class="{active: data.query.sort === 'created_at asc'}"
                  @click="checkOrder('created_at asc')">最早发布</span>
            <span :class="{active: data.query.sort === 'created_at desc'}"
                  @click="checkOrder('created_at desc')">最新发布</span>
            <span :class="{active: data.query.sort === 'look_count desc'}"
                  @click="checkOrder('look_count desc')">最多浏览</span>
            <span :class="{active: data.query.sort === 'digg_count desc'}"
                  @click="checkOrder('digg_count desc')">最多点赞</span>
            <span :class="{active: data.query.sort === 'comment_count desc'}"
                  @click="checkOrder('comment_count desc')">最多评论</span>
            <span :class="{active: data.query.sort === 'collects_count desc'}"
                  @click="checkOrder('collects_count desc')">最多收藏</span>
          </div>
          <div class="search_tags">
            <span :class="{active: data.query.tag ===''}" @click="checkTag('')">全部标签</span>
            <span
                :class="{active: data.query.tag === item.tag}"
                @click="checkTag(item.tag)"
                v-for="(item, index) in data.tag_list"
                :key="index">{{ item.tag }}</span>
          </div>
        </div>
        <div class="search_result">
          <div class="search_result_item"
               v-for="(item, index) in data.article_list"
               :key="index">
            <a :href="'article/'+item.id" target="_blank" class="img">
              <img :src="item.banner_url" alt="">
            </a>
            <div class="info">
              <div class="title">
                <a :href="'article/'+item.id" target="_blank" v-html="item.title"></a>
              </div>
              <div class="icon">
                <span v-if="data.query.sort === 'digg_count desc'"><i class="fa fa-thumbs-up"></i>{{ item.like_counts }}</span>
                <span v-else-if="data.query.sort === 'comment_count desc'"><i class="fa fa-comments"
                ></i>{{ item.comment_counts }}</span>
                <span v-else-if="data.query.sort === 'collects_count desc'"><i class="fa fa-star-o"
                ></i>{{ item.star_counts }}</span>
                <span v-else><i class="fa fa-eye"></i>{{ item.view_counts }}</span>
                <span><i class="fa fa-clock"></i>{{ getFormatDate(item.created_at) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="node_article_list" v-if="data.article_list.length === 0">
          <a-empty :image="data.simpleImage"/>
        </div>
        <div class="search_page">
          <a-pagination
              class="article_list_page"
              v-model:current="data.query.page"
              hideOnSinglePage
              :total="data.total"
              @change="pageChange"
              :show-total="total => `共 ${total} 篇`"
          />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Nav from "@/components/nav.vue"
import Footer from "@/components/footer.vue"
import {reactive} from "vue";
import {getArticleListApi} from "@/api/article_api";
import {getFormatDate} from "@/utils/date";
import {Empty} from 'ant-design-vue';
import {getTagArticleListApi} from "@/api/tag_api";

const data = reactive({
  query: {
    key: "",
    page: 1,
    limit: 100,
    sort: "",
    tag: "",
  },
  total: 20,
  tag_list: [
    {"tag": "python", "count": 8},
    {"tag": "golang", "count": 8},
    {"tag": "前端", "count": 8},
  ],
  article_list: [],
  simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
})

// 选择不同的排序
function checkOrder(order) {
  data.query.sort = order
  getData()
}

// 选择不同的标签
function checkTag(tag) {
  data.query.tag = tag
  getData()
}

// 分页
function pageChange() {
  getData()
}

// 搜索
function search() {
  data.query.page = 1
  getData()
}

// 获取数据
async function getData() {
  let res = await getArticleListApi(data.query)

  data.article_list = res.data.list
  data.total = res.data.count
}

// 获取标签数据
async function getTagList() {
  let res = await getTagArticleListApi()
  data.tag_list = res.data.list
}

getData()
getTagList()
</script>

<style lang="scss">
.search_view {
  background-color: var(--bg);
  .base_container {
    display: flex;
    justify-content: center;
    .inner_container {
      min-height: 700px;
      width: 1200px;
      margin-top: 90px ;
    }
  }

  .search_head {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;


    .search_ipt {
      width: 30%;
      margin: 0 20px;

      .ant-input {
        width: 100%;
      }
    }

    .search_btn {
      width: 10%;
    }
  }

  .search_action {
    border-top: 1px solid var(--order);
    padding: 20px 0;
    border-bottom: 1px solid var(--order);

    span {
      padding: 3px 6px;
      color: var(--text);
      cursor: pointer;
      font-size: 14px;
      margin-right: 20px;
    }

    span.active {
      background-color: var(--active);
      color: white;
      border-radius: 5px;
    }

    .search_order {
      margin-bottom: 10px;
    }
  }

  .search_result {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 20px;
    margin-bottom: 20px;

    .search_result_item {
      border: 1px solid var(--order);
      border-radius: 5px;
      overflow: hidden;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        .img img {
          transform: scale(1.1);
        }
      }

      > a {
        display: block;
        width: 100%;
        height: 100px;
        overflow: hidden;


        img {
          width: 100%;
          height: 100%;
          transition: all 0.3s;
          object-fit: cover;
        }
      }

      .info {
        padding: 8px;
        color: #777;

        .title {
          margin-bottom: 5px;
          height: 43px;

          em {
            color: red;
            margin-right: 2px;
          }
        }

        .icon {
          font-size: 13px;
          display: flex;
          justify-content: space-between;

          i {
            margin-right: 5px;
          }
        }

        a {
          color: var(--text);
        }
      }
    }
  }

  .node_article_list {
    min-height: 100px ;
  }

  .search_page {
    text-align: center;
  }
}

</style>