import { ref, onMounted, getCurrentInstance, watchEffect } from 'vue'
import screenfull from 'screenfull'

/**
 * 一个用于处理 dom 全屏的 Hook
 * @param {refName} ref名称
 */
export default function useFullscreen (refName) {
  const state = ref(false)
  const setFull = () => { state.value = true }
  const exitFull = () => { state.value = false }
  const toggleFull = (isFullscreen) => {
    // 防止event传入
    if (typeof isFullscreen === 'boolean') {
      state.value = isFullscreen
      return
    }
    state.value = !state.value
  }
  /* 监听退出 */
  const onChange = () => {
    if (screenfull.isEnabled) {
      const { isFullscreen } = screenfull
      toggleFull(isFullscreen)
    }
  }

  onMounted(() => {
    const { ctx } = getCurrentInstance()
    const targetElement = ctx.$refs[refName]

    watchEffect((onInvalidate) => {
      /* 非全屏时，不需要监听任何全屏事件 */
      if (!state.value) {
        return
      }
      if (!targetElement) {
        return
      }

      if (screenfull.isEnabled) {
        try {
          screenfull.request(targetElement)
          setFull()
        } catch (error) {
          exitFull()
        }
        screenfull.on('change', onChange)
      }

      onInvalidate(() => {
        if (screenfull.isEnabled) {
          try {
            screenfull.off('change', onChange)
            screenfull.exit()
          } catch (error) { }
        }
      })
    })
  })

  return { isFullscreen: state, setFull, exitFull, toggleFull }
}
