import { reactive, onMounted, onUnmounted, getCurrentInstance } from 'vue'

/**
 * 获取元素的滚动状态
 * @param {target} 接受 document 或者 ref
 */
export default function useScroll (target) {
  let targetElement = target

  const position = reactive({
    left: 0,
    top: 0
  })

  onMounted(() => {
    if (typeof targetElement === 'string') {
      const { ctx } = getCurrentInstance()
      targetElement = ctx.$refs[target]
    }

    if (!targetElement) return

    const setPosition = (newPosition) => {
      position.left = newPosition.left
      position.top = newPosition.top
    }
    const updatePosition = (target) => {
      let newPosition
      if (target === document) {
        if (!document.scrollingElement) return
        newPosition = {
          left: document.scrollingElement.scrollLeft,
          top: document.scrollingElement.scrollTop
        }
      } else {
        newPosition = {
          left: target.scrollLeft,
          top: target.scrollTop
        }
      }
      setPosition(newPosition)
    }
    const listener = (event) => {
      if (!event.target) return
      updatePosition(event.target)
    }

    updatePosition(targetElement)
    targetElement.addEventListener('scroll', listener)

    onUnmounted(() => {
      console.log('触发摧毁了')
      targetElement.removeEventListener('scroll', listener)
    })
  })
  return [position, targetElement]
}
