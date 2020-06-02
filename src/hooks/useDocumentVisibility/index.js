import { ref, onMounted, onUnmounted } from 'vue'

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilityState
 * 可以获取页面可见状态的 Hook
 * @returns {string} 'hidden' | 'visible' | 'prerender' | boolean;
 */
export default function useDocumentVisibility () {
  const getVisibility = () => {
    // 如果是服务端渲染，直接返回true
    if (typeof document === 'undefined') return true
    return document.visibilityState
  }
  const handleVisibilityChange = () => {
    documentVisibility.value = getVisibility()
  }
  const documentVisibility = ref(getVisibility())
  onMounted(() => {
    window.addEventListener('visibilitychange', handleVisibilityChange)
  })

  onUnmounted(() => {
    window.removeEventListener('visibilitychange', handleVisibilityChange)
  })

  return documentVisibility
}
