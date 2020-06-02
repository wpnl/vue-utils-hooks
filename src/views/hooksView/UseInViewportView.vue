<template>
  <div class="UseInViewportView" ref="UseInViewportView">
    当前状态：{{inViewPort ? '显示' : '隐藏'}}
  </div>
</template>

<script>
import useInViewport from '../../hooks/useInViewport'
export default {
  name: 'UseInViewportView',
  components: {},
  setup () {
    const [inViewPort] = useInViewport('UseInViewportView')
    return {
      inViewPort
    }
  }
}
</script>

<style lang="less">
body {
  height: 3000px;
}
.UseInViewportView {
  background-color: red;
  width: 50%;
  height: 50%;
}
</style>
