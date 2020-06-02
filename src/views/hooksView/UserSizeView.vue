<template>
  <div class="UserSizeView" ref="UserSizeView">
    width: {{width}},
    height: {{height}}
  </div>
</template>

<script>
import useSize from '../../hooks/useSize'
export default {
  name: 'UserSizeView',
  components: {},
  setup () {
    const { width, height } = useSize('UserSizeView')
    return {
      width,
      height
    }
  }
}
</script>
