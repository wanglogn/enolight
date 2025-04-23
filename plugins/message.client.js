export default defineNuxtPlugin((nuxtApp) => {
  const showMessage = (text, type = 'success', callback, duration = 1500) => {
    const container = document.createElement('div')
    container.className = `
      fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
      z-50 px-6 py-3 rounded-lg shadow-lg text-white text-base
      transition-opacity duration-300
      ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-gray-700'}
    `
    container.innerText = text

    document.body.appendChild(container)

    setTimeout(() => {
      container.style.opacity = '0'
      setTimeout(() => {
        document.body.removeChild(container)
        if (typeof callback === 'function') {
          callback() // 执行回调函数
        }
      }, 300)
    }, duration)
  }

  nuxtApp.provide('message', {
    success: (msg, duration = 3000, cb) => showMessage(msg, 'success', duration, cb),
    error: (msg, duration = 3000, cb) => showMessage(msg, 'error', duration, cb),
    info: (msg, duration = 3000, cb) => showMessage(msg, 'info', duration, cb),
  })
})