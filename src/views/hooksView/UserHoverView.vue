<template>
  <div class="UserHoverView" ref="UserHoverView">
    {{ isHovering ? '聚焦拉' : '失去焦点拉' }}
  </div>
</template>

<script>
import useSize from '../../hooks/useHover'
export default {
  name: 'UserHoverView',
  components: {},
  setup () {
    const [isHovering] = useSize('UserHoverView')
    return {
      isHovering
    }
  }
}
</script>
