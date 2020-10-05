import React, { Component } from 'react'
import styles from './AnalogClock.module.scss'

export default class DigitalClock extends Component {
  constructor() {
    super()
    this.state = {
      date: '', // 显示的时间
    }

    this.getTime = this.getTime.bind(this)
  }

  // 在第一次渲染后调用
  componentDidMount() {
    this.getTime()
  }

  // 在组件从 DOM 中移除之前立刻被调用
  componentWillUnmount() {
    clearTimeout(this.getTime)
  }

  // 获取时间 (非自定义时间)
  getTime() {
    let data = new Date()
    let hour = data.getHours() < 10 ? '0' + data.getHours() : data.getHours()
    let minutes =
      data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
    let seconds =
      data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()
    let time = hour + ':' + minutes + ':' + seconds
    // 设置时间和时钟角度
    this.setState({
      date: time,
    })
    setTimeout(this.getTime, 1000)
  }

  render() {
    return (
      <div
        className={`${styles.DigitalClock} columnCenter `}
        style={{
          width: this.props.Width,
          height: this.props.Height,
        }}
      >
        <div className={styles.DigitalClockTime}>{this.state.date}</div>
      </div>
    )
  }
}

// 默认props
DigitalClock.defaultProps = {
  Width: '49vw',
  Height: '21vw',
  Time: new Date(),
}
