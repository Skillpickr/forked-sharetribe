import createToast from '../factories/createToast'

// ================ Action types ================ //

export const ADD_TOAST = 'app/ADD_TOAST'
export const REMOVE_TOAST = 'app/REMOVE_TOAST'

// ================ Reducer ================ //
export default function toasts(state = [], action) {
  const { payload, type } = action

  switch (type) {
    case ADD_TOAST:
      return [payload, ...state]

    case REMOVE_TOAST:
      return state.filter((toast) => toast.id !== payload)

    default:
      return state
  }
}
// ================ Action Creators ================ //

export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST
  }
}

export function removeToast(id) {
  return {
    payload: id,
    type: REMOVE_TOAST
  }
}
