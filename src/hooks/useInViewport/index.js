import { ref, onMounted, watchEffect, getCurrentInstance } from 'vue'

function isInViewPort (el) {
  if (!el) {
    return false
  }

  const viewPortWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const viewPortHeight =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  const rect = el.getBoundingClientRect()

  if (rect) {
    const { top, bottom, left, right } = rect
    return bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0
  }

  return false
}

/**
 * 一个用于判断dom元素是否在可视范围之内的 Hook
 * @param {refName} ref名称
 */
export default function useInViewport (refName) {
  const inViewPort = ref(isInViewPort())
  onMounted(() => {
    const { ctx } = getCurrentInstance()
    const targetElement = ctx.$refs[refName]

    inViewPort.value = isInViewPort(targetElement)
    watchEffect((onInvalidate) => {
      if (!targetElement) {
        return
      }

      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            inViewPort.value = true
          } else {
            inViewPort.value = false
          }
        }
      })
      observer.observe(targetElement)

      onInvalidate(() => {
        observer.disconnect()
      })
    })
  })

  return [inViewPort]
}
