import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'

/**
 * 跟踪 dom 元素是否有鼠标悬停
 * @param {refName} ref名称
 */
export default function useSize (refName) {
  let targetElement

  const isHovering = ref(false)
  const onMouseEnter = () => {
    isHovering.value = true
  }
  const onMouseLeave = () => {
    isHovering.value = false
  }
  onMounted(() => {
    const { ctx } = getCurrentInstance()
    targetElement = ctx.$refs[refName]

    if (targetElement) {
      targetElement.addEventListener('mouseenter', onMouseEnter)
      targetElement.addEventListener('mouseleave', onMouseLeave)
    }
  })

  onUnmounted(() => {
    if (targetElement) {
      targetElement.removeEventListener('mouseenter', onMouseEnter)
      targetElement.removeEventListener('mouseleave', onMouseLeave)
    }
  })

  return [isHovering]
}
