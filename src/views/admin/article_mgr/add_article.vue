<template>
  <div>
    <ArticleModal v-model:visible="visible" @ok="okHandler">

    </ArticleModal>
  <Editor v-model:content="data.content" @onSave="onSave"></Editor>
  </div>
</template>

<script setup>
import {reactive, ref,  onUnmounted} from 'vue';
import {useStore} from "@/stores/store";
import {useRouter} from "vue-router";
import 'md-editor-v3/lib/style.css';
import {createArticleApi} from "@/api/article_api";
import {message} from "ant-design-vue";
import ArticleModal from "@/components/admin/article_modal.vue";
import Editor from "@/components/admin/editor.vue";


const router = useRouter()
const store = useStore()
const visible = ref(false)

async function okHandler(state) {
  Object.assign(data, state)
  let res = await createArticleApi(data)
  if (res.code) {
    message.error(res.msg)
    return
  }

  message.success(res.msg)
  visible.value = true
  Object.assign(data, _data)
  // 先切换到文章列表
  router.push({
    name: "article_list"
  })
  // 删除当前文章的tab
  store.removeTab({name: "add_article"})

  return
}



const _data = reactive({
  content: "",
  title: "",
  abstract: "",
  banner_id: null,
  category: "",
  link: "",
  source: "",
  tags: [],
})

const data = reactive({
  content: "",
  title: "",
  abstract: "",
  banner_id: null,
  category: "",
  link: "",
  source: "",
  tags: [],
})



function ctrlSave(e) {
  if (e.ctrlKey && e.code == "KeyS") {
    //阻止默认事件
    showDrawer()
    e.preventDefault()
  }
}

function showDrawer() {
  if (data.content.trim() === "") {
    message.error("文章内容不可为空")
    return
  }
  // 抽屉组件显示出来
  visible.value = true
}

window.addEventListener("keydown", ctrlSave)
onUnmounted(() => {
  window.removeEventListener("keydown", ctrlSave)
})

// ctrl s,  md是md原文,h是转换函数
const onSave = (md, h) => {
  showDrawer()
  // h.then((html) => {
  //   console.log(html);
  // });
};
</script>

