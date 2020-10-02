import React, { Component } from 'react'

export class clock extends Component {
  /*
        clockStyle:时钟风格
            1.round:圆形针表
            2.rectangle 矩形电子表    
        Width:宽度
        Height:高度
    */

  constructor() {
    super()
    this.state = {
      date: new Date(),
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  selectClockStyle() {
    let ClassName = ''
    switch (this.props.clockStyle) {
      case 'round':
        // console.log('时钟风格：圆形针表')
        // ClassName = styles.roundClock
        ClassName = '50%'
        break
      case 'rectangle':
        // console.log('时钟风格：矩形电子表')
        // ClassName = styles.rectangleClock
        ClassName = '10px'
        break
      default:
        // console.log('默认时钟风格：圆形针表')
        ClassName = '50%'
        break
    }
    return ClassName
  }

  render() {
    return (
      <div
        className={`neuShadow_border`}
        style={{
          width: this.props.Width,
          height: this.props.Height,
          borderRadius: this.selectClockStyle(),
        }}
      >
        {/* {this.state.date.toLocaleTimeString()} */}
      </div>
    )
  }
}

// 默认props
clock.defaultProps = {
  Width: '30vw',
  Height: '30vw',
  clockStyle: 'round',
}

export default clock
