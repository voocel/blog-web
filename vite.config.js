import { fileURLToPath, URL } from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({mode})=>{
  const env = loadEnv(mode,process.cwd())
  const baseUrl = env.VITE_API
  const baseUrlWs = env.VITE_WEBSOCKET
  console.log(env)
  return defineConfig({
  envPrefix:["VITE_"],
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server:{
    host:"127.0.0.1",
    port:5173,
    proxy:{
      "/uploads":{
        target: baseUrl
      },
      "/wsUrl":{
        target: baseUrlWs, //这里是后台ws访问地址
        changeOrigin: true, //允许跨域设置
        ws: true, //websocket代理设置
        rewrite: (path)=> path.replace(/^\/wsUrl/,""), //拦截路径去除
      },
      "/v1":{
        target: baseUrl
      },
      "/api":{
        target: baseUrl
      }
    }
  }
})
}

// https://vitejs.dev/config/
// 重定向到代理地址

