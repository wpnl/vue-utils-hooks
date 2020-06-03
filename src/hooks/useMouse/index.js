import { reactive, onMounted, onUnmounted, toRef } from 'vue'

/**
 * 跟踪鼠标位置
 */
export default function useMouse () {
  const state = reactive({
    pos: {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0
    }
  })

  const moveHandler = (event) => {
    const { screenX, screenY, clientX, clientY, pageX, pageY } = event
    state.pos = { screenX, screenY, clientX, clientY, pageX, pageY }
  }

  onMounted(() => {
    document.addEventListener('mousemove', moveHandler)
  })
  onUnmounted(() => {
    document.removeEventListener('mousemove', moveHandler)
  })

  return toRef(state, 'pos')
}
