import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ToodItem extends Component {

  constructor(props) {
    super(props)

    //性能优化
    this.ItemDel = this.ItemDel.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.item !== this.props.item
  }

  //实例方法
  ItemDel() {
    const { ItemDel } = this.props
    const { idx } = this.props

    ItemDel(idx)

    //调用父组件方法 间接操作父组件数据
    //this.props.ItemDel(this.props.idx)
  }
  render() {

    // console.log('child')
    //利用 es6 解构赋值
    const { item } = this.props

    //默认值
    const { def } = this.props

    return (
      // 1.2 父组件向子组件传值 使用函数触发
      <li
        //绑定子组件方法
        onClick={this.ItemDel}
      >
        {def}======={item}
      </li>
    )
  }
}

//2、传值校验
ToodItem.propTypes = {
  def: PropTypes.string.isRequired,
  ItemDel: PropTypes.func,
  idx: PropTypes.number,
  item: PropTypes.string,
}

ToodItem.defaultProps = {
  def: 'item'
}
export default ToodItem
