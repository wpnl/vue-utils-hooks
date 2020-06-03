<template>
  <div class="UseTextSelectionView" ref="UseTextSelectionView">
    请点击你的鼠标选择页面上的任何文本。
    <div>
      Result： {{ JSON.stringify(selection) }}
    </div>
  </div>
</template>

<script>
import useTextSelection from '../../hooks/useTextSelection'
export default {
  name: 'UseTextSelectionView',
  components: {},
  setup () {
    const [selection] = useTextSelection(document)
    return {
      selection
    }
  }
}
</script>
