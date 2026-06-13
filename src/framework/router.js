import { createRouter, createWebHashHistory } from 'vue-router'
import CourseSelector from './components/CourseSelector.vue'
import CourseView from './components/CourseView.vue'

const routes = [
  { path: '/', name: 'home', component: CourseSelector },
  { path: '/course/:courseId', name: 'course', component: CourseView, props: true }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
