//使用react-redux
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { INPUT_VAL_CHANGE, ADD_TOOD_ITEM, DEL_TOOD_ITEM } from './store/actionsType'

// 无状态 UI 组件
const Todo = (props) => {
  const { inputVal, list, handleInputChange, handleBtnClick, handleDel } = props
  return (
    <Fragment>
      <input type="text" value={inputVal} onChange={handleInputChange} />
      <button onClick={handleBtnClick}>提交</button>
      {
        list.map((item, idx) => {
          return <li key={item} onClick={() => { handleDel(idx) }}>
            {item}
          </li>
        })
      }
    </Fragment>
  )
}


// class Todo extends Component {
//   render() {
//     const { inputVal, list, handleInputChange, handleBtnClick, handleDel } = this.props
//     return (
//       <Fragment>
//         <input type="text" value={inputVal} onChange={handleInputChange} />
//         <button onClick={handleBtnClick}>提交</button>
//         {
//           list.map((item, idx) => {
//             return <li key={item} onClick={() => { handleDel(idx) }}>
//               {item}
//             </li>
//           })
//         }
//       </Fragment>
//     )
//   }
// }

//映射到 props
const mapStateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list
  }
}

//store.patch 挂载到 props 上面
const mapDispatchToProps = (dispatch) => {
  return {

    handleInputChange(e) {
      const inputVal = e.target.value
      const action = {
        type: INPUT_VAL_CHANGE,
        value: inputVal
      }
      dispatch(action)
    },

    handleBtnClick() {
      const action = {
        type: ADD_TOOD_ITEM
      }
      dispatch(action)
    },

    handleDel(idx) {
      const action = {
        type: DEL_TOOD_ITEM,
        value: idx
      }
      dispatch(action)
    }

  }
}

// 容器组件

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
