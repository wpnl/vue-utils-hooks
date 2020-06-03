<template>
  <div class="UseScrollView" ref="UseScrollView">
    <p>滚动位置：{{ JSON.stringify(position) }}</p>
    <p>滚动位置：{{ JSON.stringify(position) }}</p>
    <p>滚动位置：{{ JSON.stringify(position) }}</p>
    <p>滚动位置：{{ JSON.stringify(position) }}</p>
    <p>滚动位置：{{ JSON.stringify(position) }}</p>
    <p>滚动位置：{{ JSON.stringify(position) }}</p>
    <p>滚动位置：{{ JSON.stringify(position) }}</p>
    <p>滚动位置：{{ JSON.stringify(position) }}</p>
  </div>
</template>

<script>
import useScroll from '../../hooks/useScroll'
export default {
  name: 'UseScrollView',
  components: {},
  setup () {
    const [position] = useScroll('UseScrollView')
    return {
      position
    }
  }
}
</script>

<style lang="less">
.UseScrollView {
  width: 200px;
  height: 200px;
  overflow: scroll;
  background-color: aqua;
}
</style>
