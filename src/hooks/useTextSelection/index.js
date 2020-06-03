import { toRef, reactive, onMounted, onUnmounted, getCurrentInstance } from 'vue'

const initRect = {
  top: NaN,
  left: NaN,
  bottom: NaN,
  right: NaN,
  height: NaN,
  width: NaN
}

const initState = {
  text: '',
  ...initRect
}

function getRectFromSelection (selection) {
  if (!selection) {
    return initRect
  }

  if (selection.rangeCount < 1) {
    return initRect
  }
  const range = selection.getRangeAt(0)
  const {
    height,
    width,
    top,
    left,
    right,
    bottom
  } = range.getBoundingClientRect()
  return {
    height,
    width,
    top,
    left,
    right,
    bottom
  }
}

/**
 * 实时获取用户当前选取的文本内容及位置
 * @param {target} 接受 ref | dom
 */
export default function useTextSelection (target) {
  const state = reactive({
    initState
  })

  onMounted(() => {
    let targetElement = target
    if (typeof targetElement === 'string') {
      const { ctx } = getCurrentInstance()
      targetElement = ctx.$refs[target]
    }
    if (!targetElement) {
      return
    }

    const mouseupHandler = () => {
      let selObj = null
      let text = ''
      let rect = initRect
      if (!window.getSelection) return
      selObj = window.getSelection()
      text = selObj ? selObj.toString() : ''
      if (text) {
        rect = getRectFromSelection(selObj)
        state.initState = { text, ...rect }
      }
    }

    // 点击后清空之前的 range
    const mousedownHandler = () => {
      if (!window.getSelection) return
      if (targetElement.text) {
        state.initState = { ...initState }
      }
      const selObj = window.getSelection()
      if (!selObj) return
      selObj.removeAllRanges()
    }

    targetElement.addEventListener('mouseup', mouseupHandler)
    document.addEventListener('mousedown', mousedownHandler)

    onUnmounted(() => {
      targetElement.removeEventListener('mouseup', mouseupHandler)
      document.removeEventListener('mousedown', mousedownHandler)
    })
  })

  return [toRef(state, 'initState')]
}
