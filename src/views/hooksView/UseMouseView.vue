<template>
  <div class="UseMouseView" ref="UseMouseView">
    鼠标位置：{{ JSON.stringify(state) }}
  </div>
</template>

<script>
import useMouse from '../../hooks/useMouse'
export default {
  name: 'UseMouseView',
  components: {},
  setup () {
    const state = useMouse()
    return {
      state
    }
  }
}
</script>
