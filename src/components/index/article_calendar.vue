<template>
  <Card title="文章日历" class="article_calendar_card">
    <ArticleCalendar :is-title="false"></ArticleCalendar>
  </Card>
</template>

<script setup>
import Card from "@/components/card.vue"
import ArticleCalendar from "@/components/charts/article_calendar.vue"

</script>