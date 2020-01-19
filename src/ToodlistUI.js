import React, { Fragment } from 'react'

// UI组件
// class ToodlistUI extends Component {

//   constructor(props) {
//     super(props)
//     //console.log(props)
//   }

//   render() {

//     return (
//       <Fragment>
//         <input
//           type="text" placeholder="输入内容"
//           value={this.props.inputVal}
//           onChange={this.props.handleInputChange} />
//         <button
//           onClick={this.props.handleBtnClick}>提交</button>
//         <div>
//           {
//             this.props.list.map((item, idx) => {
//             箭头函数里面的 this 绑定的是包围着它的最近 this 也就是ToodlistUI
//               return <li key={item} onClick={() => { this.props.handleItemDel(idx) }}>
//                 {item}
//               </li>
//             })}
//         </div>
//       </Fragment>
//     )
//   }
// }




// 无状态组件
const ToodlistUI = (props) => {
  return (
    <Fragment>
      <input
        type="text" placeholder="输入内容"
        value={props.inputVal}
        onChange={props.handleInputChange} />
      <button
        onClick={props.handleBtnClick}>提交</button>
      <div>
        {
          props.list.map((item, idx) => {
            return <li key={item} onClick={() => { props.handleItemDel(idx) }}>
              {item}
            </li>
          })}
      </div>
    </Fragment>
  )
}

export default ToodlistUI



