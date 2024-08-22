<template>
  <div class="base_view index_view">
    <Nav></Nav>
    <Banner></Banner>
    <div class="base_container">
      <div class="inner_container index_main">
        <div class="left">
          <ArticleCalendar></ArticleCalendar>
          <ArticleList style="margin-top: 20px"></ArticleList>
        </div>
        <div class="right">
          <News></News>
          <TagCard style="margin-top: 20px"></TagCard>
          <SiteCard style="margin-top: 20px"></SiteCard>
          <AdvertisCard style="margin-top: 20px"></AdvertisCard>
          <FadeBackCard style="margin-top: 20px"></FadeBackCard>
        </div>
      </div>
    </div>
    <Footer style="margin-top: 20px"></Footer>
  </div>
</template>

<script setup>
import Nav from "@/components/nav.vue";
import Banner from "@/components/banner.vue";
import News from "@/components/index/news.vue";
import ArticleCalendar from "@/components/index/article_calendar.vue";
import TagCard from "@/components/index/tag_card.vue";
import SiteCard from "@/components/index/site_card.vue";
import FadeBackCard from "@/components/index/fade_back_card.vue";
import Footer from "@/components/footer.vue";
import AdvertisCard from "@/components/index/advertis_card.vue";
import ArticleList from "@/components/index/article_list.vue";


</script>


<style lang="scss">

.base_view {
  background-color: var(--bg);

  .base_container {
    display: flex;
    justify-content: center;

    .inner_container {
      //background-color: var(--card_bg);
      min-height: 1000px;
      width: 1200px;
      margin-top: 20px;
    }
  }
}

.index_view {
  .inner_container {
    display: flex;
    justify-content: space-between;
  }

  .index_main {
    .left {
      width: calc(100% - 416px);
    }

    .right {
      width: 396px;
    }
  }
}


</style>