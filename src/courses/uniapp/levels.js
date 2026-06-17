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
        cognitiveLoad: 'medium', dependsOn: [], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解页面路由',verification:'pages.json',hint:'pages.json 定义页面路径和样式'},{id:'step-2',title:'配置 TabBar',verification:'tabBar',hint:'tabBar 定义底部导航栏'}],
        docLinks: [
        { title: 'uni-app 官方文档', url: 'https://uniapp.dcloud.net.cn/' },
        { title: 'uni-app API 文档', url: 'https://uniapp.dcloud.net.cn/api/' }
        ],
      },
      { id: 'uniapp-2', number: 2, type: 'concept', title: '商品卡片组件', concept: 'uni-app 组件', difficulty: 'easy',
        prerequisites: `<h4>组件</h4><p>UniApp 用 view/text/image 替代 div/span/img。rpx 是响应式单位。</p>`,
        conceptDetail: `defineProps 声明 props。defineEmits 定义自定义事件。@tap 替代 click。`,
        code: `<template><view class="card" @tap="emit('click',product)"><image :src="product.image"/><view><text>{{product.name}}</text><text>¥{{product.price}}</text></view></view></template>
<script setup>
defineProps({product:{type:Object,required:true}})
const emit=defineEmits(["click"])
</script>
<style scoped>.card{display:flex;padding:20rpx;margin:10rpx;background:#fff;border-radius:16rpx}.price{color:#e54d42;font-size:32rpx;font-weight:bold}</style>`,
        verification: 'ProductCard 接收 product props 显示',
        filePath: 'components/ProductCard.vue',
        hints: ["defineProps 声明属性类型","rpx 自动适配屏幕宽度"],
        cognitiveLoad: 'medium', dependsOn: ['uniapp-1'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解组件结构',verification:'defineProps',hint:'defineProps 接收父组件数据'},{id:'step-2',title:'使用 rpx 单位',verification:'rpx',hint:'rpx 是 UniApp 响应式单位'}],
        docLinks: [
        { title: 'uni-app 官方文档', url: 'https://uniapp.dcloud.net.cn/' },
        { title: 'uni-app API 文档', url: 'https://uniapp.dcloud.net.cn/api/' }
        ],
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
        cognitiveLoad: 'medium', dependsOn: ['uniapp-2'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解封装原理',verification:'uni.request',hint:'用 Promise 封装异步请求'},{id:'step-2',title:'添加 Token 拦截',verification:'Authorization',hint:'请求头自动携带 Token'}],
        docLinks: [
        { title: 'uni-app 官方文档', url: 'https://uniapp.dcloud.net.cn/' },
        { title: 'uni-app API 文档', url: 'https://uniapp.dcloud.net.cn/api/' }
        ],
      },
      { id: 'uniapp-4', number: 4, type: 'concept', title: '商品列表页', concept: '列表渲染', difficulty: 'medium',
        prerequisites: `<h4>生命周期</h4><p>onLoad 页面加载触发。onPullDownRefresh 下拉刷新。</p>`,
        conceptDetail: `onLoad 页面加载触发。onPullDownRefresh 下拉刷新。`,
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
        cognitiveLoad: 'medium', dependsOn: ['uniapp-3'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解列表加载',verification:'onLoad',hint:'onLoad 页面首次加载时触发'},{id:'step-2',title:'配置下拉刷新',verification:'onPullDownRefresh',hint:'开启 enablePullDownRefresh 配置'}],
        docLinks: [
        { title: 'uni-app 官方文档', url: 'https://uniapp.dcloud.net.cn/' },
        { title: 'uni-app API 文档', url: 'https://uniapp.dcloud.net.cn/api/' }
        ],
      }
    ]
  }
  ,
  {
    id: 'uniapp-pages',
    name: '阶段二：用户端功能完善',
    description: '完成购物车、用户中心和订单功能',
    levels: [
      { id: 'uniapp-5', number: 5, type: 'concept', title: '购物车页面', concept: '本地存储', difficulty: 'medium',
        prerequisites: `<h4>本地存储</h4><p>uni.getStorageSync/uni.setStorageSync 读写本地数据。</p>`,
        conceptDetail: 'checkbox 多选。computed 计算总价。',
        code: `<template><view><view v-for="item in cart" :key="item.id" class="cart-item">
<checkbox :checked="item.checked" @tap="toggleCheck(item)"/>
<image :src="item.image"/><view><text>{{item.name}}</text><text>¥{{item.price}}</text></view>
<view class="num-ctrl"><text @tap="decrease(item)">-</text><text>{{item.num}}</text><text @tap="increase(item)">+</text></view>
</view></view></template>
<script setup>
import {ref,computed} from "vue"
const cart=ref(uni.getStorageSync("cart")||[])
function toggleCheck(item){item.checked=!item.checked;save()}
function increase(item){item.num++;save()}
function decrease(item){if(item.num>1)item.num--;else{cart.value=cart.value.filter(x=>x.id!==item.id)};save()}
function save(){uni.setStorageSync("cart",cart.value)}
const total=computed(()=>cart.value.filter(x=>x.checked).reduce((s,x)=>s+x.price*x.num,0))
</script>`,
        verification: '购物车增删改和本地持久化',
        filePath: 'pages/cart/cart.vue',
        hints: ["uni.getStorageSync 读取购物车","computed 计算总价"],
        cognitiveLoad: 'medium', dependsOn: ['uniapp-3'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解本地存储',verification:'uni.setStorageSync',hint:'setStorageSync 持久化购物车数据'},{id:'step-2',title:'计算总价',verification:'computed',hint:'用 computed 计算选中商品总价'}],
        docLinks: [
        { title: 'uni-app 官方文档', url: 'https://uniapp.dcloud.net.cn/' },
        { title: 'uni-app API 文档', url: 'https://uniapp.dcloud.net.cn/api/' }
        ],
      },
      { id: 'uniapp-6', number: 6, type: 'concept', title: '用户个人中心', concept: '页面生命周期', difficulty: 'easy',
        prerequisites: `<h4>生命周期</h4><p>onShow 页面显示时触发。onLoad 页面首次加载。</p>`,
        conceptDetail: 'onShow 页面显示刷新数据。uni.getStorageSync 读取用户信息。条件渲染 v-if。',
        code: `<template><view class="profile">
<view class="user-info"><image :src="user.avatar||'/static/default-avatar.png'"/><text>{{user.nickname||'未登录'}}</text></view>
<view class="menu-list"><view class="menu-item" @tap="toOrders"><text>我的订单</text><text>></text></view>
<view class="menu-item" @tap="toAddress"><text>收货地址</text><text>></text></view>
<view class="menu-item" @tap="toSettings"><text>设置</text><text>></text></view></view>
<button v-if="user.token" class="logout-btn" @tap="logout">退出登录</button>
<button v-else class="login-btn" @tap="toLogin">登录/注册</button>
</view></template>
<script setup>
import {ref} from "vue"
const user=ref({})
onShow(()=>{user.value={token:uni.getStorageSync("token"),nickname:uni.getStorageSync("nickname")||''}})
function toOrders(){uni.navigateTo({url:"/pages/orders/orders"})}
function toAddress(){uni.navigateTo({url:"/pages/address/address"})}
function logout(){uni.removeStorageSync("token");uni.removeStorageSync("nickname");user.value={}}
function toLogin(){uni.navigateTo({url:"/pages/login/login"})}
</script>`,
        verification: '个人中心页面显示用户状态',
        filePath: 'pages/user/user.vue',
        hints: ["onShow 每次显示刷新","v-if/v-else 条件渲染登录状态"],
        cognitiveLoad: 'medium', dependsOn: ['uniapp-1','uniapp-3'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解页面生命周期',verification:'onShow',hint:'onShow 每次页面显示都触发'},{id:'step-2',title:'显示用户信息',verification:'uni.getStorageSync',hint:'读取本地用户信息并展示'}],
        docLinks: [
        { title: 'uni-app 官方文档', url: 'https://uniapp.dcloud.net.cn/' },
        { title: 'uni-app API 文档', url: 'https://uniapp.dcloud.net.cn/api/' }
        ],
      },
      { id: 'uniapp-7', number: 7, type: 'concept', title: '地址管理', concept: '表单与验证', difficulty: 'medium',
        prerequisites: `<h4>表单</h4><p>uni.request 提交数据。v-model 双向绑定。</p>`,
        conceptDetail: 'input 表单输入。switch 默认地址开关。uni.showToast 提示信息。uni.navigateBack 返回上一页。',
        code: `<template><view class="address-form">
<view><text>收货人</text><input v-model="form.name" placeholder="请输入姓名"/></view>
<view><text>手机号</text><input v-model="form.phone" placeholder="请输入手机号" type="number" maxlength="11"/></view>
<view><text>详细地址</text><input v-model="form.detail" placeholder="请输入详细地址"/></view>
<view><text>设为默认</text><switch :checked="form.isDefault" @change="form.isDefault=!form.isDefault"/></view>
<button @tap="submit">保存</button></view></template>
<script setup>
import {ref} from "vue"
const form=ref({name:'',phone:'',detail:'',isDefault:false})
function validate(){if(!form.value.name)return uni.showToast({title:'请输入姓名',icon:'none'});if(!/^1\\d{10}$/.test(form.value.phone))return uni.showToast({title:'手机号格式错误',icon:'none'});return true}
function submit(){if(!validate())return;uni.showToast({title:'保存成功',icon:'success'});setTimeout(()=>uni.navigateBack(),1500)}
</script>`,
        verification: '地址表单及验证逻辑',
        filePath: 'pages/address/address.vue',
        hints: ["v-model 双向绑定表单","正则校验手机号格式"],
        cognitiveLoad: 'medium', dependsOn: ['uniapp-3'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解地址CRUD',verification:'uni.request',hint:'封装地址的增删改查 API'},{id:'step-2',title:'地址选择交互',verification:'@tap',hint:'点击地址卡片选择并回传'}],
        docLinks: [
        { title: 'uni-app 官方文档', url: 'https://uniapp.dcloud.net.cn/' },
        { title: 'uni-app API 文档', url: 'https://uniapp.dcloud.net.cn/api/' }
        ],
      },
      { id: 'uniapp-8', number: 8, type: 'concept', title: '订单确认页', concept: '多页面传参', difficulty: 'hard',
        prerequisites: `<h4>传参</h4><p>uni.navigateTo 的 url 参数。events 事件通信。</p>`,
        conceptDetail: 'onLoad options 接收参数。computed 计算总价。提交订单。',
        code: `<template><view class="confirm-order">
<view class="addr" @tap="selectAddr"><text>{{addr?addr.name+' '+addr.phone:'请选择地址'}}</text><text>></text></view>
<view v-for="item in items" :key="item.id" class="order-item">
<text>{{item.name}} x{{item.num}}</text><text>¥{{item.price*item.num}}</text></view>
<view class="total">合计：<text>¥{{total}}</text></view>
<button class="submit-btn" @tap="submitOrder">提交订单</button>
</view></template>
<script setup>
import {ref,computed} from "vue"
const items=ref([]),addr=ref(null)
onLoad(options)=>{if(options.items)items.value=JSON.parse(decodeURIComponent(options.items))}
const total=computed(()=>items.value.reduce((s,x)=>s+x.price*x.num,0))
function submitOrder(){if(!addr.value)return uni.showToast({title:'请选择地址',icon:'none'});uni.showToast({title:'下单成功',icon:'success'});uni.redirectTo({url:'/pages/orders/orders'})}
</script>`,
        verification: '订单确认页面完整流程',
        filePath: 'pages/order/confirm.vue',
        hints: ["decodeURIComponent 解码URL参数","computed 计算总价"],
        cognitiveLoad: 'medium', dependsOn: ['uniapp-5','uniapp-7'], commonMistakes: [], variations: [], transferTasks: [],
        microSteps:[{id:'step-1',title:'理解订单流程',verification:'submitOrder',hint:'订单确认页面包含地址和商品列表'},{id:'step-2',title:'提交与跳转',verification:'uni.redirectTo',hint:'下单成功后跳转到订单列表页'}],
        docLinks: [
        { title: 'uni-app 官方文档', url: 'https://uniapp.dcloud.net.cn/' },
        { title: 'uni-app API 文档', url: 'https://uniapp.dcloud.net.cn/api/' }
        ],
      }
    ]
  }
]