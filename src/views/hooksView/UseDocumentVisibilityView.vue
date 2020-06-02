<template>
  <div class="UseDocumentVisibilityView" ref="UseDocumentVisibilityView">
    useDocumentVisibility
  </div>
</template>

<script>
import { watch } from 'vue'
import useDocumentVisibility from '../../hooks/useDocumentVisibility'
export default {
  name: 'UseDocumentVisibilityView',
  components: {},
  setup () {
    const documentVisibility = useDocumentVisibility()
    watch(documentVisibility, (value) => {
      console.log('当前 documentVisibility 状态', value)
    })
  }
}
</script>
