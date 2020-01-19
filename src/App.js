import React, { Component, Fragment } from 'react'
import './App.css'

//引入动画
import { CSSTransition } from 'react-transition-group';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="app"
          unmountOnExit
          onEntered={(el)=>{el.style.color = 'blue'}}
          appear={true}>
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

}

export default App