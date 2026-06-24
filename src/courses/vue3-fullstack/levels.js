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
        contextCode: `// App.vue - 你的组件会被这个文件导入
<template>
  <Hello />
</template>
<script setup>
import Hello from './components/Hello.vue'
</script>
// main.js - 应用入口
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')`,
        starterCode: `<template>
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
        filePath: 'src/components/Hello.vue',
        cognitiveLoad: 'low',
        dependsOn: [],
        commonMistakes: [
          { pattern: 'message.value', explanation: '模板中用 {{ message }} 而不是 .value，ref 在模板中自动解包' },
          { pattern: 'const message', explanation: '记得从 vue 导入 ref：import { ref } from "vue"' }
        ],
        microSteps: [
          { id: 'step-1', title: '导入 ref', verification: 'import { ref } from \'vue\'', hint: '在 script setup 中导入 ref' , docLinks: [{title: 'ref()', url: 'https://cn.vuejs.org/api/reactivity-core.html#ref'}]},
          { id: 'step-2', title: '创建响应式变量', verification: 'ref(', hint: '用 ref() 包裹字符串' , docLinks: [{title: '响应式基础', url: 'https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html'}]},
          { id: 'step-3', title: '模板插值', verification: '{{ message }}', hint: '双花括号显示变量值' , docLinks: [{title: '模板插值', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html'}]}
        ],
        variations: [{name: '动态组件', description: '<component :is="x"> 动态切换'}],
        transferTasks: [{task: '抽离通用布局为组合式函数', target: '掌握逻辑复用'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `// 这是一个 Vue3 事件处理的例子
