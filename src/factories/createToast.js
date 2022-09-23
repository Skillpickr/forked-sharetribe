let id = 0

const defaultOptions = {
  color: '#fc6161'
}

export default function createToast(options) {
  // console.log('adToast', id)
  return {
    ...defaultOptions,
    ...options,
    id: id++
  }
}
