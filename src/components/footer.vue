<template>
  <footer class="footer">
    <div class="left">

      <p class="version">
        <span>version</span>
        <span>{{ store.siteInfo.version }}</span>
      </p>
      <p>建站日期：{{ store.siteInfo.site_created_time }}</p>
      <p class="beian">
        <img src="/static/footer/badges.png" alt="">
        <a href="https://beian.miit.gov.cn/">{{ store.siteInfo.bei_an }}</a>
      </p>
    </div>
    <div class="right">
      <div class="my_info">
        <div class="qq" title="我的QQ">
          <a href="#" title="向我咨询">
            <img class="show_img" :src="store.siteInfo.qq_image" alt="">
            <img class="img" src="/static/footer/qq_icon.svg" alt="">
          </a>
        </div>
        <div class="wechat" title="我的微信">
          <img class="show_img" :src="store.siteInfo.wechat_image" alt="">
          <img class="img" src="/static/footer/wexin_icon.svg" alt="">
        </div>
        <div title="我的哔哩哔哩">
          <a :href="store.siteInfo.bilibili_url" target="_blank">
            <img class="img" src="/static/footer/bilibili_icon.svg" alt="">
          </a>
        </div>
        <div title="gitee">
          <a :href="store.siteInfo.gitee_url" target="_blank">
            <img class="img" src="/static/footer/gitee_icon.svg" alt="">
          </a>
        </div>
        <div title="GitHub">
          <a :href="store.siteInfo.github_url" target="_blank">
            <img class="img" src="/static/footer/github_icon.svg" alt="">
          </a>

        </div>
      </div>
      <p>
        <span>联系邮箱：voocel@gmail.com</span>
      </p>
    </div>
  </footer>
</template>

<script setup>
import {useStore} from "@/stores/store";

const store = useStore()
store.loadSiteInfo()

</script>

<style lang="scss">
// 底部信息栏
.footer {
  display: flex;
  padding: 25px 0;
  width: 100%;
  background-color: var(--card_bg);

  .left, .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: var(--text);
    }

  }

  .thank {
    //color: #ffac37;
    color: #00c3e8;
    font-size: 20px;
  }

  .info {
    display: flex;

    span {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }

    img {
      width: 20px;
      margin-right: 5px;
    }
  }

  .version {
    color: white;
    display: flex;

    span {
      padding: 5px 10px;
    }

    span:first-child {
      //background-color: #ffac37;
      background-color: #00c3e8;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    span:last-child {
      background-color: #00736e;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  .beian {
    display: flex;

    img {
      width: 20px;
      margin-right: 5px;
    }
  }

  .my_info {
    display: flex;
    margin-bottom: 10px;

    > div {
      margin-right: 20px;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }
    }

    .img {
      width: 30px;
    }

    .qq, .wechat {
      position: relative;

      .show_img {
        opacity: 0;
        position: absolute;
        border: 1px #f0eeee solid;
        width: 63px;
        left: -14px;
        top: -10px;
        transition: all 0.6s;
      }

      &:hover {
        .show_img {
          opacity: 1;
          top: -69px;
        }

      }
    }
  }

}
</style>
