//不使用 redux
import React, { Component, Fragment } from 'react'

//引入列表组件
import ToodItem from './ToodItem'

//引入 axios 
import axios from 'axios'

//类 = 原型
class Toodlist extends Component {

  //构造函数
  constructor(props) {
    //执行父类构造函数方法
    //继承父类
    super(props)

    //实例属性
    this.state = {
      inputVal: '',
      list: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDel = this.handleItemDel.bind(this)
  }

  //实例方法

  handleInputChange(e) {
    //获取 DOM 元素的方法
    const inputVal = this.input.value
    //const inputVal = e.target.value
    this.setState(() => ({
      inputVal
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputVal],
      inputVal: ''
    }), () => {
      console.log(`异步更新`)
    })
  }


  handleItemDel(idx) {
    //不建议直接修改 state
    // es6深拷贝
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(idx, 1)
      return {
        list
      }
    })
  }

  //渲染列表
  getToodItem() {
    return (
      this.state.list.map((item, idx) => {
        return (
          // 1、组件传值
          // 1.1 子组件向父组件传值，通过属性
          <ToodItem
            key={item.toString()}
            item={item}
            idx={idx}
            ItemDel={this.handleItemDel} />
        )
      })
    )
  }

  //生命周期
  componentDidMount() {
    //console.log("componentDidMount")
    axios.get('api/toodlist')
      .then((res) => {
        //console.log(res.data)
        this.setState(() => {
          return {
            list: res.data
          }
        })
      })
      .catch((e) => {
        alert(e)
      })
  }

  render() {
    console.log('parent')
    return (
      <Fragment>
        {/* jsx中 用 htmlFor 代替 for */}
        <label htmlFor="insertVal">输入内容</label>
        <input
          id='insertVal'
          type="text"
          value={this.state.inputVal}
          onChange={this.handleInputChange}
          ref={(input) => { this.input = input }} />
        <button
          onClick={this.handleBtnClick}>
          提交
        </button>

        {
          this.getToodItem()
        }
      </Fragment>
    )
  }
}

export default Toodlist