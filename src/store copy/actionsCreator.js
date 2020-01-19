import {
  INPUT_VAL_CHANGE,
  ADD_TOOD_ITEM,
  DEL_TOOD_ITEM,
  INIT_LIST_DATA,
  GET_INIT_LIST
} from './actionsType'

import axios from 'axios'



export const getInputChangeAction = (val) =>
  ({
    type: INPUT_VAL_CHANGE,
    value: val
  })

export const getBtnClickAction = () =>
  ({
    type: ADD_TOOD_ITEM
  })

export const getItemDelAction = (idx) =>
  ({
    type: DEL_TOOD_ITEM,
    value: idx
  })

//1、 使用 ajax 初始化数据
export const InitAction = (data) =>
  ({
    type: INIT_LIST_DATA,
    value: data
  })

//2、 使用了 redux-thunk 之后 action 
//不仅仅可以是对象，也可以是函数

// export const getToodlist = () => {
//   //通过派发，即store.dispatch 来执行这个函数
//   return (dispatch) => {
//     axios.get('api/toodlist')
//       .then((res) => {
//         const data = res.data
//         //再创建 action 
//         const action = InitAction(data)
//         //派发
//         dispatch(action)

//       }).catch((e) => {
//         alert(e)
//       })
//   }
// }


//3、 使用 redux-saga
export const getInitList = () =>
  ({
    type: GET_INIT_LIST
  })

