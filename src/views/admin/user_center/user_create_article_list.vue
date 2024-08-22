<template>
  <div>
    <ArticleList base-url="/api/article/list?is_user=true"></ArticleList>
  </div>
</template>

<script setup>
import ArticleList from "@/components/admin/article_list.vue";
</script>
