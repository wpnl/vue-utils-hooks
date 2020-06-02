<template>
  <div class="UseFullscreenView" ref="UseFullscreenView">
    当前状态：{{fullscreenState}}
    <button @click="setFull">setFull</button>
    <button @click="exitFull">exitFull</button>
    <button @click="toggleFull">toggleFull</button>
  </div>
</template>

<script>
import useFullscreen from '../../hooks/useFullscreen'
export default {
  name: 'UseFullscreenView',
  components: {},
  setup () {
    const { fullscreenState, setFull, exitFull, toggleFull } = useFullscreen('UseFullscreenView')
    return {
      fullscreenState,
      setFull,
      exitFull,
      toggleFull
    }
  }
}
</script>
