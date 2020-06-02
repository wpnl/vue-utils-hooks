import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'
import ResizeObserver from 'resize-observer-polyfill'

/**
 * 监听元素变化
 * @param {refName} ref名称
 */
export default function useSize (refName) {
  let resizeObserver

  const width = ref(0)
  const height = ref(0)

  onMounted(() => {
    const { ctx } = getCurrentInstance()
    const targetElement = ctx.$refs[refName]

    if (!targetElement) {
      return
    }

    resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        width.value = entry.target.clientWidth
        height.value = entry.target.clientHeight
      })
    })

    resizeObserver.observe(targetElement)
  })

  onUnmounted(() => {
    resizeObserver.disconnect()
  })

  return { width, height }
}
