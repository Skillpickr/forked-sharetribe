import createToast from '../factories/createToast'

// ================ Action types ================ //

export const ADD_TOAST = 'app/ADD_TOAST'
export const REMOVE_TOAST = 'app/REMOVE_TOAST'
export const REMOVE_ALL_TOASTS = 'app/REMOVE_ALL_TOASTS'

const initialState = []

// ================ Reducer ================ //
export default function toasts(state = initialState, action) {
  const { payload, type } = action

  switch (type) {
    case ADD_TOAST:
      return [payload, ...state]

    case REMOVE_TOAST:
      return state.filter((toast) => toast.id !== payload)

    case REMOVE_ALL_TOASTS:
      return []

    default:
      return state
  }
}
// ================ Action Creators ================ //

export function addToast(options = {}) {
  return {
    type: ADD_TOAST,
    payload: createToast(options)
  }
}

export function removeToast(id) {
  return {
    type: REMOVE_TOAST,
    payload: id
  }
}

export function removeAllToasts() {
  return {
    type: REMOVE_ALL_TOASTS
  }
}
