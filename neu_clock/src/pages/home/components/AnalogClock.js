import React, { Component } from 'react'
import styles from './AnalogClock.module.scss'

export default class AnalogClock extends Component {
  constructor() {
    super()
    this.state = {
      date: '', // 显示的时间
      hourRotate: 0, // 时针角度
      minuteRotate: 0, // 分针角度
      secondRotate: new Date().getSeconds() * 6, // 秒针角度
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
      hourRotate: (data.getHours() % 12) * 30 + 30 * (minutes / 60),
      minuteRotate: data.getMinutes() * 6 + 6 * (data.getSeconds() / 60),
      secondRotate: this.state.secondRotate + 6,
    })
    setTimeout(this.getTime, 1000)
  }

  render() {
    return (
      <div className={`columnCenter`}>
        <div
          className={`neuShadow_border_clock rowCenter ${styles.AnalogClock}`}
          style={{
            width: this.props.Width,
            height: this.props.Height,
          }}
        >
          {/* 时针 */}
          <div
            className={styles.hourLine}
            style={{
              transform:
                'translateY(-50%) rotateZ(' + this.state.hourRotate + 'deg)',
            }}
          ></div>
          {/* 秒针 */}
          <div
            className={`${styles.secondLine} ${styles.lineTransition} `}
            style={{
              transform:
                'translateY(-50%) rotateZ(' + this.state.secondRotate + 'deg)',
            }}
          ></div>
          {/* 分针 */}
          <div
            className={styles.minuteLine}
            style={{
              transform:
                'translateY(-50%) rotateZ(' + this.state.minuteRotate + 'deg)',
            }}
          ></div>

          <div className={styles.dot}></div>
        </div>
        <div className={styles.time}>
          <div>{this.state.date}</div>
        </div>
      </div>
    )
  }
}

// 默认props
AnalogClock.defaultProps = {
  Width: '30vw',
  Height: '30vw',
  Time: new Date(),
}
