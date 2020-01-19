//使用了 redux
import React, { Component } from 'react'
import store from './store'
//引入 axios 
import axios from 'axios'

// action 构造器
import {
  InitAction,
  getInitList,
  //getToodlist,
  getInputChangeAction,
  getBtnClickAction,
  getItemDelAction,
} from './store/actionsCreator'


//引入 ui 组件
import ToodlistUI from './ToodlistUI'

class Toodlist extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)

    this.handleItemDel = this.handleItemDel.bind(this)

    //store订阅 store改变时候执行
    store.subscribe(this.storeChange)
  }


  //更新 store
  storeChange() {
    this.setState(
      store.getState()
    )
  }

  // getList() {
  //   return this.state.list.map((item, idx) => {
  //     return <li key={item} onClick={this.handleItemDel.bind(this, idx)}>
  //       {item}
  //     </li>
  //   })
  // }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    // 派发 action
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = getBtnClickAction()
    store.dispatch(action)
  }

  handleItemDel(idx) {
    const action = getItemDelAction(idx)
    store.dispatch(action)
  }


  //生命周期
  componentDidMount() {

    /*下面是使用 redux-thunk
    // const action = getToodlist()
    // //调用 dispatch 执行action
    // store.dispatch(action)
    */

    /*常规做法
    axios.get('api/toodlist')
      .then((res) => {
        const action = InitAction(res.data)
        store.dispatch(action)
      })
      .catch((e) => {
        alert(e)
      })*/

    const action = getInitList()
    store.dispatch(action)
  }


  render() {
    return (
      <ToodlistUI
        list={this.state.list}
        inputVal={this.state.inputVal}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDel={this.handleItemDel} />
    )
    // return (
    //   <Fragment>
    //     <input
    //       type="text" placeholder="输入内容"
    //       value={this.state.inputVal}
    //       onChange={this.handleInputChange} />
    //     <button
    //       onClick={this.handleBtnClick}>提交</button>
    //     <div>
    //       {this.getList()}
    //     </div>
    //   </Fragment>
    // )
  }
}

export default Toodlist