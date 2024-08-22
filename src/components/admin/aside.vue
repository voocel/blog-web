<template>
  <aside class="aside">
    <div class="aside_header flex">
      <div class="aside_logo flex">
        <img src="/images/checken_logo.png">
      </div>
      <div class="aside_title flex">Admin</div>
    </div>
    <div class="aside_body;margin-bottom: 20px">
      <AsideMenu></AsideMenu>
    </div>
  </aside>
</template>

<script setup>
import AsideMenu from "./aside_menu.vue"
</script>

<style lang="scss">
.aside {
  width: 240px;
  height: 100vh;
  background-color: var(--slide);
  overflow-y: auto;


}

.aside_header {
  width: 100%;
  flex-direction: column;
}

.aside_logo {
  img {
    width: 50%;
    height: 50%;
    margin-bottom: 10px;
  }
}

.aside_title {
  font-size: 20px;
  color: #d3d3d3;
  margin-bottom: 20px;
}

</style>