<template>
  <div class="admin">
    <Aside></Aside>
    <div class="main">
      <header>
        <div class="left">
          <BreadCrumb></BreadCrumb>
        </div>
        <div class="right">
          <div class="icon_actions">
            <i class="fa fa-home" @click="goIndex"></i>
            <Theme></Theme>
            <FullScreen></FullScreen>
          </div>
          <UserInfo :is-avatar="true"></UserInfo>
        </div>
      </header>
      <Tabs></Tabs>
      <main>
        <div class="view">
          <router-view v-slot="{Component}">
            <transition name="fade" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>


<script setup>
import Theme from "@/components/theme.vue";
import Aside from "@/components/admin/aside.vue";
import UserInfo from "@/components/user_info.vue";
import FullScreen from "@/components/full_screen.vue";
import Tabs from "@/components/admin/tabs.vue";
import BreadCrumb from "@/components/admin/bread_crumb.vue"
import {useStore} from "@/stores/store";
import {useRouter} from "vue-router";

const router = useRouter()
const store = useStore()
// 加载路由
store.loadTabs()

function goIndex(){
  router.push({name: "index"})
}


</script>

<style lang="scss">
.admin {
  width: 100%;
  display: flex;


  .main {
    width: calc(100% - 240px);
    height: 100vh;
    overflow-y: auto;
    background-color: var(--bg);
    overflow-x: hidden;

    header {
      height: 60px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--card_bg);

      .right {
        display: flex;
        align-items: center;
      }

      .icon_actions {
        margin-right: 20px;

        i {
          margin-left: 10px;
          cursor: pointer;
          font-size: 16px;
          color: var(--text)
        }

        i:hover {
          color: var(--active);
        }
      }

      .avatar {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }

      .drop_menu {
        margin-left: 10px;
      }
    }


    main {
      padding: 20px;

      .view {
      }
    }
  }
}
</style>

<!--组件过度-->
<style>
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-active {
  transform: translateX(-30px);
  opacity: 0;
}

.fade-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.fade-leave-active, .fade-enter-active {
  transition: all 0.15s ease-out;
}
</style>