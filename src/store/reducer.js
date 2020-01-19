import { INPUT_VAL_CHANGE, ADD_TOOD_ITEM, DEL_TOOD_ITEM, INIT_LIST_DATA } from './actionsType'

const defaultState = {
  inputVal: '',
  list: []
}

export default (state = defaultState, action) => {

  if (action.type === INPUT_VAL_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = action.value
    return newState
  }

  if (action.type === ADD_TOOD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = ''
    newState.list.push(state.inputVal)
    return newState
  }

  if (action.type === DEL_TOOD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }

  return state
}