<template>
  <div class="base_view index_view">
    <Nav></Nav>
    <Banner></Banner>
    <div class="base_container">
      <div class="inner_container">
        <div class="news_main">
          <div class="news_content">
            <div class="left">
              <ul>
                <li :class="{active: item.name === data.news_active}" v-for="item in data.news_init"
                    :key="item.id"
                    @click="get_new_data(item.id, item.name, item.url, false, 0)"><img
                    :src="item.url" alt="">{{ item.name }}
                </li>
              </ul>
            </div>
            <div class="right">
              <div class="title">
                <img :src="data.news_active_url" alt="">
                <h2 class="news_title">{{ data.news_active }} · 热榜</h2>
              </div>
              <div class="body">
                <ul>
                  <li v-for="item in data.news_list" :key="item.index">
                    <span class="index">{{ item.index }}</span> <a
                      :href="item.link"
                      target="_blank">{{ item.title }}</a>
                    <span class="num">{{ item.hotValue }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="thank"><a href="https://go.itab.link/">
            API来源于 iTab
          </a></div>

        </div>
      </div>
    </div>
    <Footer style="margin-top: 20px"></Footer>
  </div>
</template>

<script setup>
import Nav from "@/components/nav.vue"
import Banner from "@/components/banner.vue"
import Footer from "@/components/footer.vue"
import {reactive} from "vue";
import {venDor} from "@/utils/vendor";
import {getNewsApi} from "@/api/news_api";

const data = reactive({
  news_list: [{
    index: '1',
    title: '兰亭序',
    hotValue: '综艺 3641701',
    link: 'https://s.weibo.com/weibo?q=%E5%85%B0%E4%BA%AD%E5%BA%8F'
  }],  // 新闻列表
  news_init: [
    {
      name: '百度',
      id: 'Jb0vmloB1G',
      url: '/static/news/baidu.png'
    },
    {
      name: '微信',
      id: 'WnBe01o371',
      url: '/static/news/weixin.png'
    },
    {
      name: '知乎',
      id: 'mproPpoq6O',
      url: '/static/news/zhihu.png'
    },
    {
      name: '哔哩哔哩',
      id: '74KvxwokxM',
      url: '/static/news/bilibili.png'
    },
    {
      name: '抖音',
      id: 'DpQvNABoNE',
      url: '/static/news/douyin.png'
    },
    {
      name: '36氪',
      id: 'Q1Vd5Ko85R',
      url: '/static/news/36ker.png'
    },
    {
      name: 'CSDN博客',
      id: 'DgeyrgMoZq',
      url: '/static/news/csdn.png'
    },
    {
      name: '掘金',
      id: 'QaqeEaVe9R',
      url: '/static/news/juejin.png'
    },
    {
      name: '看雪论坛',
      id: 'Kqndg1xoLl',
      url: '/static/news/kanxue.png'
    },
    {
      name: 'GitHub',
      id: 'rYqoXQ8vOD',
      url: '/static/news/github.png'
    },
    {
      name: '站酷',
      id: 'VaobJ88oAj',
      url: '/static/news/zcool.jpg'
    },
    {
      name: 'Dribble',
      id: 'nBe0WR5d37',
      url: '/static/news/dribble.png'
    },
    {
      name: '什么值得买',
      id: 'K7GdagpoQy',
      url: '/static/news/zhidemai.png'
    },
    {
      name: '淘宝',
      id: '0MdKLK2ew1',
      url: '/static/news/taobao.png'
    },
    {
      name: '懂车帝',
      id: 'RrvW7XDv5z',
      url: '/static/news/dongchedi.png'
    },
    {
      name: '汽车之家',
      id: 'YqoXQGXvOD',
      url: '/static/news/carhome.png'
    },
    {
      name: '虎扑社区',
      id: '6ARe1YLe7n',
      url: '/static/news/hupu.png'
    },
    {
      name: '新浪体育新闻',
      id: 'wWmoOqYd4E',
      url: '/static/news/sina.png'
    },
    {
      name: '历史上的今天',
      id: 'KMZd7X3erO',
      url: '/static/news/lishi.png'
    }
  ],
  news_active: 'Jb0vmloB1G',
  news_active_url: '/static/news/baidu.png',

})

async function get_new_data(id, name, url) {
  data.news_active = name
  data.news_active_url = url
  let e = new Date;
  e.toUTCString();
  const t = e.getTime().toString();
  let signaturekey = venDor.AES.encrypt(t, "itab1314").toString()
  const header = {
    version: "1.0.0",  // 版本随便写
    signaturekey: signaturekey,
  }
  let res = await getNewsApi(id, 30, header)
  data.news_list = res.data
}

get_new_data("Jb0vmloB1G", "百度", "/static/news/baidu.png")

</script>

<style lang="scss">

.base_view{
  background-color: var(--bg);

  .base{
    display: flex;
    justify-content: center;

    .inner_container{
      width: 1200px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}

.news_main {
  width: 100%;

  .news_content {
    display: flex;
    min-height: 800px;
    background-color: var(--card_bg);
    border-radius: 5px;

    .left {
      width: 20%;
      border-right: 1px solid var(--bg_darken);

      ul {
        margin-top: 20px;

        img {
          height: 25px;
          border-radius: 5px;
          margin-right: 10px;
        }

        li {
          color: var(--text);
          height: 40px;
          display: flex;
          align-items: center;
          padding-left: 30%;
          transition: all 0.1s;
        }

        li.active {
          background-color: var(--active);
          color: white;
        }

        li:not(li.active) {
          // 选中非active的
          cursor: pointer;

          &:hover {
            color: #3a8ee6;
          }

        }
      }
    }

    .right {
      width: 80%;
      padding: 20px;

      .title {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--bg_darken);

        img {
          width: 35px;
          border-radius: 50%;
          margin-right: 10px;
        }

        h2 {
          font-size: 20px;
        }
      }

      .body {
        margin-top: 10px;

        ul {
          list-style: none;

          li {
            display: flex;
            font-size: 14px;
            margin-bottom: 10px;
            align-items: start;

            &:nth-child(1) {
              .index {
                background-color: #fe2d46;
                color: white;
              }
            }

            &:nth-child(2) {
              .index {
                background-color: #ff6600;
                color: white;
              }
            }

            &:nth-child(3) {
              .index {
                background-color: #faa90e;
                color: white;
              }
            }

            .index {
              width: 20px;
              height: 20px;
              border-radius: 5px;
              color: var(--text);
              background-color: var(--bg_darken);
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 20px;
            }

            a {
              width: 77%;
              color: var(--text);
              transition: all 0.2s;

              &:hover {
                color: #3a8ee6;
              }
            }

            .num {
              width: 20%;
              display: flex;
              justify-content: right;
            }
          }
        }
      }
    }
  }

  .thank {
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: center;

    a {
      font-size: 14px;
      color: var(--font_1);
    }
  }
}


.base_view {
  background-color: var(--bg);

  .base_container {
    display: flex;
    justify-content: center;

    .inner_container {
      //background-color: var(--card_bg);
      min-height: auto;
      width: 1200px;
      margin-top: 20px;
    }
  }
}

</style>