export const phases = [
  {
    id: 'basics',
    name: '阶段一：Vue3 基础',
    description: '掌握 Vue3 核心概念：组件、响应式、模板指令',
    levels: [
      {
        id: 'vue3-1',
        number: 1,
        title: '第一个组件',
        concept: 'Vue3 组件',
        difficulty: 'easy',
        task: '创建一个显示 "Hello Vue3" 的组件',
        prerequisites: `<h4>🐍 Vue3 基础：组件是什么</h4>
<p>Vue3 组件是一个可复用的 UI 单元，由模板（HTML）、脚本（JS）和样式（CSS）三部分组成：</p>
<pre><code>&lt;template&gt;
  &lt;div&gt;{{ message }}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const message = ref('Hello Vue3')
&lt;/script&gt;

&lt;style scoped&gt;
div { color: blue; }
&lt;/style&gt;
</code></pre>

<h4>🔑 核心概念：ref 响应式</h4>
<p><code>ref()</code> 创建一个响应式变量，当值变化时视图自动更新：</p>
<pre><code>const count = ref(0)  // 初始值 0
count.value++         // 修改必须用 .value
</code></pre>

<h4>⚠️ 常见错误</h4>
<ul>
  <li>模板中直接用 <code>count</code> 而不是 <code>count.value</code></li>
  <li>忘记导入 <code>ref</code></li>
  <li>忘记加 <code>scoped</code> 导致样式全局污染</li>
</ul>`,
        conceptDetail: `步骤 1 — 理解组件结构
Vue3 单文件组件（SFC）由三部分组成：[template](模板定义组件的 HTML 结构)、[script setup](脚本使用 Composition API)、[style scoped](样式只作用于当前组件)。

步骤 2 — 使用 ref 创建响应式数据
[ref()](Vue3 的响应式 API，创建一个可观察的变量) 创建响应式变量，在模板中直接用变量名，在 JS 中用 .value 访问。

步骤 3 — 在模板中渲染
模板中用 [Mustache 语法](双花括号 {{}} 插值表达式，将 JS 变量渲染到 HTML) 显示数据。`,
        contextCode: `<template>
  <div>
    <!-- 在这里显示 Hello Vue3 -->
  </div>
</template>

<script setup>
// 导入 Vue3 的响应式 API
</script>

<style scoped>
/* 组件样式 */
</style>`,
        hints: [
          '在 <script setup> 中用 ref() 创建一个变量，值为 "Hello Vue3"',
          '在 <template> 的 <div> 中用 {{ 变量名 }} 显示内容',
          '记得从 vue 导入 ref：import { ref } from \'vue\''
        ],
        code: `<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Hello Vue3')
</script>

<style scoped>
div { color: blue; }
</style>`,
        verification: '组件显示 "Hello Vue3" 文本，使用了 ref 响应式数据',
        solution: `解题步骤：
1. 在 <script setup> 中导入 ref：import { ref } from 'vue'
2. 创建响应式变量：const message = ref('Hello Vue3')
3. 在 <template> 中用 {{ message }} 显示内容
4. 可选：添加 <style scoped> 设置样式`,
        filePath: 'src/components/Hello.vue'
      },
      {
        id: 'vue3-2',
        number: 2,
        title: '按钮计数器',
        concept: '事件处理',
        difficulty: 'easy',
        task: '创建一个计数器，点击按钮数字 +1',
        prerequisites: `<h4>🐍 事件处理基础</h4>
<p>Vue3 用 <code>@事件名</code> 或 <code>v-on:事件名</code> 绑定事件处理函数：</p>
<pre><code>&lt;button @click="handleClick"&gt;点击&lt;/button&gt;
</code></pre>

<h4>🔑 核心概念：事件修饰符</h4>
<ul>
  <li><code>@click.stop</code> — 阻止事件冒泡</li>
  <li><code>@submit.prevent</code> — 阻止默认行为</li>
  <li><code>@keyup.enter</code> — 按键修饰符</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建响应式计数变量
用 [ref(0)](创建初始值为 0 的响应式变量) 定义 count。

步骤 2 — 绑定点击事件
按钮用 [@click](Vue3 的事件绑定语法，简写形式) 绑定一个函数，函数体内执行 count.value++。

步骤 3 — 显示当前值
模板中用 {{ count }} 显示当前计数值。`,
        contextCode: `<template>
  <div>
    <p>计数：0</p>
    <button>点击 +1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>`,
        hints: [
          '用 ref(0) 创建 count 变量',
          '按钮上写 @click="count++" 或定义一个函数',
          '显示用 {{ count }}'
        ],
        code: `<template>
  <div>
    <p>计数：{{ count }}</p>
    <button @click="count++">点击 +1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>`,
        verification: '点击按钮后数字递增，使用了 @click 事件绑定',
        solution: `解题步骤：
1. 用 ref(0) 创建计数变量
2. 按钮上绑定 @click="count++"
3. 模板中用 {{ count }} 显示当前值
4. 注意：JS 中修改要用 count.value++，模板中直接用 count`,
        filePath: 'src/components/Counter.vue'
      },
      {
        id: 'vue3-3',
        number: 3,
        title: '条件渲染',
        concept: 'v-if / v-show',
        difficulty: 'easy',
        task: '用 v-if 实现开关切换显示/隐藏一段文字',
        prerequisites: `<h4>🐍 条件渲染指令</h4>
<p>Vue3 提供两个条件渲染指令：</p>
<ul>
  <li><code>v-if</code> — 真正销毁/创建 DOM 元素</li>
  <li><code>v-show</code> — 仅切换 CSS display 属性</li>
</ul>
<pre><code>&lt;div v-if="show"&gt;可见内容&lt;/div&gt;
&lt;div v-else&gt;隐藏时显示的内容&lt;/div&gt;
</code></pre>

<h4>🔑 v-if vs v-show</h4>
<ul>
  <li><code>v-if</code> — 懒渲染，切换开销大，适合不频繁切换</li>
  <li><code>v-show</code> — 始终渲染，切换开销小，适合频繁切换</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建布尔状态
用 [ref(true)](创建布尔类型的响应式变量) 定义 visible，控制显示/隐藏。

步骤 2 — 用 v-if 条件渲染
[v-if](条件渲染指令，为 true 时渲染元素，false 时销毁) 绑定 visible 变量。

步骤 3 — 切换状态
按钮点击时执行 visible.value = !visible.value 切换布尔值。`,
        contextCode: `<template>
  <div>
    <p v-if="??">这段文字可以被切换显示/隐藏</p>
    <button>切换</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>`,
        hints: [
          '用 ref(true) 创建 visible 变量',
          'p 标签上加 v-if="visible"',
          '按钮 @click="visible = !visible"'
        ],
        code: `<template>
  <div>
    <p v-if="visible">这段文字可以被切换显示/隐藏</p>
    <button @click="visible = !visible">切换</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(true)
</script>`,
        verification: '使用了 v-if 指令控制元素显示/隐藏',
        filePath: 'src/components/Toggle.vue'
      },
      {
        id: 'vue3-4',
        number: 4,
        title: '列表渲染',
        concept: 'v-for 循环',
        difficulty: 'easy',
        task: '用 v-for 渲染一个待办事项列表',
        prerequisites: `<h4>🐍 列表渲染指令</h4>
<p><code>v-for</code> 指令基于数组渲染列表：</p>
<pre><code>&lt;li v-for="(item, index) in items" :key="item.id"&gt;
  {{ index + 1 }}. {{ item.text }}
&lt;/li&gt;
</code></pre>

<h4>🔑 核心概念：:key 属性</h4>
<p>每个列表项必须有唯一的 <code>:key</code>，帮助 Vue 高效更新 DOM。</p>`,
        conceptDetail: `步骤 1 — 定义待办事项数组
用 [ref([])](创建数组类型的响应式变量) 定义 todos 数组，每项包含 id 和 text。

步骤 2 — 用 v-for 循环渲染
[v-for](列表渲染指令，遍历数组生成多个元素) 遍历数组，用 :key 绑定唯一标识。

步骤 3 — 显示列表内容
模板中用 {{ item.text }} 显示每项内容。`,
        contextCode: `<template>
  <div>
    <h3>待办事项</h3>
    <ul>
      <!-- 用 v-for 渲染列表 -->
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const todos = ref([
  { id: 1, text: '学习 Vue3' },
  { id: 2, text: '写代码' },
  { id: 3, text: '提交作业' }
])
</script>`,
        hints: [
          'ul 内部写 <li v-for="item in todos" :key="item.id">',
          '显示内容用 {{ item.text }}',
          ':key 必须是唯一的，用 item.id'
        ],
        code: `<template>
  <div>
    <h3>待办事项</h3>
    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const todos = ref([
  { id: 1, text: '学习 Vue3' },
  { id: 2, text: '写代码' },
  { id: 3, text: '提交作业' }
])
</script>`,
        verification: '使用了 v-for 指令循环渲染列表，绑定了 :key',
        filePath: 'src/components/TodoList.vue'
      },
      {
        id: 'vue3-5',
        number: 5,
        title: '表单绑定',
        concept: 'v-model 双向绑定',
        difficulty: 'easy',
        task: '用 v-model 实现一个登录表单',
        prerequisites: `<h4>🐍 表单输入绑定</h4>
<p><code>v-model</code> 在表单元素上创建双向数据绑定：</p>
<pre><code>&lt;input v-model="username" /&gt;
&lt;textarea v-model="message"&gt;&lt;/textarea&gt;
&lt;select v-model="selected"&gt;
  &lt;option value="A"&gt;选项A&lt;/option&gt;
&lt;/select&gt;
</code></pre>

<h4>🔑 核心概念：修饰符</h4>
<ul>
  <li><code>.lazy</code> — 在 change 事件后同步（而非 input）</li>
  <li><code>.number</code> — 自动转为数字</li>
  <li><code>.trim</code> — 自动去除首尾空白</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义表单数据
用 [ref('')](创建空字符串的响应式变量) 分别定义 username 和 password。

步骤 2 — 用 v-model 绑定输入框
[v-model](双向绑定指令，输入框值变化时变量自动更新) 绑定到对应的 ref 变量。

步骤 3 — 显示绑定结果
模板中用 {{ username }} 和 {{ password }} 实时显示输入内容。`,
        contextCode: `<template>
  <div>
    <h3>登录表单</h3>
    <input placeholder="用户名" />
    <input type="password" placeholder="密码" />
    <button>登录</button>
    <p>用户名：???  密码：???</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>`,
        hints: [
          '用 ref("") 分别创建 username 和 password',
          'input 上加 v-model="username"',
          '显示用 {{ username }} 和 {{ password }}'
        ],
        code: `<template>
  <div>
    <h3>登录表单</h3>
    <input v-model="username" placeholder="用户名" />
    <input v-model="password" type="password" placeholder="密码" />
    <button>登录</button>
    <p>用户名：{{ username }}  密码：{{ password }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const username = ref('')
const password = ref('')
</script>`,
        verification: '使用了 v-model 双向绑定，输入时实时显示',
        filePath: 'src/components/LoginForm.vue'
      },
      {
        id: 'vue3-6',
        number: 6,
        title: '插槽入门',
        concept: 'slot 插槽',
        difficulty: 'medium',
        task: '创建一个 Card 组件，通过插槽接收内容',
        prerequisites: `<h4>🐍 插槽是什么</h4>
<p>插槽（Slot）允许父组件向子组件传递 HTML 内容：</p>
<pre><code>&lt;!-- 子组件 Card.vue --&gt;
&lt;div class="card"&gt;
  &lt;slot&gt;&lt;/slot&gt;  &lt;!-- 插槽占位符 --&gt;
&lt;/div&gt;

&lt;!-- 父组件使用 --&gt;
&lt;Card&gt;
  &lt;p&gt;这是卡片内容&lt;/p&gt;
&lt;/Card&gt;
</code></pre>

<h4>🔑 具名插槽</h4>
<p>可以定义多个插槽，用 name 属性区分：</p>
<pre><code>&lt;slot name="header"&gt;&lt;/slot&gt;
&lt;slot name="default"&gt;&lt;/slot&gt;
&lt;slot name="footer"&gt;&lt;/slot&gt;
</code></pre>`,
        conceptDetail: `步骤 1 — 在子组件中定义插槽
用 [<slot>](插槽占位符，父组件内容会填充到这里) 标记内容插入点。

步骤 2 — 在父组件中传递内容
父组件在子组件标签内写 HTML，自动填充到插槽位置。

步骤 3 — 添加默认内容
[slot 标签内可以写默认内容](当父组件没有传递内容时显示)。`,
        contextCode: `<!-- Card.vue -->
<template>
  <div class="card">
    <!-- 定义一个插槽 -->
  </div>
</template>

<!-- 使用 Card.vue -->
<template>
  <Card>
    <h2>卡片标题</h2>
    <p>卡片内容</p>
  </Card>
</template>`,
        hints: [
          '在 Card.vue 的 div 内部加 <slot></slot>',
          '父组件在 <Card> 标签内写 HTML 内容',
          '插槽内容会自动替换 <slot> 的位置'
        ],
        code: `<!-- Card.vue -->
<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
}
</style>`,
        verification: '创建了带插槽的 Card 组件，父组件内容正确显示',
        filePath: 'src/components/Card.vue'
      }
    ]
  },
  {
    id: 'composition-api',
    name: '阶段二：组合式 API',
    description: '深入理解 Vue3 组合式 API：computed、watch、生命周期、组件通信',
    levels: [
      {
        id: 'vue3-7',
        number: 7,
        title: '计算属性',
        concept: 'computed',
        difficulty: 'medium',
        task: '用 computed 实现一个购物车总价计算',
        prerequisites: `<h4>🐍 computed 计算属性</h4>
<p><code>computed</code> 创建一个依赖其他响应式数据的派生值，当依赖变化时自动重新计算：</p>
<pre><code>const price = ref(10)
const quantity = ref(2)
const total = computed(() => price.value * quantity.value)
</code></pre>

<h4>🔑 核心概念：缓存特性</h4>
<p>computed 会缓存结果，只有依赖变化时才重新计算，比 methods 更高效。</p>`,
        conceptDetail: `步骤 1 — 定义商品数据
用 [ref([])](创建数组类型的响应式变量) 定义 items 数组，包含商品名和单价。

步骤 2 — 用 computed 计算总价
[computed](计算属性，自动追踪依赖并缓存结果) 遍历 items 数组，累加 price * quantity。

步骤 3 — 在模板中显示
模板中用 {{ totalPrice }} 显示计算结果。`,
        contextCode: `<template>
  <div>
    <div v-for="item in items" :key="item.name">
      {{ item.name }}: ¥{{ item.price }} x {{ item.quantity }}
    </div>
    <p>总价：¥???</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const items = ref([
  { name: 'Vue3教程', price: 99, quantity: 1 },
  { name: '编程书籍', price: 59, quantity: 2 }
])
</script>`,
        hints: [
          '用 computed(() => ...) 创建计算属性',
          '在回调中用 items.value.reduce() 累加',
          '总价 = sum(item.price * item.quantity)'
        ],
        code: `<template>
  <div>
    <div v-for="item in items" :key="item.name">
      {{ item.name }}: ¥{{ item.price }} x {{ item.quantity }}
    </div>
    <p>总价：¥{{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const items = ref([
  { name: 'Vue3教程', price: 99, quantity: 1 },
  { name: '编程书籍', price: 59, quantity: 2 }
])
const totalPrice = computed(() =>
  items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>`,
        verification: '使用了 computed 计算属性，模板中显示总价',
        solution: `解题步骤：
1. 用 ref([]) 定义商品数组 items
2. 用 computed(() => {...}) 创建计算属性
3. 在回调中用 items.value.reduce() 累加
4. 累加公式：sum + item.price * item.quantity
5. 初始值设为 0`,
        filePath: 'src/components/CartTotal.vue'
      },
      {
        id: 'vue3-8',
        number: 8,
        title: '侦听器',
        concept: 'watch',
        difficulty: 'medium',
        task: '用 watch 监听输入变化，实现搜索防抖',
        prerequisites: `<h4>🐍 watch 侦听器</h4>
<p><code>watch</code> 监听响应式数据变化，执行副作用操作：</p>
<pre><code>watch(source, (newVal, oldVal) => {
  console.log('变化了', oldVal, '->', newVal)
})
</code></pre>

<h4>🔑 核心概念：deep 和 immediate</h4>
<ul>
  <li><code>{ deep: true }</code> — 深度监听对象内部变化</li>
  <li><code>{ immediate: true }</code> — 创建时立即执行一次</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建搜索关键词状态
用 [ref('')](创建空字符串的响应式变量) 定义 keyword。

步骤 2 — 用 watch 监听变化
[keyword](侦听器，在数据变化时执行回调) 监听 keyword 变化，使用 setTimeout 实现防抖。

步骤 3 — 显示搜索结果
模板中用 v-show 控制"搜索中..."提示的显示。`,
        contextCode: `<template>
  <div>
    <input v-model="keyword" placeholder="输入搜索..." />
    <p v-show="searching">搜索中...</p>
    <p>当前搜索：{{ keyword }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const keyword = ref('')
const searching = ref(false)
</script>`,
        hints: [
          '用 watch(keyword, (val) => {...}, { immediate: true }) 监听',
          '在回调中先设 searching = true，再 setTimeout 延迟',
          '延迟结束后设 searching = false'
        ],
        code: `<template>
  <div>
    <input v-model="keyword" placeholder="输入搜索..." />
    <p v-show="searching">搜索中...</p>
    <p>当前搜索：{{ keyword }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const keyword = ref('')
const searching = ref(false)
let timer = null

watch(keyword, (val) => {
  searching.value = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    searching.value = false
  }, 500)
}, { immediate: true })
</script>`,
        verification: '使用了 watch 侦听器，实现了防抖效果',
        filePath: 'src/components/SearchDebounce.vue'
      },
      {
        id: 'vue3-9',
        number: 9,
        title: '生命周期钩子',
        concept: 'onMounted / onUnmounted',
        difficulty: 'medium',
        task: '用 onMounted 模拟组件挂载后的数据加载',
        prerequisites: `<h4>🐍 生命周期钩子</h4>
<p>Vue3 组件有多个生命周期阶段，每个阶段都有对应的钩子函数：</p>
<pre><code>import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件已挂载，可以操作 DOM')
})

onUnmounted(() => {
  console.log('组件已销毁，清理资源')
})
</code></pre>

<h4>🔑 常用钩子</h4>
<ul>
  <li><code>onBeforeMount</code> — 挂载前</li>
  <li><code>onMounted</code> — 挂载后（最常用）</li>
  <li><code>onBeforeUpdate</code> — 更新前</li>
  <li><code>onUpdated</code> — 更新后</li>
  <li><code>onBeforeUnmount</code> — 卸载前</li>
  <li><code>onUnmounted</code> — 卸载后</li>
</ul>`,
        conceptDetail: `步骤 1 — 导入 onMounted
[onMounted](生命周期钩子，组件挂载完成后执行) 从 vue 导入。

步骤 2 — 在 onMounted 中加载数据
在钩子函数内模拟异步数据加载（用 setTimeout）。

步骤 3 — 显示加载状态
用 ref 控制 loading 状态，模板中用 v-show 显示加载提示。`,
        contextCode: `<template>
  <div>
    <p v-show="loading">加载中...</p>
    <p v-show="!loading">数据：{{ data }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(true)
const data = ref('')
</script>`,
        hints: [
          '从 vue 导入 onMounted',
          'onMounted(() => {...}) 内用 setTimeout 模拟加载',
          'setTimeout 回调中设 loading = false，data = "加载完成"'
        ],
        code: `<template>
  <div>
    <p v-show="loading">加载中...</p>
    <p v-show="!loading">数据：{{ data }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const loading = ref(true)
const data = ref('')

onMounted(() => {
  setTimeout(() => {
    data.value = '加载完成！'
    loading.value = false
  }, 1000)
})
</script>`,
        verification: '使用了 onMounted 钩子，组件挂载后执行数据加载',
        filePath: 'src/components/DataLoader.vue'
      },
      {
        id: 'vue3-10',
        number: 10,
        title: '组件通信',
        concept: 'props / emit',
        difficulty: 'medium',
        task: '创建父组件传递数据给子组件，子组件通过事件回传',
        prerequisites: `<h4>🐍 父子组件通信</h4>
<p>Vue3 通过 props 和 emit 实现父子组件通信：</p>
<pre><code>&lt;!-- 子组件 --&gt;
const props = defineProps(['title'])
const emit = defineEmits(['update'])

// 使用
props.title
emit('update', newValue)
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>defineProps</code> — 声明接收的 props</li>
  <li><code>defineEmits</code> — 声明可触发的事件</li>
  <li>Props 是单向数据流：父→子</li>
  <li>Emit 是子→父通信方式</li>
</ul>`,
        conceptDetail: `步骤 1 — 在子组件中定义 props
[defineProps](声明组件接收的属性) 定义 title 属性。

步骤 2 — 在子组件中定义 emit
[defineEmits](声明组件可触发的事件) 定义 update 事件。

步骤 3 — 父组件绑定 props 和事件
父组件传 :title="xxx"，监听 @update="handleUpdate"。`,
        contextCode: `<!-- Child.vue -->
<template>
  <div>
    <p>标题：{{ ??? }}</p>
    <button>修改标题</button>
  </div>
</template>

<script setup>
// 定义 props 和 emit
</script>

<!-- Parent.vue -->
<template>
  <Child title="初始标题" @update="???" />
</template>`,
        hints: [
          '子组件用 defineProps(["title"]) 接收属性',
          '子组件用 defineEmits(["update"]) 声明事件',
          '按钮点击时 emit("update", "新标题")'
        ],
        code: `<!-- Child.vue -->
<template>
  <div>
    <p>标题：{{ title }}</p>
    <button @click="emit('update', '新标题')">修改标题</button>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
const emit = defineEmits(['update'])
</script>`,
        verification: '子组件正确使用 props 和 emit，父子通信正常',
        filePath: 'src/components/Child.vue'
      },
      {
        id: 'vue3-11',
        number: 11,
        title: 'provide/inject',
        concept: '依赖注入',
        difficulty: 'medium',
        task: '用 provide/inject 实现跨层级组件通信',
        prerequisites: `<h4>🐍 provide/inject</h4>
<p>provide/inject 允许祖先组件向所有后代组件传递数据，无需逐层 props：</p>
<pre><code>// 祖先组件
provide('theme', ref('dark'))

// 任意后代组件
const theme = inject('theme')
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>provide</code> — 向后代提供数据</li>
  <li><code>inject</code> — 注入祖先提供的数据</li>
  <li>可以提供响应式数据（ref/reactive）</li>
</ul>`,
        conceptDetail: `步骤 1 — 祖先组件 provide 数据
[provide](向所有后代组件提供数据) 传递 theme 变量。

步骤 2 — 后代组件 inject 注入
[inject](从祖先组件注入数据) 获取 theme 值。

步骤 3 — 响应式更新
provide 的是 ref，修改后所有后代都会更新。`,
        contextCode: `<!-- GrandParent.vue -->
<template>
  <Parent />
</template>

<script setup>
import { ref, provide } from 'vue'
const theme = ref('light')
// provide theme 给后代
</script>

<!-- Child.vue (任意层级) -->
<template>
  <p>当前主题：{{ ??? }}</p>
</template>

<script setup>
// inject theme
</script>`,
        hints: [
          '祖先用 provide("theme", theme) 提供数据',
          '后代用 const theme = inject("theme") 注入',
          'provide 的是 ref，修改会响应式更新'
        ],
        code: `<!-- GrandParent.vue -->
<template>
  <Parent />
</template>

<script setup>
import { ref, provide } from 'vue'
const theme = ref('light')
provide('theme', theme)
</script>

<!-- Child.vue -->
<template>
  <p>当前主题：{{ theme }}</p>
</template>

<script setup>
import { inject } from 'vue'
const theme = inject('theme')
</script>`,
        verification: '使用了 provide/inject 实现跨层级通信',
        filePath: 'src/components/Child.vue'
      }
    ]
  },
  {
    id: 'router-state',
    name: '阶段三：路由与状态管理',
    description: '掌握 Vue Router 和 Pinia 状态管理',
    levels: [
      {
        id: 'vue3-12',
        number: 12,
        title: 'Vue Router 基础',
        concept: '路由配置',
        difficulty: 'medium',
        task: '配置 Vue Router，实现页面切换',
        prerequisites: `<h4>🐍 Vue Router 是什么</h4>
<p>Vue Router 是 Vue.js 的官方路由管理器，实现单页应用的页面切换：</p>
<pre><code>import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>&lt;router-view&gt;</code> — 路由出口，显示当前页面</li>
  <li><code>&lt;router-link&gt;</code> — 导航链接</li>
  <li><code>createWebHashHistory</code> — 哈希模式（GitHub Pages 兼容）</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义路由规则
[createRouter](创建路由实例) 配置路径和组件的映射关系。

步骤 2 — 在模板中使用
[<router-view>](路由出口组件) 显示匹配的页面组件。

步骤 3 — 创建导航链接
[<router-link>](导航链接组件) 实现页面切换。`,
        contextCode: `<!-- router.js -->
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})

<!-- App.vue -->
<template>
  <nav>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
  </nav>
  <!-- 路由出口 -->
</template>`,
        hints: [
          '从 vue-router 导入 createRouter 和 createWebHashHistory',
          'routes 数组定义路径和组件的映射',
          'App.vue 中用 <router-view /> 作为路由出口'
        ],
        code: `<!-- router.js -->
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})`,
        verification: '配置了 Vue Router，实现了页面路由切换',
        filePath: 'src/router.js'
      },
      {
        id: 'vue3-13',
        number: 13,
        title: '动态路由',
        concept: '路由参数',
        difficulty: 'medium',
        task: '实现用户详情页，通过路由参数传递用户 ID',
        prerequisites: `<h4>🐍 动态路由匹配</h4>
<p>使用冒号标记动态段，捕获 URL 参数：</p>
<pre><code>const routes = [
  { path: '/user/:id', component: UserDetail }
]
</code></pre>

<p>在组件中获取参数：</p>
<pre><code>import { useRoute } from 'vue-router'
const route = useRoute()
const userId = route.params.id
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>:id</code> — 动态路径参数</li>
  <li><code>route.params</code> — 获取路由参数</li>
  <li><code>route.query</code> — 获取查询参数</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义动态路由
路由路径中用 [:id](动态路径参数，匹配 URL 中的可变部分) 定义动态段。

步骤 2 — 在组件中获取参数
[useRoute()](获取当前路由信息) 获取 route 对象，通过 route.params.id 获取参数。

步骤 3 — 根据参数加载数据
根据 ID 获取对应用户数据并显示。`,
        contextCode: `<!-- router.js -->
const routes = [
  { path: '/user/:id', component: UserDetail }
]

<!-- UserDetail.vue -->
<template>
  <div>
    <h2>用户详情</h2>
    <p>用户 ID：{{ ??? }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>`,
        hints: [
          '路由路径写 /user/:id',
          '组件中用 useRoute() 获取路由对象',
          '通过 route.params.id 获取用户 ID'
        ],
        code: `<!-- UserDetail.vue -->
<template>
  <div>
    <h2>用户详情</h2>
    <p>用户 ID：{{ userId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const userId = route.params.id
</script>`,
        verification: '使用了动态路由参数，能正确获取 URL 中的 ID',
        filePath: 'src/views/UserDetail.vue'
      },
      {
        id: 'vue3-14',
        number: 14,
        title: 'Pinia 状态管理',
        concept: 'Pinia Store',
        difficulty: 'medium',
        task: '用 Pinia 管理全局用户状态',
        prerequisites: `<h4>🐍 Pinia 是什么</h4>
<p>Pinia 是 Vue 官方推荐的状态管理库，替代 Vuex：</p>
<pre><code>import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = ref('Guest')
  const login = (newName) => { name.value = newName }
  return { name, login }
})
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>defineStore</code> — 定义状态仓库</li>
  <li><code>ref()</code> — 定义状态</li>
  <li><code>computed</code> — 定义 getters</li>
  <li><code>function</code> — 定义 actions</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义 Store
[defineStore](定义 Pinia 状态仓库) 创建 user store，包含 name 状态和 login 方法。

步骤 2 — 在组件中使用
[useUserStore()](获取 Pinia store 实例) 获取 store，直接访问状态和方法。

步骤 3 — 修改状态
调用 store 的方法修改状态，所有组件自动更新。`,
        contextCode: `<!-- stores/user.js -->
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('Guest')
  // 添加 login 方法
})

<!-- App.vue -->
<template>
  <p>当前用户：{{ ??? }}</p>
  <button>登录</button>
</template>

<script setup>
import { useUserStore } from './stores/user'
const store = useUserStore()
</script>`,
        hints: [
          'defineStore 第二个参数是 setup 函数',
          '用 ref("Guest") 定义 name 状态',
          '组件中用 store.name 访问，store.login("xxx") 调用'
        ],
        code: `<!-- stores/user.js -->
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('Guest')
  function login(newName) {
    name.value = newName
  }
  return { name, login }
})`,
        verification: '创建了 Pinia store，能正确管理全局状态',
        filePath: 'src/stores/user.js'
      },
      {
        id: 'vue3-15',
        number: 15,
        title: '状态持久化',
        concept: 'localStorage 持久化',
        difficulty: 'medium',
        task: '让 Pinia 状态在刷新页面后保持',
        prerequisites: `<h4>🐍 状态持久化</h4>
<p>默认情况下 Pinia 状态在刷新页面后丢失，需要手动持久化：</p>
<pre><code>export const useStore = defineStore('app', () => {
  const data = ref([])
  
  function load() {
    const saved = localStorage.getItem('app-data')
    if (saved) data.value = JSON.parse(saved)
  }
  
  function save() {
    localStorage.setItem('app-data', JSON.stringify(data.value))
  }
  
  load()
  return { data, save }
})
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>localStorage.getItem</code> — 读取本地存储</li>
  <li><code>localStorage.setItem</code> — 写入本地存储</li>
  <li><code>JSON.parse/stringify</code> — 序列化/反序列化</li>
</ul>`,
        conceptDetail: `步骤 1 — 在 store 初始化时加载
[load()](从 localStorage 加载数据) 在 store 创建时自动调用。

步骤 2 — 在状态修改时保存
[save()](将数据保存到 localStorage) 在每次修改后调用。

步骤 3 — 处理存储异常
用 try-catch 包裹 localStorage 操作，防止存储空间满。`,
        contextCode: `<!-- stores/counter.js -->
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  function increment() {
    count.value++
    // 保存到 localStorage
  }
  
  // 初始化时加载
  return { count, increment }
})`,
        hints: [
          '用 localStorage.getItem("counter") 读取',
          '用 localStorage.setItem("counter", JSON.stringify(count.value)) 保存',
          '在 store 函数开始时调用 load() 初始化'
        ],
        code: `<!-- stores/counter.js -->
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  function load() {
    try {
      const saved = localStorage.getItem('counter')
      if (saved) count.value = JSON.parse(saved)
    } catch (e) {
      console.warn('加载失败:', e)
    }
  }
  
  function save() {
    try {
      localStorage.setItem('counter', JSON.stringify(count.value))
    } catch (e) {
      console.warn('保存失败:', e)
    }
  }
  
  function increment() {
    count.value++
    save()
  }
  
  load()
  return { count, increment }
})`,
        verification: '实现了 localStorage 持久化，刷新页面后状态保持',
        filePath: 'src/stores/counter.js'
      }
    ]
  },
  {
    id: 'advanced',
    name: '阶段四：进阶特性',
    description: '掌握自定义指令、组合式函数、异步组件等高级特性',
    levels: [
      {
        id: 'vue3-16',
        number: 16,
        title: '自定义指令',
        concept: 'v-directive',
        difficulty: 'hard',
        task: '创建一个 v-focus 自动聚焦指令',
        prerequisites: `<h4>🐍 自定义指令</h4>
<p>自定义指令可以操作 DOM 元素，用于底层 DOM 操作：</p>
<pre><code>// 全局指令
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// 局部指令
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>mounted</code> — 元素插入 DOM 后调用</li>
  <li><code>updated</code> — 元素更新后调用</li>
  <li><code>unmounted</code> — 元素移除后调用</li>
</ul>`,
        conceptDetail: `步骤 1 — 定义指令对象
[v-focus](自定义指令，以 v- 前缀使用) 对象包含 mounted 钩子。

步骤 2 — 在钩子中操作 DOM
[el.focus()](原生 DOM 方法，使元素获得焦点) 在元素挂载后自动聚焦。

步骤 3 — 在模板中使用
标签上加 [v-focus](使用自定义指令) 属性即可。`,
        contextCode: `<template>
  <div>
    <input v-focus placeholder="自动聚焦" />
    <input placeholder="普通输入框" />
  </div>
</template>

<script setup>
// 定义 v-focus 指令
</script>`,
        hints: [
          '定义 const vFocus = { mounted(el) { el.focus() } }',
          '在 script setup 中直接定义，Vue 会自动识别',
          'input 标签上加 v-focus 属性'
        ],
        code: `<template>
  <div>
    <input v-focus placeholder="自动聚焦" />
    <input placeholder="普通输入框" />
  </div>
</template>

<script setup>
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
</script>`,
        verification: '创建了 v-focus 自定义指令，页面加载后输入框自动聚焦',
        filePath: 'src/components/AutoFocus.vue'
      },
      {
        id: 'vue3-17',
        number: 17,
        title: '组合式函数',
        concept: 'composable',
        difficulty: 'hard',
        task: '封装一个 useMousePosition 组合式函数',
        prerequisites: `<h4>🐍 组合式函数是什么</h4>
<p>组合式函数（Composable）是利用 Vue 组合式 API 封装的可复用逻辑：</p>
<pre><code>// useMousePosition.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  
  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }
  
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  
  return { x, y }
}
</code></pre>

<h4>🔑 命名约定</h4>
<ul>
  <li>函数名以 <code>use</code> 开头</li>
  <li>返回 ref 或 reactive 对象</li>
  <li>内部处理生命周期和清理</li>
</ul>`,
        conceptDetail: `步骤 1 — 创建 composable 函数
[useMousePosition](组合式函数，封装可复用的逻辑) 返回响应式的 x, y。

步骤 2 — 在函数中处理生命周期
[onMounted](监听 mousemove 事件) 添加事件监听，[onUnmounted](移除事件监听) 清理。

步骤 3 — 在组件中使用
组件调用 useMousePosition() 获取鼠标坐标。`,
        contextCode: `<!-- composables/useMousePosition.js -->
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  
  // 添加事件监听
  // 清理事件监听
  
  return { x, y }
}

<!-- MouseTracker.vue -->
<template>
  <p>鼠标位置：{{ x }}, {{ y }}</p>
</template>

<script setup>
import { useMousePosition } from '../composables/useMousePosition'
const { x, y } = useMousePosition()
</script>`,
        hints: [
          'onMounted 中 window.addEventListener("mousemove", update)',
          'onUnmounted 中 removeEventListener 清理',
          'update 函数中 x.value = e.pageX'
        ],
        code: `<!-- composables/useMousePosition.js -->
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  
  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }
  
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  
  return { x, y }
}`,
        verification: '创建了 useMousePosition 组合式函数，能追踪鼠标位置',
        filePath: 'src/composables/useMousePosition.js'
      },
      {
        id: 'vue3-18',
        number: 18,
        title: '异步组件',
        concept: 'defineAsyncComponent',
        difficulty: 'hard',
        task: '用 defineAsyncComponent 实现路由懒加载',
        prerequisites: `<h4>🐍 异步组件</h4>
<p>异步组件在需要时才加载，减小初始包体积：</p>
<pre><code>import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>defineAsyncComponent</code> — 定义异步组件</li>
  <li><code>import()</code> — 动态导入</li>
  <li>路由懒加载：路由访问时才加载组件</li>
</ul>`,
        conceptDetail: `步骤 1 — 使用 defineAsyncComponent
[defineAsyncComponent](定义异步加载的组件) 包装动态 import。

步骤 2 — 配置加载状态
可以传入 loadingComponent 和 errorComponent。

步骤 3 — 在路由中使用
路由的 component 用异步组件实现懒加载。`,
        contextCode: `import { defineAsyncComponent } from 'vue'

// 定义异步组件
const HeavyPage = defineAsyncComponent(() =>
  import('./pages/HeavyPage.vue')
)

const routes = [
  { path: '/heavy', component: HeavyPage }
]`,
        hints: [
          'defineAsyncComponent(() => import("./Component.vue"))',
          '路由的 component 属性直接使用异步组件',
          '页面访问时才会加载组件代码'
        ],
        code: `import { defineAsyncComponent } from 'vue'

const HeavyPage = defineAsyncComponent({
  loader: () => import('./pages/HeavyPage.vue'),
  loadingComponent: () => import('./Loading.vue'),
  delay: 200,
  errorComponent: () => import('./Error.vue')
})`,
        verification: '使用了异步组件，实现了路由懒加载',
        filePath: 'src/router.js'
      },
      {
        id: 'vue3-19',
        number: 19,
        title: '性能优化',
        concept: 'shallowRef / v-once',
        difficulty: 'hard',
        task: '用 shallowRef 和 v-once 优化渲染性能',
        prerequisites: `<h4>🐍 Vue3 性能优化</h4>
<p>Vue3 提供多种优化手段：</p>
<pre><code>// shallowRef - 只跟踪 .value 的变化，不深度响应
const data = shallowRef({ list: [...] })

// v-once - 只渲染一次，后续不再更新
&lt;p v-once&gt;{{ expensive computation }}&lt;/p&gt;

// v-memo - 缓存虚拟 DOM 节点
&lt;div v-memo="[val1, val2]"&gt;...&lt;/div&gt;
</code></pre>

<h4>🔑 核心概念</h4>
<ul>
  <li><code>shallowRef</code> — 浅层响应式</li>
  <li><code>v-once</code> — 一次性渲染</li>
  <li><code>v-memo</code> — 虚拟 DOM 缓存</li>
</ul>`,
        conceptDetail: `步骤 1 — 使用 shallowRef
[shallowRef](浅层响应式，不深度追踪对象内部变化) 优化大对象。

步骤 2 — 使用 v-once
[v-once](一次性渲染指令，元素只渲染一次) 缓存静态内容。

步骤 3 — 理解性能权衡
根据场景选择合适的优化策略。`,
        contextCode: `<template>
  <div>
    <p v-once>计算结果：{{ expensiveValue }}</p>
    <div>{{ largeData }}</div>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
// 用 shallowRef 包装大对象
</script>`,
        hints: [
          'import { shallowRef } from "vue"',
          'const data = shallowRef({...})',
          '静态内容加 v-once 属性'
        ],
        code: `<template>
  <div>
    <p v-once>计算结果：{{ expensiveValue }}</p>
    <div>{{ largeData.name }}</div>
    <button @click="updateData">更新</button>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'

const expensiveValue = '10000'
const largeData = shallowRef({
  name: '大对象',
  list: Array.from({ length: 1000 }, (_, i) => i)
})

function updateData() {
  largeData.value = { ...largeData.value, name: '已更新' }
}
</script>`,
        verification: '使用了 shallowRef 和 v-once 优化渲染性能',
        filePath: 'src/components/Optimized.vue'
      }
    ]
  }
]
