import { INPUT_VAL_CHANGE, ADD_TOOD_ITEM, DEL_TOOD_ITEM, INIT_LIST_DATA } from './actionsType'

const defaultState = {
  inputVal: '',
  list: ['123']
}

//reducer 是一个纯函数 固定输入一定有固定输出，并且不会有任何副作用
//redux 可以接收 state 但不可修改
export default (state = defaultState, action) => {

  // ajax 初始化数据
  if (action.type === INIT_LIST_DATA) {
    //console.log(action)
    // //深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }

  if (action.type === INPUT_VAL_CHANGE) {
    //深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    //修改 store 中的 inputVal
    newState.inputVal = action.value
    return newState
  }


  if (action.type === ADD_TOOD_ITEM) {
    //深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = ''
    newState.list.push(state.inputVal)
    return newState
  }

  if (action.type === DEL_TOOD_ITEM) {
    //深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }




  return state
}