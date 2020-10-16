// import React from 'react'
import AnalogClock from './AnalogClock'
import DigitalClock from './DigitalClock'

/*
    clockStyle:时钟风格
        1.Analog 模拟时钟
        2.Digital 数字时钟
    Width:宽度
    Height:高度
    Time: 自定义时间
*/

// function clock(props) {
//   // 计算显示的时间
//   function calcuTime() {
//     let settedTime = '0:0:0' // 自定义的时间 格式 h:m:S
//     settedTime = props.Time ? props.Time : settedTime
//     console.log('传入的自定义时间：', props.Time)

//     // let updataTimeout = '' // 更新时钟计时器

//     let hour = Number(settedTime.split(':')[0])
//     let minute = Number(settedTime.split(':')[1])
//     let second = Number(settedTime.split(':')[2])

//     let nowTimestamp = Math.round(new Date() / 1000) + 28800000 // 当前时间戳(+8小时转换到东八区北京时间)
//     let outTime = nowTimestamp - props.timestamp // 相对时差

//     let allSecond = second + outTime // 秒
//     let allMinute = minute * 60 + allSecond // 截止到分的总秒

//     second = allSecond % 60
//     minute = (minute + Math.floor(allSecond / 60)) % 60
//     hour = (hour + Math.floor(allMinute / 3600)) % 24

//     return hour + ':' + minute + ':' + second
//   }

//   // 选择时钟风格
//   function renderClock() {
//     console.log(calcuTime())
//     switch (props.clockStyle) {
//       case 0:
//         // 数字时钟
//         return <DigitalClock Time={calcuTime()} timestamp={props.timestamp} />
//       case 1:
//         // 模拟时钟
//         return <AnalogClock Time={calcuTime()} timestamp={props.timestamp} />

//       default:
//         // 默认模拟时钟
//         return <AnalogClock Time={calcuTime()} timestamp={props.timestamp} />
//     }
//   }

//   return renderClock()
// }

// export default clock

import React, { Component } from 'react'

export default class clock extends Component {
  constructor() {
    super()
    this.state = {
      settedTime: '0:0:0', // 自定义的时间
      nowTime: '0:0:0', // 现在显示的时间
    }
  }

  // 在第一次渲染后调用
  componentDidMount() {
    this.calcuTime()
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate的props.Time', this.props.Time)
    // console.log('componentDidUpdate的settedTime', this.state.settedTime)
    if (this.props.Time && this.props.Time !== this.state.settedTime) {
      this.setState(
        {
          settedTime: this.props.Time,
          prevTimestamp: this.props.timestamp, // 单位：秒
        },
        () => this.calcuTime()
      )
    }
  }

  // 计算显示的时间
  calcuTime = () => {
    console.log('传入的自定义时间：', this.props.Time)
    let settedTime = this.state.settedTime

    // let updataTimeout = '' // 更新时钟计时器

    let hour = Number(settedTime.split(':')[0])
    let minute = Number(settedTime.split(':')[1])
    let second = Number(settedTime.split(':')[2])

    let nowTimestamp = Math.round(new Date() / 1000) + 28800000 // 当前时间戳(+8小时转换到东八区北京时间)
    let outTime = nowTimestamp - this.props.timestamp // 相对时差

    let allSecond = second + outTime // 秒
    let allMinute = minute * 60 + allSecond // 截止到分的总秒

    second = allSecond % 60
    minute = (minute + Math.floor(allSecond / 60)) % 60
    hour = (hour + Math.floor(allMinute / 3600)) % 24

    this.setState({
      nowTime: hour + ':' + minute + ':' + second,
    })
  }

  // 选择时钟风格
  RenderClock = () => {
    console.log(this.state.nowTime)
    switch (this.props.clockStyle) {
      case 0:
        // 数字时钟
        return (
          <DigitalClock
            Time={this.state.nowTime}
            timestamp={this.props.timestamp}
          />
        )
      case 1:
        // 模拟时钟
        return (
          <AnalogClock
            Time={this.state.nowTime}
            timestamp={this.props.timestamp}
          />
        )

      default:
        // 默认模拟时钟
        return (
          <AnalogClock
            Time={this.state.nowTime}
            timestamp={this.props.timestamp}
          />
        )
    }
  }
  render() {
    return <this.RenderClock />
  }
}
