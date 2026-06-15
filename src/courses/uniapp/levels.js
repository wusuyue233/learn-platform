export const phases = [
  {
    id: 'uniapp-basics',
    name: '阶段一：UniApp 基础',
    description: '掌握 UniApp 页面路由和核心组件',
    levels: [
      { id: 'uniapp-1', number: 1, type: 'concept', title: '页面与路由', concept: 'pages.json', difficulty: 'easy',
        prerequisites: `<h4>UniApp 页面</h4><p>pages.json 定义路由和 TabBar。</p>`,
        conceptDetail: `pages 数组注册页面。tabBar 底部导航。`,
        code: `{"pages":[{"path":"pages/index/index","style":{"navigationBarTitleText":"首页"}},{"path":"pages/category/category","style":{"navigationBarTitleText":"分类"}},{"path":"pages/cart/cart","style":{"navigationBarTitleText":"购物车"}},{"path":"pages/user/user","style":{"navigationBarTitleText":"我的"}}],"tabBar":{"color":"#999","selectedColor":"#e54d42","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/home.png"},{"pagePath":"pages/category/category","text":"分类","iconPath":"static/category.png"},{"pagePath":"pages/cart/cart","text":"购物车","iconPath":"static/cart.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/user.png"}]}}`,
        verification: 'pages.json 含 4 个页面和 TabBar',
        filePath: 'pages.json',
        hints: ["第一项为首页","tabBar 最多 5 项","iconPath 填静态图片路径"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'uniapp-2', number: 2, type: 'concept', title: '商品卡片组件', concept: 'uni-app 组件', difficulty: 'easy',
        prerequisites: `<h4>组件</h4><p>UniApp 用 view/text/image 替代 div/span/img。rpx 是响应式单位。</p>`,
        conceptDetail: `defineProps 声明 props。@tap 替代 click。`,
        code: `<template><view class="card" @tap="emit('click',product)"><image :src="product.image"/><view><text>{{product.name}}</text><text>¥{{product.price}}</text></view></view></template>
<script setup>
defineProps({product:{type:Object,required:true}})
const emit=defineEmits(["click"])
</script>
<style scoped>.card{display:flex;padding:20rpx;margin:10rpx;background:#fff;border-radius:16rpx}.price{color:#e54d42;font-size:32rpx;font-weight:bold}</style>`,
        verification: 'ProductCard 接收 product props 显示',
        filePath: 'components/ProductCard.vue',
        hints: ["defineProps 声明属性类型","rpx 自动适配屏幕宽度"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'uniapp-3', number: 3, type: 'concept', title: 'API 请求封装', concept: 'uni.request', difficulty: 'medium',
        prerequisites: `<h4>uni.request</h4><p>uni.request 发起 HTTP 请求。uni.getStorageSync 读取本地存储。</p>`,
        conceptDetail: `Promise 封装回调 API。401 跳登录页。`,
        code: `const BASE_URL="https://api.example.com"
export function request(config){
  const token = uni.getStorageSync("token")
  return new Promise((resolve,reject)=>{
    uni.request({
      url:BASE_URL+config.url,
      method:config.method||"GET",
      data:config.data,
      header:{"Authorization":token?"Bearer "+token:"","Content-Type":"application/json"},
      success:res=>{if(res.statusCode===401)uni.redirectTo({url:"/pages/login/login"});else resolve(res.data)},
      fail:reject
    })
  })
}`,
        verification: 'HTTP 工具封装 Token 和错误处理',
        filePath: 'utils/request.js',
        hints: ["uni.getStorageSync 读 Token","uni.redirectTo 跳转页面"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      },
      { id: 'uniapp-4', number: 4, type: 'concept', title: '商品列表页', concept: '列表渲染', difficulty: 'medium',
        prerequisites: `<h4>生命周期</h4><p>onLoad 页面加载触发。onPullDownRefresh 下拉刷新。</p>`,
        conceptDetail: `onShow 每次显示触发。onReachBottom 触底加载。`,
        code: `<template><view><ProductCard v-for="item in products" :key="item.id" :product="item" @click="goDetail"/><view v-if="loading">加载中...</view></view></template>
<script setup>
import {ref} from "vue"
import {getProducts} from "@/utils/request"
const products=ref([]),loading=ref(false)
onLoad(()=>{loading.value=true;getProducts().then(d=>{products.value=d}).finally(()=>{loading.value=false})})
onPullDownRefresh(async()=>{await getProducts().then(d=>products.value=d);uni.stopPullDownRefresh()})
function goDetail(p){uni.navigateTo({url:"/pages/product/detail?id="+p.id})}
</script>`,
        verification: 'onLoad 加载数据，下拉刷新',
        filePath: 'pages/index/index.vue',
        hints: ["开启 enablePullDownRefresh","uni.navigateTo 保留当前页面跳转"],
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: []
      }
    ]
  }
]