<template>
  <div class="home" ref="home">
    <ul>
      <li><router-link to="userSize">userSize 监听元素变化</router-link></li>
      <li><router-link to="userHover">userHover 跟踪 dom 元素是否有鼠标悬停</router-link></li>
      <li><router-link to="useDocumentVisibility">useDocumentVisibility 可以获取页面可见状态的 Hook</router-link></li>
      <li><router-link to="useFullscreen">useFullscreen 一个用于处理 dom 全屏的 Hook</router-link></li>
      <li><router-link to="useInViewport">useInViewport 一个用于判断dom元素是否在可视范围之内的 Hook</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  setup () {
  }
}
</script>
