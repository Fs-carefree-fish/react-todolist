![avatar](/note/react特点.png)

## 2、传值校验
## 3、组件的 state 或者 props 发生改变的时候，render会执行一次(页面重渲染)
##    render 中包含的子组件也会被重渲染（性能问题？开销大）
## 4、虚拟DOM
![avatar](/note/虚拟DOM1.png)
![avatar](/note/虚拟DOM2.png)

## 5、生命周期
## componentWillReceiveProps：子组件存在的时候，才会执行（即子组件首次渲染时候·，不执行）
## axios 处理一般在 componentDidMount 中

## 6、react 动画 react-transition-group

![avatar](/note/redux.png)
## 7、ui 组件只负责 ui 渲染
## 8、无状态组件（只有UI）可以提高性能 本质是一个函数
## 9、redux-thunk 解决异步代码（ajax请求）
## 中间件即 action 和 reducer 中间，也即 dispatch 的处理，判断action是否为对象或者函数进一步操作
## 10、另一种方法 使用 redux-saga 相比redux-thunk api更多 更加适合业务逻辑复杂的项目

## 11、 connect 包装出容器组件
 