// 你可以在按钮上用 @click 绑定事件
// 常用事件修饰符：
// @click.stop   - 阻止冒泡
// @submit.prevent - 阻止默认行为
// @keyup.enter  - 按键修饰符
// 事件对象自动传递
<button @click="handleClick($event)">点击</button>`,
        starterCode: `<template>
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
        filePath: 'src/components/Counter.vue',
        cognitiveLoad: 'low',
        dependsOn: ['vue3-1'],
        commonMistakes: [
          { pattern: 'count++', explanation: '模板中 {{ count }} 直接显示，JS 中才用 count.value++' }
        ],
        microSteps: [
          { id: 'step-1', title: '创建 count', verification: 'ref(0)', hint: 'ref(0) 创建初始值 0 的响应式变量' , docLinks: [{title: 'ref()', url: 'https://cn.vuejs.org/api/reactivity-core.html#ref'}]},
          { id: 'step-2', title: '绑定点击事件', verification: '@click', hint: '在 button 上写 @click' , docLinks: [{title: '事件处理 - @click', url: 'https://cn.vuejs.org/guide/essentials/event-handling.html'}]},
          { id: 'step-3', title: '显示计数值', verification: '{{ count }}', hint: '模板中用 {{ 变量名 }} 显示' , docLinks: [{title: '模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html'}]}
        ],
        variations: [{name: 'v-on: 语法', description: 'v-on:click 是 @click 完整写法，完全等价'}],
        transferTasks: [{task: '实现带阻止默认行为的表单按钮', target: '掌握事件修饰符'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `// 条件渲染：根据条件决定是否显示元素
// v-if 为 true 时渲染，false 时销毁 DOM
// 基本用法
<div v-if="show">可见内容</div>
<div v-else>隐藏时显示</div>
// v-show 只是切换 display 属性
<div v-show="show">始终渲染，只是隐藏</div>
// v-if vs v-show：
// - v-if：切换开销大，适合不频繁切换
// - v-show：初始开销大，适合频繁切换`,
        starterCode: `<template>
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
        filePath: 'src/components/Toggle.vue',
        cognitiveLoad: 'low',
        dependsOn: ['vue3-1'],
        commonMistakes: [
          { pattern: 'v-if="visible == true"', explanation: 'v-if 直接写变量名即可，无需 == true 比较' }
        ],
        microSteps: [
          { id: 'step-1', title: '创建布尔状态', verification: 'ref(true)', hint: 'ref(true) 创建初始为 true 的变量' , docLinks: [{title: 'ref()', url: 'https://cn.vuejs.org/api/reactivity-core.html#ref'}]},
          { id: 'step-2', title: '条件渲染', verification: 'v-if="visible"', hint: 'p 标签上加 v-if' , docLinks: [{title: 'v-if 条件渲染', url: 'https://cn.vuejs.org/guide/essentials/conditional.html'}]},
          { id: 'step-3', title: '切换状态', verification: '@click="visible =', hint: '按钮绑定 @click 切换 visible 值' , docLinks: [{title: '事件处理', url: 'https://cn.vuejs.org/guide/essentials/event-handling.html'}]}
        ],
        variations: [{name: 'v-show', description: 'v-show 切换 display，频繁切换性能更好'}],
        transferTasks: [{task: '实现 Tab + 权限门禁页面', target: '掌握条件渲染组合'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `// 列表渲染：用 v-for 遍历数组生成多个元素
// 必须绑定 :key 帮助 Vue 高效更新 DOM
// 基本用法
<li v-for="item in items" :key="item.id">
  {{ item.text }}
</li>
// 带索引
<li v-for="(item, index) in items" :key="item.id">
  {{ index }}. {{ item.text }}
</li>
// 注意：:key 必须唯一，通常用 id
// 避免用 index 作为 key（数据变化时可能出错）`,
        starterCode: `<template>
  <div>
    <h3>待办事项</h3>
    <ul>
      <!-- 用 v-for 渲染列表 -->
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// 定义待办事项数组
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
        filePath: 'src/components/TodoList.vue',
        cognitiveLoad: 'low',
        dependsOn: ['vue3-1'],
        commonMistakes: [
          { pattern: ':key="index"', explanation: '避免用 index 作 key，用数据的唯一 id 更可靠' }
        ],
        microSteps: [
          { id: 'step-1', title: '定义数组', verification: 'ref([', hint: 'ref([]) 创建待办事项数组' , docLinks: [{title: 'ref()', url: 'https://cn.vuejs.org/api/reactivity-core.html#ref'}]},
          { id: 'step-2', title: 'v-for 渲染', verification: 'v-for="item in todos"', hint: 'li 标签上加 v-for' , docLinks: [{title: 'v-for 列表渲染', url: 'https://cn.vuejs.org/guide/essentials/list.html'}]},
          { id: 'step-3', title: '绑定 :key', verification: ':key="item.id"', hint: '每项绑定唯一的 :key' , docLinks: [{title: ':key 属性', url: 'https://cn.vuejs.org/api/built-in-special-attributes.html#key'}]}
        ],
        variations: [{name: ':key', description: 'v-for 必须绑定 :key 优化渲染'}],
        transferTasks: [{task: '实现可搜索过滤动态列表', target: '掌握列表渲染过滤'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        starterCode: `<template>
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
        filePath: 'src/components/LoginForm.vue',
        cognitiveLoad: 'low',
        dependsOn: ['vue3-1'],
        commonMistakes: [
          { pattern: 'v-model="username.value"', explanation: 'v-model 直接绑定 ref 变量名，不需要 .value' }
        ],
        microSteps: [
          { id: 'step-1', title: '定义表单变量', verification: 'ref(\'\')', hint: 'ref("") 创建空字符串变量' , docLinks: [{title: 'ref()', url: 'https://cn.vuejs.org/api/reactivity-core.html#ref'}]},
          { id: 'step-2', title: 'v-model 绑定', verification: 'v-model="username"', hint: 'input 上加 v-model' , docLinks: [{title: 'v-model 表单绑定', url: 'https://cn.vuejs.org/guide/essentials/forms.html'}]},
          { id: 'step-3', title: '显示输入内容', verification: '{{ username }}', hint: '用 {{}} 显示变量值' , docLinks: [{title: '模板插值', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html'}]}
        ],
        variations: [{name: '修饰符', description: '.lazy / .number / .trim 增强 v-model'}],
        transferTasks: [{task: '封装自动补全搜索框组件', target: '掌握 v-model 自定义组件'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- 插槽语法参考 -->
<!-- 默认插槽 -->
<template>
  <div class="wrapper"><slot></slot></div>
</template>
<!-- 使用：传入的内容会填充到 slot 位置 -->
<!-- 具名插槽 -->
<template>
  <slot name="header"></slot>
  <slot name="default"></slot>
</template>
<!-- 使用：<template #header>标题</template> -->
<!-- 作用域插槽 -->
<slot :item="data"></slot>
<!-- 使用：<template #default="{ item }">{{ item }}</template> -->`,
        starterCode: `<!-- Card.vue -->
<template>
  <div class="card">
    <!-- 在这里添加插槽 -->
  </div>
</template>
<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
}
</style>`,
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
        filePath: 'src/components/Card.vue',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-1', 'vue3-2'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '定义 Card 组件', verification: 'Card', hint: '定义带插槽的 Card 组件' , docLinks: [{title: '组件基础', url: 'https://cn.vuejs.org/guide/essentials/component-basics.html'}, {title: 'SFC', url: 'https://cn.vuejs.org/guide/scaling-up/sfc.html'}]},
          { id: 'step-2', title: '使用 slot 插槽', verification: '<slot', hint: '在 Card 组件内放置 <slot> 标签' , docLinks: [{title: '插槽 slot', url: 'https://cn.vuejs.org/guide/components/slots.html'}]},
          { id: 'step-3', title: '传递插槽内容', verification: '</slot>', hint: '在 Card 组件内用 <slot> 定义插槽' , docLinks: [{title: '插槽传递内容', url: 'https://cn.vuejs.org/guide/components/slots.html'}]}
        ],
        variations: [{name: '具名插槽', description: '<slot name="header"> 配合 v-slot'}],
        transferTasks: [{task: '封装表格组件，具名插槽自定义列', target: '掌握高阶组件'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        starterCode: `<template>
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
        filePath: 'src/components/CartTotal.vue',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-1', 'vue3-2'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '定义响应式数据', verification: 'ref(', hint: '创建商品价格和数量数据' , docLinks: [{title: 'ref()', url: 'https://cn.vuejs.org/api/reactivity-core.html#ref'}]},
          { id: 'step-2', title: '导入计算属性', verification: 'computed(', hint: '用 computed 计算购物车总价' , docLinks: [{title: 'computed()', url: 'https://cn.vuejs.org/api/reactivity-core.html#computed'}]},
          { id: 'step-3', title: '绑定计算结果', verification: 'totalPrice', hint: '模板中显示 totalPrice 计算结果' , docLinks: [{title: '计算属性', url: 'https://cn.vuejs.org/guide/essentials/computed.html'}]}
        ],
        variations: [{name: '方法调用', description: 'computed 有缓存，方法每次重新计算'}],
        transferTasks: [{task: '实现购物车总价含优惠券折扣', target: '掌握 computed 组合'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- watch 语法参考 -->
import { ref, watch, watchEffect } from 'vue'
const keyword = ref('')
// 基本用法
watch(keyword, (newVal, oldVal) => {
  console.log('变化了', oldVal, '->', newVal)
})
// 深度监听
watch(obj, (val) => {...}, { deep: true })
// 立即执行
watch(keyword, (val) => {...}, { immediate: true })
// 多源监听
watch([keyword, count], ([newK, newC], [oldK, oldC]) => {...})
// watchEffect 自动追踪依赖
watchEffect(() => { console.log(keyword.value) })`,
        starterCode: `<template>
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
// 用 watch 监听 keyword 变化，实现防抖
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
        filePath: 'src/components/SearchDebounce.vue',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-1', 'vue3-2'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '创建搜索关键词', verification: 'ref(', hint: '用 ref 定义搜索输入框关键词' , docLinks: [{title: 'ref()', url: 'https://cn.vuejs.org/api/reactivity-core.html#ref'}]},
          { id: 'step-2', title: '监听输入变化', verification: 'watch(', hint: '用 watch 监听搜索词变化' , docLinks: [{title: 'watch()', url: 'https://cn.vuejs.org/api/reactivity-core.html#watch'}]},
          { id: 'step-3', title: '实现搜索防抖', verification: 'setTimeout', hint: '用 setTimeout 延迟搜索请求' , docLinks: [{title: 'setTimeout', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout'}]}
        ],
        variations: [{name: 'watchEffect', description: 'watchEffect 自动追踪依赖'}],
        transferTasks: [{task: '实现搜索防抖请求 API', target: '掌握 watch 异步'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- 生命周期钩子参考 -->
import { ref, onMounted, onUnmounted, onBeforeMount, onUpdated } from 'vue'
onBeforeMount(() => { /* 挂载前 */ })
onMounted(() => { /* 挂载后，可操作 DOM */ })
onUpdated(() => { /* 数据更新后 */ })
onBeforeUnmount(() => { /* 卸载前，清理资源 */ })
onUnmounted(() => { /* 卸载后 */ })
// 常用模式：onMounted 加载数据，onUnmounted 清理
onMounted(async () => { const data = await fetch(...) })
onUnmounted(() => { clearInterval(timer) })`,
        starterCode: `<template>
  <div>
    <p v-show="loading">加载中...</p>
    <p v-show="!loading">数据：{{ data }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const loading = ref(true)
const data = ref('')
// 在这里用 onMounted 模拟数据加载（setTimeout 延迟 1 秒）
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
        filePath: 'src/components/DataLoader.vue',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-1', 'vue3-2'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '导入生命周期钩子', verification: 'onMounted', hint: '从 vue 导入 onMounted' , docLinks: [{title: 'onMounted()', url: 'https://cn.vuejs.org/api/composition-api-lifecycle.html#onmounted'}]},
          { id: 'step-2', title: '定义异步加载函数', verification: 'setTimeout', hint: '用 setTimeout 模拟异步加载' , docLinks: [{title: 'async/await', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function'}]},
          { id: 'step-3', title: '组件挂载时加载', verification: 'onMounted(', hint: '在 onMounted 中调用加载函数' , docLinks: [{title: '生命周期', url: 'https://cn.vuejs.org/guide/essentials/lifecycle.html'}]}
        ],
        variations: [{name: '更多用法', description: '查阅 Vue3 官方文档'}],
        transferTasks: [{task: '结合实际场景应用所学概念', target: '巩固知识'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- props/emit 语法参考 -->
// 子组件
<script setup>
const props = defineProps(['title'])
// 或带类型：defineProps({ title: String, count: Number })
const emit = defineEmits(['update', 'delete'])
// 触发事件：emit('update', newValue)
</script>
// 父组件
<template>
  <Child :title="msg" @update="handleUpdate" />
</template>`,
        starterCode: `<!-- Child.vue -->
<template>
  <div>
    <p>标题：{{ title }}</p>
    <button @click="???">修改标题</button>
  </div>
</template>
<script setup>
// 用 defineProps 接收 title 属性
// 用 defineEmits 声明 update 事件
</script>`,
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
        filePath: 'src/components/Child.vue',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-1', 'vue3-2', 'vue3-3'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '父组件传递属性', verification: ':', hint: '父组件用 :xxx 绑定属性传值' , docLinks: [{title: 'Props', url: 'https://cn.vuejs.org/guide/components/props.html'}]},
          { id: 'step-2', title: '子组件接收 props', verification: 'defineProps', hint: '子组件用 defineProps 接收数据' , docLinks: [{title: 'defineProps', url: 'https://cn.vuejs.org/api/components-props.html#defineprops'}]},
          { id: 'step-3', title: '子组件 emit 事件', verification: 'defineEmits', hint: '用 defineEmits 声明并触发事件' , docLinks: [{title: 'defineEmits', url: 'https://cn.vuejs.org/api/components-props.html#defineemits'}]}
        ],
        variations: [{name: '类型标注', description: 'defineProps<{ msg: string }>() TS 泛型'}],
        transferTasks: [{task: '封装表单输入组件实现双向绑定', target: '掌握组件通信'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- provide/inject 语法参考 -->
// 祖先组件
import { ref, provide } from 'vue'
const theme = ref('dark')
provide('theme', theme)
provide('appName', 'MyApp')  // 可提供普通值
// 后代组件（任意层级）
import { inject } from 'vue'
const theme = inject('theme')  // 获取值
const app = inject('appName', '默认值')  // 带默认值
// 响应式：provide 的是 ref，修改后后代自动更新
theme.value = 'light'`,
        starterCode: `<!-- GrandParent.vue -->
<template>
  <Parent />
</template>
<script setup>
import { ref, provide } from 'vue'
const theme = ref('light')
// 用 provide 提供 theme 数据
</script>`,
        hints: [
          '祖先用 provide("theme", theme) 提供数据',
          '后代用 const theme = inject("theme") 注入',
          'provide 的是 ref，修改会响应式更新'
        ],
        code: `<!-- Child.vue -->
<template>
  <p>当前主题：{{ theme }}</p>
</template>
<script setup>
import { inject } from 'vue'
const theme = inject('theme')
</script>`,
        verification: '使用了 provide/inject 实现跨层级通信',
        filePath: 'src/components/Child.vue',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-10'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: 'provide 提供数据', verification: 'inject(', hint: '子组件用 inject 注入祖先提供的数据' , docLinks: [{title: 'provide()', url: 'https://cn.vuejs.org/api/composition-api-dependency-injection.html#provide'}]},
          { id: 'step-2', title: 'inject 注入数据', verification: 'inject(', hint: '后代组件用 inject 注入数据' , docLinks: [{title: 'inject()', url: 'https://cn.vuejs.org/api/composition-api-dependency-injection.html#inject'}]},
          { id: 'step-3', title: '数据响应式更新', verification: 'const theme', hint: '用 inject 注入数据并用变量接收' , docLinks: [{title: 'ref()', url: 'https://cn.vuejs.org/api/reactivity-core.html#ref'}]}
        ],
        variations: [{name: '更多用法', description: '查阅 Vue3 官方文档'}],
        transferTasks: [{task: '结合实际场景应用所学概念', target: '巩固知识'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- Vue Router 配置参考 -->
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import('./Home.vue') },
  { path: '/about', component: About },
  { path: '/user/:id', component: UserDetail }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// App.vue 模板
<router-link to="/">首页</router-link>
<router-view />`,
        starterCode: `<!-- router.js -->
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
const routes = [
  // 在这里定义路由规则：path 和 component 的映射
]
// 用 createRouter 创建路由实例
`,
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
        filePath: 'src/router.js',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-1', 'vue3-2'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '创建路由实例', verification: 'createRouter', hint: '用 createRouter 创建路由实例' , docLinks: [{title: 'createRouter', url: 'https://router.vuejs.org/zh/api/#createrouter'}]},
          { id: 'step-2', title: '定义路由表', verification: 'routes = [', hint: '配置 path 和 component 映射关系' , docLinks: [{title: 'routes 配置', url: 'https://router.vuejs.org/zh/guide/'}]},
          { id: 'step-3', title: '渲染路由页面', verification: 'export default', hint: '用 router-view 渲染匹配的组件' , docLinks: [{title: 'router-view', url: 'https://router.vuejs.org/zh/api/#router-view'}]}
        ],
        variations: [{name: '编程式导航', description: 'router.push() 等效 <router-link>'}],
        transferTasks: [{task: '实现用户详情 + 路由守卫', target: '掌握路由守卫'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- 动态路由参数参考 -->
// 路由配置
{ path: '/user/:id', component: UserDetail }
{ path: '/post/:category/:slug', component: PostDetail }
// 组件中获取参数
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
route.params.id        // 路径参数
route.query.page       // 查询参数 ?page=1
route.fullPath         // 完整路径
// 编程式导航
const router = useRouter()
router.push('/user/123')
router.push({ path: '/user', query: { page: 1 } })`,
        starterCode: `<!-- UserDetail.vue -->
<template>
  <div>
    <h2>用户详情</h2>
    <p>用户 ID：{{ userId }}</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
// 用 useRoute 获取路由对象，从 params 中获取用户 ID
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
        filePath: 'src/views/UserDetail.vue',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-12'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '配置动态路由参数', verification: ':', hint: '用 :userId 定义动态路由参数' , docLinks: [{title: '动态路由', url: 'https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html'}]},
          { id: 'step-2', title: '获取路由参数', verification: 'useRoute(', hint: '用 useRoute 获取当前路由信息' , docLinks: [{title: 'useRoute()', url: 'https://router.vuejs.org/zh/api/#useroute'}]},
          { id: 'step-3', title: '加载用户数据', verification: 'route.params', hint: '从 params 中提取用户 ID 并加载' , docLinks: [{title: 'route.params', url: 'https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html'}]}
        ],
        variations: [{name: '编程式导航', description: 'router.push() 等效 <router-link>'}],
        transferTasks: [{task: '实现用户详情 + 路由守卫', target: '掌握路由守卫'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- Pinia defineStore 语法参考 -->
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useUserStore = defineStore('user', () => {
  // state（用 ref）
  const name = ref('Guest')
  // getters（用 computed）
  const greeting = computed(() => 'Hello ' + name.value)
  // actions（用函数）
  function login(newName) { name.value = newName }
  return { name, greeting, login }
})
// 组件中使用
const store = useUserStore()
store.name          // 读取状态
store.login('Tom')  // 调用 action`,
        starterCode: `<!-- stores/user.js -->
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('user', () => {
  // 用 ref 定义 name 状态
  // 定义 login 方法修改 name
  // return 暴露状态和方法
})`,
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
        filePath: 'src/stores/user.js',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-1', 'vue3-2'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '定义 Pinia store', verification: 'defineStore', hint: '用 defineStore 定义全局状态管理' , docLinks: [{title: 'defineStore', url: 'https://pinia.vuejs.org/zh/api/#definestore'}]},
          { id: 'step-2', title: '声明状态和方法', verification: 'ref(', hint: '在 state 中定义用户数据字段' , docLinks: [{title: 'Pinia State', url: 'https://pinia.vuejs.org/zh/core-concepts/state.html'}]},
          { id: 'step-3', title: '组件中使用 store', verification: 'useUserStore', hint: '在组件中用 useUserStore 访问状态' , docLinks: [{title: '使用 Store', url: 'https://pinia.vuejs.org/zh/core-concepts/state.html#accessing-the-state'}]}
        ],
        variations: [{name: '选项式', description: 'Options API 风格与 Vuex 迁移平滑'}],
        transferTasks: [{task: '购物车 + 用户状态迁移到 Pinia', target: '掌握全局状态管理'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- localStorage 用法参考 -->
// 读取
const saved = localStorage.getItem('key')
const data = saved ? JSON.parse(saved) : null
// 写入
localStorage.setItem('key', JSON.stringify(value))
// 删除
localStorage.removeItem('key')
// 清空所有
localStorage.clear()
// Pinia 中持久化
const store = defineStore('app', () => {
  const data = ref([])
  function load() {
    const s = localStorage.getItem('data')
    if (s) data.value = JSON.parse(s)
  }
  function save() {
    localStorage.setItem('data', JSON.stringify(data.value))
  }
  load()
  return { data, save }
})`,
        starterCode: `<!-- stores/counter.js -->
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  // 定义 load 函数：从 localStorage 读取并恢复 count
  // 定义 save 函数：将 count 保存到 localStorage
  // 定义 increment 函数：count++ 后调用 save()
  // 调用 load() 初始化
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
        filePath: 'src/stores/counter.js',
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-14'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '订阅状态变化', verification: 'function load(', hint: '定义从 localStorage 读取状态的函数' , docLinks: [{title: '$subscribe', url: 'https://pinia.vuejs.org/zh/api/interfaces/Store_Generic.html#subscribe'}]},
          { id: 'step-2', title: '保存到本地存储', verification: 'localStorage.setItem', hint: '将状态序列化保存到 localStorage' , docLinks: [{title: 'localStorage.setItem', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem'}]},
          { id: 'step-3', title: '初始化时恢复', verification: 'localStorage.getItem', hint: 'APP 启动时从 localStorage 恢复状态' , docLinks: [{title: 'localStorage.getItem', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/getItem'}]}
        ],
        variations: [{name: '更多用法', description: '查阅 Vue3 官方文档'}],
        transferTasks: [{task: '结合实际场景应用所学概念', target: '巩固知识'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- 自定义指令语法参考 -->
// 局部指令（在 script setup 中定义）
const vFocus = {
  mounted(el) { el.focus() },
  updated(el, binding) { /* binding.value 是新值 */ }
}
// 模板使用：<input v-focus />
// 全局指令（main.js）
app.directive('lazy', {
  mounted(el, binding) {
    el.src = binding.value
  }
})
// 指令钩子：created, mounted, updated, unmounted
// binding: { value, oldValue, arg, modifiers }`,
        starterCode: `<template>
  <div>
    <input v-focus placeholder="自动聚焦" />
    <input placeholder="普通输入框" />
  </div>
</template>
<script setup>
// 定义 vFocus 指令对象，在 mounted 钩子中调用 el.focus()
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
        filePath: 'src/components/AutoFocus.vue',
        cognitiveLoad: 'high',
        dependsOn: ['vue3-1', 'vue3-2'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '注册自定义指令', verification: 'const vFocus', hint: '用 const 定义对象形式自定义指令' , docLinks: [{title: '自定义指令', url: 'https://cn.vuejs.org/guide/reusability/custom-directives.html'}]},
          { id: 'step-2', title: '实现自动聚焦', verification: 'el.focus()', hint: '在 mounted 钩子中执行焦点操作' , docLinks: [{title: 'el.focus()', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/focus'}]},
          { id: 'step-3', title: '在模板中使用', verification: 'v-focus', hint: '在 input 元素上使用 v-focus 指令' , docLinks: [{title: '指令使用', url: 'https://cn.vuejs.org/guide/reusability/custom-directives.html'}]}
        ],
        variations: [{name: '更多用法', description: '查阅 Vue3 官方文档'}],
        transferTasks: [{task: '结合实际场景应用所学概念', target: '巩固知识'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- 组合式函数模式参考 -->
// 命名约定：use 开头
import { ref, onMounted, onUnmounted } from 'vue'
export function useCounter(initial = 0) {
  const count = ref(initial)
  function increment() { count.value++ }
  function reset() { count.value = initial }
  return { count, increment, reset }
}
// 组件中使用
const { count, increment } = useCounter(10)
// 带生命周期
export function useEventListener(target, event, handler) {
  onMounted(() => target.addEventListener(event, handler))
  onUnmounted(() => target.removeEventListener(event, handler))
}`,
        starterCode: `<!-- composables/useMousePosition.js -->
import { ref, onMounted, onUnmounted } from 'vue'
export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  // 定义 update 函数，从事件中获取 pageX/pageY
  // onMounted 中添加 mousemove 事件监听
  // onUnmounted 中移除事件监听
  // return { x, y }
}`,
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
        filePath: 'src/composables/useMousePosition.js',
        cognitiveLoad: 'high',
        dependsOn: ['vue3-1', 'vue3-2', 'vue3-9'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '定义组合式函数', verification: 'function useMouse', hint: '创建以 use 开头的组合式函数' , docLinks: [{title: '组合式函数', url: 'https://cn.vuejs.org/guide/reusability/composables.html'}]},
          { id: 'step-2', title: '监听鼠标事件', verification: 'mousemove', hint: '监听 document 的鼠标移动事件' , docLinks: [{title: 'mousemove 事件', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousemove_event'}]},
          { id: 'step-3', title: '返回响应式坐标', verification: 'return {', hint: '将 x/y 坐标返回给组件使用' , docLinks: [{title: 'Composables', url: 'https://cn.vuejs.org/guide/reusability/composables.html'}]}
        ],
        variations: [{name: '更多用法', description: '查阅 Vue3 官方文档'}],
        transferTasks: [{task: '结合实际场景应用所学概念', target: '巩固知识'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- defineAsyncComponent 参考 -->
import { defineAsyncComponent } from 'vue'
// 基本用法
const AsyncComp = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)
// 带配置
const AsyncComp = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: LoadingSpinner,
  delay: 200,
  errorComponent: ErrorDisplay,
  onError(err, retry, fail, attempts) {
    if (attempts <= 3) retry()
    else fail()
  }
})
// 路由懒加载
{ path: '/admin', component: () => import('./Admin.vue') }`,
        starterCode: `import { defineAsyncComponent } from 'vue'
const HeavyPage = defineAsyncComponent({
  // loader: 定义动态导入函数
  // loadingComponent: 加载中显示的组件
  // delay: 延迟 200ms
  // errorComponent: 加载失败显示的组件
})`,
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
        filePath: 'src/router.js',
        cognitiveLoad: 'high',
        dependsOn: ['vue3-1', 'vue3-12'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '导入异步组件函数', verification: 'defineAsyncComponent', hint: '从 vue 导入异步组件功能' , docLinks: [{title: 'defineAsyncComponent', url: 'https://cn.vuejs.org/api/general.html#defineasynccomponent'}]},
          { id: 'step-2', title: '配置路由懒加载', verification: 'import(', hint: '用动态 import 实现组件懒加载' , docLinks: [{title: 'import() 动态导入', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import'}]},
          { id: 'step-3', title: '注册异步组件', verification: 'loader:', hint: '在 components 选项中注册异步组件' , docLinks: [{title: '异步组件', url: 'https://cn.vuejs.org/guide/components/async.html'}]}
        ],
        variations: [{name: '动态组件', description: '<component :is="x"> 动态切换'}],
        transferTasks: [{task: '抽离通用布局为组合式函数', target: '掌握逻辑复用'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
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
        contextCode: `<!-- 性能优化参考 -->
import { shallowRef, shallowReactive, triggerRef } from 'vue'
// shallowRef：只追踪 .value 整体变化
const data = shallowRef({ list: [] })
data.value = { list: [1, 2, 3] }  // 触发更新
data.value.list.push(4)           // 不触发！需整体替换
// triggerRef：手动触发更新
triggerRef(data)
// shallowReactive：浅层响应式
const state = shallowReactive({ nested: { val: 1 } })
// 模板优化
// <p v-once>只渲染一次：{{ expensive }}</p>
// <div v-memo="[val1]">{{ val1 }} - {{ val2 }}</div>`,
        starterCode: `<template>
  <div>
    <p v-once>计算结果：{{ expensiveValue }}</p>
    <div>{{ largeData.name }}</div>
    <button @click="???">更新</button>
  </div>
</template>
<script setup>
import { shallowRef } from 'vue'
// 用 shallowRef 定义 largeData 大对象
// 定义 updateData 函数替换 largeData.value
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
        filePath: 'src/components/Optimized.vue',
        cognitiveLoad: 'high',
        dependsOn: ['vue3-1', 'vue3-2', 'vue3-7'],
        commonMistakes: [],
                 microSteps: [
          { id: 'step-1', title: '使用 shallowRef', verification: 'shallowRef', hint: '用 shallowRef 代替 ref 减少深层代理' , docLinks: [{title: 'shallowRef', url: 'https://cn.vuejs.org/api/reactivity-advanced.html#shallowref'}]},
          { id: 'step-2', title: '静态内容缓存', verification: 'v-once', hint: '静态内容添加 v-once 指令避免重复渲染' , docLinks: [{title: 'v-once', url: 'https://cn.vuejs.org/api/built-in-directives.html#v-once'}]},
          { id: 'step-3', title: '计算属性缓存', verification: 'import { shallowRef', hint: '导入 shallowRef 减少深层代理' , docLinks: [{title: 'computed()', url: 'https://cn.vuejs.org/api/reactivity-core.html#computed'}]}
        ],
        variations: [{name: 'reactive', description: 'reactive() 用于对象类型'}],
        transferTasks: [{task: '创建计数器 + 待办列管理多 ref', target: '掌握多状态管理'}],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      }
    ]
  },
  {
    id: 'ecommerce-project',
    name: '阶段五：电商项目实战',
    description: '综合运用 Vue3 全栈技能，从零搭建完整电商系统前端',
    levels: [
      {
        id: 'vue3-proj-1',
        number: 20,
        title: '项目脚手架搭建',
        concept: 'Vite 项目初始化',
        difficulty: 'easy',
        type: 'project',
        project: 'ecommerce',
        projectModule: '项目初始化',
        task: '用 Vite 创建 Vue3 电商项目脚手架，配置路由和构建工具',
        prerequisites: '<h4>📚 Vite 项目结构</h4><p>Vite 项目包含 vite.config.js（构建配置）、index.html（入口 HTML）、src/main.js（应用入口）等核心文件。</p><h4>🔑 package.json 关键字段</h4><p>dependencies（运行时依赖）、devDependencies（开发依赖）、scripts（npm 命令）。</p>',
        conceptDetail: 'Vite 是一个[轻量构建工具](轻量构建工具)，基于 ES Module 实现[快速热更新](快速热更新|HMR，修改代码后自动刷新页面)。[package.json](package.json|项目的核心配置文件，管理依赖和脚本)定义了项目元数据和依赖。',
        contextCode: '',
        hints: [
          'npm create vite@latest ecommerce-front -- --template vue',
          '安装依赖：vue-router@4, pinia, axios',
          '配置 vite.config.js 设置代理解决跨域'
        ],
        code: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})`,
        verification: 'package.json 包含 vue-router 和 pinia 依赖，vite.config.js 配置了 API 代理',
        filePath: 'vite.config.js',
        projectFiles: {
          'package.json': JSON.stringify({
            name: 'ecommerce-front',
            scripts: { dev: 'vite', build: 'vite build' },
            dependencies: { vue: '^3.4', 'vue-router': '^4.3', pinia: '^2.1', axios: '^1.6' }
          }, null, 2)
        },
        cognitiveLoad: 'low',
        dependsOn: ['vue3-19'],
        commonMistakes: [
          { pattern: 'target:', explanation: '代理 target 需要写完整 URL（含协议和端口）' },
          { pattern: 'changeOrigin: true', explanation: '跨域代理必须设置 changeOrigin 为 true' }
        ],
        microSteps: [
         { id: 'step-1', title: '创建 Vite 项目', verification: 'defineConfig', hint: '用 defineConfig 创建 Vite 配置' , docLinks: [{title: 'create-vite', url: 'https://cn.vite.dev/guide/#scaffolding-your-first-vite-project'}]},
         { id: 'step-2', title: '安装必要依赖', verification: '@vitejs/plugin-vue', hint: '安装并配置 Vue 插件' , docLinks: [{title: 'npm install', url: 'https://docs.npmjs.com/cli/install'}]},
         { id: 'step-3', title: '配置基础路由', verification: 'proxy', hint: '配置开发服务器代理到后端' , docLinks: [{title: 'Vue Router', url: 'https://router.vuejs.org/zh/guide/'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-2',
        number: 21,
        title: '路由配置与布局',
        concept: 'Vue Router + 布局组件',
        difficulty: 'medium',
        type: 'project',
        project: 'ecommerce',
        projectModule: '项目初始化',
        task: '配置路由系统，搭建主布局组件（顶部导航 + 侧边栏 + 内容区）',
        prerequisites: '<h4>📚 Vue Router 基础</h4><p>createRouter 创建路由实例，routes 数组定义路由规则，router-view 渲染匹配的组件。lazy loading 通过动态 import() 实现。</p>',
        conceptDetail: '使用[createRouter](createRouter|创建 Vue Router 实例的函数)创建路由，通过[routes](routes|路由配置数组)定义页面路径映射。[动态 import](动态 import|() => import() 实现懒加载)实现懒加载提升性能。',
        contextCode: '',
        hints: [
          'createRouter 接收 history: createWebHistory() 和 routes 数组',
          'routes 每个对象包含 path, name, component',
          '用 () => import() 实现路由懒加载'
        ],
        code: `import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/ProductList.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/orders',
    name: 'OrderList',
    component: () => import('../views/OrderList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router`,
        verification: '路由使用 createWebHistory，pages 使用动态 import 懒加载',
        filePath: 'src/router/index.js',
        projectFiles: {
          'src/router/index.js': `import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/ProductList.vue') },
  { path: '/product/:id', name: 'ProductDetail', component: () => import('../views/ProductDetail.vue') },
  { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/checkout', name: 'Checkout', component: () => import('../views/Checkout.vue') },
  { path: '/orders', name: 'OrderList', component: () => import('../views/OrderList.vue') }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router`
        },
        cognitiveLoad: 'low',
        dependsOn: ['vue3-proj-1'],
        commonMistakes: [
          { pattern: 'createWebHashHistory', explanation: '电商项目用 createWebHistory 更标准，hash 模式不利于 SEO' }
        ],
        microSteps: [
         { id: 'step-1', title: '定义页面路由表', verification: 'routes', hint: '定义所有业务页面的路由映射' , docLinks: [{title: 'Vue Router', url: 'https://router.vuejs.org/zh/guide/'}]},
         { id: 'step-2', title: '创建主布局组件', verification: 'createWebHistory', hint: '布局组件包含导航区和路由出口' , docLinks: [{title: 'router-view', url: 'https://router.vuejs.org/zh/api/#router-view'}]},
         { id: 'step-3', title: '配置嵌套路由', verification: '() => import(', hint: '用 children 实现嵌套页面结构' , docLinks: [{title: '嵌套路由', url: 'https://router.vuejs.org/zh/guide/essentials/nested-routes.html'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-3',
        number: 22,
        title: 'Pinia Store 状态管理',
        concept: 'Pinia 模块化状态管理',
        difficulty: 'medium',
        type: 'project',
        project: 'ecommerce',
        projectModule: '状态管理',
        task: '创建商品、购物车、用户三个 Pinia store，管理全局状态',
        prerequisites: '<h4>📚 Pinia 核心概念</h4><p>defineStore 定义 store，state 定义状态，getters 派生状态，actions 修改状态。组合式 store 用 setup() 函数写法。</p>',
        conceptDetail: '使用[defineStore](defineStore|Pinia 定义 store 的函数)创建模块化 store。[state](state|store 中的响应式数据)定义初始数据，[actions](actions|修改 state 的方法)封装业务逻辑。',
        contextCode: '',
        hints: [
          'defineStore 第一个参数是唯一 ID，第二个参数是选项对象或 setup 函数',
          'state 用函数返回初始值，actions 里用 this 访问 state',
          '组合式 store 用 ref/reactive 定义状态，函数定义操作'
        ],
        code: `import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '../api/product'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const currentProduct = ref(null)
  const loading = ref(false)

  const productCount = computed(() => products.value.length)

  async function fetchProducts() {
    loading.value = true
    try {
      const res = await api.getProducts()
      products.value = res.data
    } finally {
      loading.value = false
    }
  }

  async function fetchProduct(id) {
    const res = await api.getProduct(id)
    currentProduct.value = res.data
  }

  return { products, currentProduct, loading, productCount, fetchProducts, fetchProduct }
})`,
        verification: 'store 使用 defineStore 定义，包含 state、getters 和 actions',
        filePath: 'src/stores/product.js',
        projectFiles: {
          'src/stores/product.js': `import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const currentProduct = ref(null)
  const loading = ref(false)
  const productCount = computed(() => products.value.length)

  async function fetchProducts() { /* API call */ }
  async function fetchProduct(id) { /* API call */ }

  return { products, currentProduct, loading, productCount, fetchProducts, fetchProduct }
})`,
          'src/stores/cart.js': `import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const total = computed(() => items.value.reduce((s, i) => s + i.price * i.quantity, 0))
  const count = computed(() => items.value.reduce((s, i) => s + i.quantity, 0))

  function addItem(product) { /* add logic */ }
  function removeItem(id) { /* remove logic */ }
  function clearCart() { items.value = [] }

  return { items, total, count, addItem, removeItem, clearCart }
})`,
          'src/stores/user.js': `import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const userInfo = ref(null)

  const isLoggedIn = computed(() => !!token.value)

  function setToken(t) { token.value = t; localStorage.setItem('token', t) }
  function logout() { token.value = ''; localStorage.removeItem('token'); userInfo.value = null }

  return { token, userInfo, isLoggedIn, setToken, logout }
})`
        },
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-proj-1'],
        commonMistakes: [
          { pattern: 'defineStore("product", {', explanation: '选项式 API 的 state 必须是函数返回对象，不是直接对象' }
        ],
        microSteps: [
         { id: 'step-1', title: '管理商品状态', verification: '\'product\'', hint: '创建商品列表和状态管理的 store' , docLinks: [{title: 'defineStore', url: 'https://pinia.vuejs.org/zh/api/#definestore'}]},
         { id: 'step-2', title: '管理购物车状态', verification: 'useProductStore', hint: '创建购物车增删改查的 store' , docLinks: [{title: 'defineStore', url: 'https://pinia.vuejs.org/zh/api/#definestore'}]},
         { id: 'step-3', title: '管理用户状态', verification: 'export const', hint: '创建用户登录信息管理的 store' , docLinks: [{title: 'defineStore', url: 'https://pinia.vuejs.org/zh/api/#definestore'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-4',
        number: 23,
        title: '商品列表页',
        concept: '商品列表 + API 集成',
        difficulty: 'medium',
        type: 'project',
        project: 'ecommerce',
        projectModule: '商品模块',
        task: '实现商品列表页，从后端 API 获取数据并渲染商品卡片网格',
        prerequisites: '<h4>📚 生命周期与 API 调用</h4><p>onMounted 钩子在组件挂载后执行 API 请求。axios 封装 HTTP 请求，async/await 处理异步操作。</p>',
        conceptDetail: '[axios](axios|基于 Promise 的 HTTP 客户端)发起 API 请求，[onMounted](onMounted|组件挂载后执行的生命周期钩子)生命周期触发数据加载。[v-for](v-for|Vue 模板中循环渲染列表的指令)遍历商品列表渲染卡片。',
        contextCode: '',
        hints: [
          'onMounted 中调用 store.fetchProducts()',
          'v-for="product in products" 遍历展示',
          '计算属性过滤和排序'
        ],
        code: `<template>
  <div class="product-list">
    <div class="filters">
      <input v-model="search" placeholder="搜索商品..." />
      <select v-model="sortBy">
        <option value="">默认排序</option>
        <option value="price">按价格</option>
      </select>
    </div>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else class="product-grid">
      <div v-for="p in filteredProducts" :key="p.id" class="product-card" @click="$router.push('/product/' + p.id)">
        <img :src="p.image" :alt="p.name" />
        <h3>{{ p.name }}</h3>
        <p class="price">¥{{ p.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '../stores/product'

const store = useProductStore()
const search = ref('')
const sortBy = ref('')

const filteredProducts = computed(() => {
  let list = store.products.filter(p => p.name.includes(search.value))
  if (sortBy.value === 'price') list.sort((a, b) => a.price - b.price)
  return list
})

onMounted(() => store.fetchProducts())
</script>`,
        verification: 'onMounted 触发 API 请求，v-for 渲染商品卡片，包含搜索和排序功能',
        filePath: 'src/views/ProductList.vue',
        projectFiles: {
          'src/views/ProductList.vue': `<template>
  <div class="product-list">
    <div class="filters">
      <input v-model="search" placeholder="搜索..." />
      <select v-model="sortBy"><option value="">默认</option><option value="price">按价格</option></select>
    </div>
    <div class="product-grid">
      <div v-for="p in filteredProducts" :key="p.id" class="product-card" @click="$router.push('/product/' + p.id)">
        <img :src="p.image" /><h3>{{ p.name }}</h3><p>¥{{ p.price }}</p>
      </div>
    </div>
  </div>
</template>`
        },
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-proj-3'],
        commonMistakes: [
          { pattern: 'product-list', explanation: 'CSS class 用 kebab-case 命名' }
        ],
        microSteps: [
         { id: 'step-1', title: '获取商品列表', verification: 'fetchProducts', hint: '调用 store 方法从后端获取商品数据' , docLinks: [{title: 'Fetch API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch'}]},
         { id: 'step-2', title: '渲染商品卡片', verification: 'v-for', hint: '用 v-for 循环渲染商品卡片网格' , docLinks: [{title: 'v-for', url: 'https://cn.vuejs.org/guide/essentials/list.html'}]},
         { id: 'step-3', title: '添加加载状态', verification: 'loading', hint: '请求数据时显示加载中转圈效果' , docLinks: [{title: 'v-if', url: 'https://cn.vuejs.org/guide/essentials/conditional.html'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-5',
        number: 24,
        title: '商品详情页',
        concept: '商品详情 + 加入购物车',
        difficulty: 'medium',
        type: 'project',
        project: 'ecommerce',
        projectModule: '商品模块',
        task: '实现商品详情页，展示商品信息并通过路由参数加载',
        prerequisites: '<h4>📚 路由参数</h4><p>this.$route.params 或 useRoute() 获取 URL 参数。watch 监听参数变化重新加载数据。</p>',
        conceptDetail: '通过[useRoute](useRoute|Vue Router 的组合式 API，获取当前路由信息)获取路由参数，[watch](watch|监听响应式数据变化并执行回调)监听参数变化重新加载数据。',
        contextCode: '',
        hints: [
          'const route = useRoute() 获取路由参数',
          'route.params.id 获取商品 ID',
          'watch(() => route.params.id, loadProduct)'
        ],
        code: `<template>
  <div class="product-detail" v-if="product">
    <img :src="product.image" :alt="product.name" />
    <div class="info">
      <h1>{{ product.name }}</h1>
      <p class="price">¥{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <button @click="addToCart" :disabled="!user.isLoggedIn">加入购物车</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'
import { useUserStore } from '../stores/user'

const route = useRoute()
const productStore = useProductStore()
const cart = useCartStore()
const user = useUserStore()
const product = ref(null)

async function loadProduct() {
  await productStore.fetchProduct(route.params.id)
  product.value = productStore.currentProduct
}

function addToCart() {
  if (product.value) cart.addItem(product.value)
}

watch(() => route.params.id, loadProduct)
onMounted(loadProduct)
</script>`,
        verification: '使用 useRoute 获取商品 ID，watch 监听路由参数变化',
        filePath: 'src/views/ProductDetail.vue',
        projectFiles: {},
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-proj-3', 'vue3-proj-4'],
        commonMistakes: [],
        microSteps: [
         { id: 'step-1', title: '获取商品 ID', verification: 'useRoute', hint: '从路由参数获取商品唯一 ID' , docLinks: [{title: 'useRoute()', url: 'https://router.vuejs.org/zh/api/#useroute'}]},
         { id: 'step-2', title: '请求商品详情', verification: 'fetchProduct', hint: '调用 store 方法获取单个商品详情' , docLinks: [{title: 'Fetch API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch'}]},
         { id: 'step-3', title: '渲染商品信息', verification: 'v-if', hint: '数据到达后渲染商品图片和描述' , docLinks: [{title: 'v-if', url: 'https://cn.vuejs.org/guide/essentials/conditional.html'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-6',
        number: 25,
        title: '购物车功能',
        concept: '购物车 CRUD + 计算属性',
        difficulty: 'medium',
        type: 'project',
        project: 'ecommerce',
        projectModule: '购物车模块',
        task: '实现购物车页面，显示商品列表、数量增减、总价计算',
        prerequisites: '<h4>📚 计算属性进阶</h4><p>computed 可依赖多个响应式源，setter 可写计算属性支持双向绑定。</p>',
        conceptDetail: '使用[computed](computed|基于响应式依赖缓存的计算值)计算购物车总价和数量。[v-model](v-model|双向绑定指令)与输入框绑定修改数量。[watchEffect](watchEffect|自动追踪依赖的副作用函数)同步 localStorage。',
        contextCode: '',
        hints: [
          'store 的 total 和 count 计算属性直接使用',
          'v-model.number 绑定数量输入框',
          '空购物车显示占位提示'
        ],
        code: `<template>
  <div class="cart">
    <h1>购物车</h1>
    <div v-if="cart.items.length === 0" class="empty">购物车是空的</div>
    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <img :src="item.image" />
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>¥{{ item.price }}</p>
        </div>
        <input type="number" v-model.number="item.quantity" min="1" />
        <span>¥{{ item.price * item.quantity }}</span>
        <button @click="cart.removeItem(item.id)">删除</button>
      </div>
      <div class="cart-summary">
        <p>合计：<strong>¥{{ cart.total }}</strong></p>
        <button @click="$router.push('/checkout')" :disabled="!user.isLoggedIn">去结算</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useUserStore } from '../stores/user'

const cart = useCartStore()
const user = useUserStore()
</script>`,
        verification: '购物车列表使用 v-for 渲染，总价使用 computed 计算，支持数量修改',
        filePath: 'src/views/Cart.vue',
        projectFiles: {},
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-proj-3'],
        commonMistakes: [
          { pattern: 'v-model="item.quantity"', explanation: '数字输入框用 v-model.number 修饰符确保类型正确' }
        ],
        microSteps: [
         { id: 'step-1', title: '显示购物车列表', verification: 'cart.items', hint: '从 cart store 获取商品列表' , docLinks: [{title: 'Pinia State', url: 'https://pinia.vuejs.org/zh/core-concepts/state.html'}]},
         { id: 'step-2', title: '调节商品数量', verification: 'v-model.number', hint: '用输入框绑定修改商品数量' , docLinks: [{title: 'Pinia Actions', url: 'https://pinia.vuejs.org/zh/core-concepts/actions.html'}]},
         { id: 'step-3', title: '计算购物车总价', verification: 'cart.total', hint: '用计算属性汇总所有商品价格' , docLinks: [{title: 'computed()', url: 'https://cn.vuejs.org/api/reactivity-core.html#computed'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-7',
        number: 26,
        title: '用户登录',
        concept: 'JWT 认证 + 表单处理',
        difficulty: 'medium',
        type: 'project',
        project: 'ecommerce',
        projectModule: '用户模块',
        task: '实现登录页面，集成 JWT 认证流程，登录后跳转回来源页',
        prerequisites: '<h4>📚 JWT 认证流程</h4><p>用户提交用户名密码 → 后端验证返回 token → 前端存储 token → 后续请求携带 Authorization 头。</p>',
        conceptDetail: '[v-model](v-model|Vue 双向绑定指令)绑定表单数据。[axios 拦截器](axios 拦截器|在请求/响应被处理前拦截并修改)自动携带 token。[localStorage](localStorage|浏览器持久化存储)持久化 token。',
        contextCode: '',
        hints: [
          '表单用 v-model 双向绑定用户名和密码',
          '登录成功后调用 store.setToken(res.data.token)',
          '登录后跳转回来源页：router.push(route.query.redirect || "/")'
        ],
        code: `<template>
  <div class="login">
    <h1>用户登录</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="用户名" required />
      <input v-model="password" type="password" placeholder="密码" required />
      <p v-if="error" class="error">{{ error }}</p>
      <button type="submit" :disabled="loading">{{ loading ? '登录中...' : '登录' }}</button>
    </form>
    <p class="hint">测试账号：admin / admin123</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import axios from 'axios'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

async function handleLogin() {
  loading.value = true
  error.value = ''
  try {
    const res = await axios.post('/api/auth/login', {
      username: username.value,
      password: password.value
    })
    userStore.setToken(res.data.token)
    router.push(route.query.redirect || '/')
  } catch (e) {
    error.value = e.response?.data?.detail || '登录失败'
  } finally {
    loading.value = false
  }
}
</script>`,
        verification: '表单使用 v-model 双向绑定，@submit.prevent 阻止默认提交，登录失败显示错误',
        filePath: 'src/views/Login.vue',
        projectFiles: {},
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-proj-3'],
        commonMistakes: [
          { pattern: '@submit="handleLogin"', explanation: '表单提交要用 @submit.prevent 阻止页面刷新' }
        ],
        microSteps: [
         { id: 'step-1', title: '创建登录表单', verification: 'v-model', hint: '用 v-model 绑定用户名和密码输入' , docLinks: [{title: 'v-model', url: 'https://cn.vuejs.org/guide/essentials/forms.html'}]},
         { id: 'step-2', title: '调用登录接口', verification: 'axios.post', hint: '发送登录请求获取 JWT Token' , docLinks: [{title: 'Axios POST', url: 'https://axios-http.com/zh/docs/api_intro'}]},
         { id: 'step-3', title: '持久化登录状态', verification: 'userStore.setToken', hint: '登录成功后保存 token' , docLinks: [{title: 'localStorage', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-8',
        number: 27,
        title: '订单创建',
        concept: '表单验证 + 订单提交',
        difficulty: 'hard',
        type: 'project',
        project: 'ecommerce',
        projectModule: '订单模块',
        task: '实现结算页面，收集收货地址信息，提交订单并清空购物车',
        prerequisites: '<h4>📚 表单验证模式</h4><p>前端验证提升用户体验，后端验证保证数据安全。address、phone 等字段需校验格式。</p>',
        conceptDetail: '使用[axios POST](axios POST|发送 POST 请求创建资源)提交订单。[Promise.all](Promise.all|等待多个 Promise 全部完成)同时处理多项异步操作。[template ref](template ref|通过 ref 属性获取 DOM 或组件引用)获取表单引用。',
        contextCode: '',
        hints: [
          '收货地址表单包含 name, phone, address, city 字段',
          '提交前验证必填字段',
          '提交成功后跳转到订单列表页'
        ],
        code: `<template>
  <div class="checkout">
    <h1>确认订单</h1>
    <div class="order-items">
      <div v-for="item in cart.items" :key="item.id" class="order-item">
        <span>{{ item.name }} x {{ item.quantity }}</span>
        <span>¥{{ item.price * item.quantity }}</span>
      </div>
    </div>
    <div class="total">总计：¥{{ cart.total }}</div>
    <form @submit.prevent="submitOrder">
      <input v-model="address.name" placeholder="收货人" required />
      <input v-model="address.phone" placeholder="手机号" required />
      <input v-model="address.city" placeholder="城市" required />
      <input v-model="address.detail" placeholder="详细地址" required />
      <p v-if="error" class="error">{{ error }}</p>
      <button type="submit" :disabled="submitting">{{ submitting ? '提交中...' : '提交订单' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useUserStore } from '../stores/user'
import axios from 'axios'

const router = useRouter()
const cart = useCartStore()
const user = useUserStore()
const submitting = ref(false)
const error = ref('')
const address = reactive({ name: '', phone: '', city: '', detail: '' })

async function submitOrder() {
  if (!user.isLoggedIn) { router.push('/login?redirect=/checkout'); return }
  submitting.value = true
  error.value = ''
  try {
    await axios.post('/api/orders', {
      items: cart.items,
      address: { ...address }
    }, { headers: { Authorization: 'Bearer ' + user.token } })
    cart.clearCart()
    router.push('/orders')
  } catch (e) {
    error.value = e.response?.data?.detail || '提交失败'
  } finally {
    submitting.value = false
  }
}
</script>`,
        verification: 'axios POST 提交订单，提交成功后清空购物车并跳转',
        filePath: 'src/views/Checkout.vue',
        projectFiles: {},
        cognitiveLoad: 'high',
        dependsOn: ['vue3-proj-6', 'vue3-proj-7'],
        commonMistakes: [
          { pattern: 'cart.items', explanation: '提交前确认购物车不为空' }
        ],
        microSteps: [
         { id: 'step-1', title: '收集收货地址', verification: 'address', hint: '表单绑定收货人地址电话信息' , docLinks: [{title: 'v-model', url: 'https://cn.vuejs.org/guide/essentials/forms.html'}]},
         { id: 'step-2', title: '确认商品清单', verification: 'useCartStore', hint: '获取购物车待结算的商品列表' , docLinks: [{title: 'Pinia Actions', url: 'https://pinia.vuejs.org/zh/core-concepts/actions.html'}]},
         { id: 'step-3', title: '提交创建订单', verification: 'submitOrder', hint: '调用订单 API 提交并清空购物车' , docLinks: [{title: 'Fetch POST', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-9',
        number: 28,
        title: '订单列表',
        concept: '订单管理 + 状态展示',
        difficulty: 'medium',
        type: 'project',
        project: 'ecommerce',
        projectModule: '订单模块',
        task: '实现订单列表页和订单详情页，按状态筛选订单',
        prerequisites: '<h4>📚 条件渲染与筛选</h4><p>v-if/v-else 条件渲染，计算属性实现筛选逻辑。v-for 与 v-if 不建议同时使用。</p>',
        conceptDetail: '[条件渲染](条件渲染|v-if/v-else/v-show)根据数据状态展示不同 UI。[计算属性筛选](计算属性筛选|用 computed 实现订单状态过滤)避免在模板中写复杂表达式。',
        contextCode: '',
        hints: [
          '订单包含 pending/paid/shipped/delivered/cancelled 等状态',
          '用 tab 切换不同状态筛选',
          '每个订单项显示商品快照、总价、状态标签'
        ],
        code: `<template>
  <div class="orders">
    <h1>我的订单</h1>
    <div class="tabs">
      <button v-for="t in tabs" :key="t.key" @click="activeTab = t.key" :class="{ active: activeTab === t.key }">{{ t.label }}</button>
    </div>
    <div v-if="filteredOrders.length === 0" class="empty">暂无订单</div>
    <div v-for="order in filteredOrders" :key="order.id" class="order-card" @click="goDetail(order.id)">
      <div class="order-header">
        <span>订单号：{{ order.id }}</span>
        <span class="status" :class="order.status">{{ statusLabel(order.status) }}</span>
      </div>
      <div v-for="item in order.items" :key="item.id" class="order-item">
        {{ item.name }} x {{ item.quantity }}
      </div>
      <div class="order-footer">
        <span>{{ order.created_at }}</span>
        <strong>共计：¥{{ order.total }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '../stores/user'

const router = useRouter()
const user = useUserStore()
const orders = ref([])
const activeTab = ref('all')

const tabs = [
  { key: 'all', label: '全部' },
  { key: 'pending', label: '待付款' },
  { key: 'paid', label: '已付款' },
  { key: 'shipped', label: '已发货' }
]

const filteredOrders = computed(() => {
  if (activeTab.value === 'all') return orders.value
  return orders.value.filter(o => o.status === activeTab.value)
})

function statusLabel(s) {
  const map = { pending: '待付款', paid: '已付款', shipped: '已发货', delivered: '已完成', cancelled: '已取消' }
  return map[s] || s
}

function goDetail(id) { router.push('/orders/' + id) }

onMounted(async () => {
  const res = await axios.get('/api/orders', { headers: { Authorization: 'Bearer ' + user.token } })
  orders.value = res.data
})
</script>`,
        verification: '订单列表从 API 获取，使用计算属性按状态筛选，支持 tab 切换',
        filePath: 'src/views/OrderList.vue',
        projectFiles: {},
        cognitiveLoad: 'medium',
        dependsOn: ['vue3-proj-8'],
        commonMistakes: [],
        microSteps: [
         { id: 'step-1', title: '获取订单列表', verification: 'axios.get', hint: '从 API 获取当前用户订单数据' , docLinks: [{title: 'Fetch API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch'}]},
         { id: 'step-2', title: '按状态筛选', verification: 'filter', hint: '根据订单状态筛选显示列表' , docLinks: [{title: 'Array.filter()', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'}]},
         { id: 'step-3', title: '跳转订单详情', verification: 'router.push', hint: '点击订单跳转到详情页面' , docLinks: [{title: 'router.push()', url: 'https://router.vuejs.org/zh/api/#push'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      },
      {
        id: 'vue3-proj-10',
        number: 29,
        title: '完整项目整合',
        concept: '项目整合与部署',
        difficulty: 'hard',
        type: 'project',
        project: 'ecommerce',
        projectModule: '项目整合',
        task: '整合 App.vue 入口组件，配置 axios 拦截器，完成端到端联调',
        prerequisites: '<h4>📚 axios 拦截器</h4><p>请求拦截器在发送前添加 Authorization 头，响应拦截器统一处理 401 错误跳转登录页。</p>',
        conceptDetail: '[axios 拦截器](axios 拦截器|在请求/响应被处理前拦截并修改)统一管理 token 和错误处理。[provide/inject](provide/inject|祖先组件向后代组件注入依赖)跨层级传递全局配置。[环境变量](环境变量|Vite 通过 import.meta.env 暴露环境配置)区分开发/生产环境。',
        contextCode: '',
        hints: [
          '请求拦截器添加 Authorization header',
          '响应拦截器处理 401 跳转登录',
          'App.vue 中注册路由和 Pinia'
        ],
        code: `<template>
  <div id="app">
    <nav v-if="user.isLoggedIn">
      <router-link to="/">首页</router-link>
      <router-link to="/cart">购物车({{ cart.count }})</router-link>
      <router-link to="/orders">订单</router-link>
      <span class="user-info">{{ user.userInfo?.username }}</span>
      <button @click="user.logout()">退出</button>
    </nav>
    <nav v-else>
      <router-link to="/">首页</router-link>
      <router-link to="/login">登录</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { useUserStore } from './stores/user'
import { useCartStore } from './stores/cart'

const user = useUserStore()
const cart = useCartStore()

onMounted(() => {
  axios.interceptors.request.use(config => {
    if (user.token) config.headers.Authorization = 'Bearer ' + user.token
    return config
  })
  axios.interceptors.response.use(
    res => res,
    err => {
      if (err.response?.status === 401) user.logout()
      return Promise.reject(err)
    }
  )
})
</script>`,
        verification: 'axios 拦截器配置完成，导航栏条件渲染登录/登出状态，购物车数量徽标',
        filePath: 'src/App.vue',
        projectFiles: {},
        cognitiveLoad: 'high',
        dependsOn: ['vue3-proj-1', 'vue3-proj-2', 'vue3-proj-3'],
        commonMistakes: [
          { pattern: 'Bearer', explanation: 'Authorization header 格式为 "Bearer <token>"，注意 Bearer 后有一个空格' }
        ],
        microSteps: [
         { id: 'step-1', title: '配置请求拦截器', verification: 'axios.interceptors', hint: '配置全局请求和响应拦截器' , docLinks: [{title: 'Axios 拦截器', url: 'https://axios-http.com/zh/docs/interceptors'}]},
         { id: 'step-2', title: '注册全局插件', verification: 'onMounted', hint: '在 APP 入口注册全局插件' , docLinks: [{title: 'createPinia', url: 'https://pinia.vuejs.org/zh/api/#createpinia'}]},
         { id: 'step-3', title: '联调验证流程', verification: 'router', hint: '确保页面跳转和数据流完整正确' , docLinks: [{title: 'Vue Router', url: 'https://router.vuejs.org/zh/guide/'}]}
        ],        variations: [],
        transferTasks: [],
        docLinks: [
        { title: 'Vue3 官方文档', url: 'https://cn.vuejs.org/' },
        { title: 'Vue3 组合式 API', url: 'https://cn.vuejs.org/api/composition-api-setup.html' },
        { title: 'Vue3 模板语法', url: 'https://cn.vuejs.org/guide/essentials/template-syntax.html' }
        ],
      }
    ]
  }
]
