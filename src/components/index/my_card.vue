<template>
  <div class="my_card">
    <div class="title">
      <h2>个人名片</h2>
      <img src="/public/images/checken_logo.png">
    </div>
    <div class="footer">
      <p>NAME <span>{{ store.siteInfo.name }}</span></p>
      <p>JOB <span>{{ store.siteInfo.job }}</span></p>
      <p>ADDR <span>{{ store.siteInfo.addr }}</span></p>
      <p>WEB <a target="_blank" :href="store.siteInfo.web">{{ store.siteInfo.web }}</a></p>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "@/stores/store";
import {reactive} from "vue";

const store = useStore()
store.loadSiteInfo()
</script>

<style lang="scss">
.my_card {
  padding: 20px;
  width: 100%;
  background-color: var(--card_bg);
  border-radius: 5px;
  margin-bottom: 20px;



  .title {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;


    h2 {
      font-size: 20px;
      font-weight: 600;
      color: var(--h2);
      margin-bottom: 10px;
    }

    img {
      position: absolute;
      right: 20px;
      top: 0px;
      height: 140px;
      width: 140px;
    }
  }


  .footer {
    p {
      margin-bottom: 5px;
      color: var(--font_del);

      span {
        color: var(--text);
      }

      a {
        color: var(--active);
      }
    }
  }
}
</style>