import React, { Component } from 'react'
import styles from './AnalogClock.module.scss'

export default class AnalogClock extends Component {
  constructor() {
    super()
    this.state = {
      date: '', // 时钟下面显示的时间
      selfTime: null, // 用户自定义时间
      Timeing: null, // 正在运行的初始时间
      timeout: null, // 定时器

      hourRotate: 0, // 时针角度
      minuteRotate: 0, // 分针角度
      secondRotate: new Date().getSeconds() * 6, // 秒针角度
    }

    this.getTime = this.getTime.bind(this)
    this.updataTime = this.updataTime.bind(this)
  }

  // 在第一次渲染后调用
  componentDidMount() {
    if (this.props.Time) this.updataTime()
    else this.getTime()
  }

  // 在props变化后
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("props有更新",nextProps)
    if (nextProps.Time !== prevState.selfTime) {
      return {
        selfTime: nextProps.Time,
      }
    }
    return null
  }

  componentDidUpdate() {
    console.log('传入的selfTime', this.props.Time)
    console.log('现在的selfTime', this.state.selfTime)
    console.log('现在的Timeing', this.state.Timeing)
    if (this.state.selfTime !== this.state.Timeing) {
      console.log('Time传入')
      // 清除计时器
      clearTimeout(this.state.timeout)
      this.setState(
        {
          Timeing: this.state.selfTime,
        },
        () => this.updataTime()
      )
    }
  }

  // 在组件从 DOM 中移除之前立刻被调用
  componentWillUnmount() {
    clearTimeout(this.state.timeout)
  }

  // 获取时间 (非自定义时间)
  getTime() {
    console.log('getting')
    let data = new Date()
    let hour = data.getHours() < 10 ? '0' + data.getHours() : data.getHours()
    let minute =
      data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
    let seconds =
      data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()
    let time = hour + ':' + minute + ':' + seconds
    // 设置时间和时钟角度
    this.setState({
      date: time,
      hourRotate: (data.getHours() % 12) * 30 + 30 * (minute / 60),
      minuteRotate: data.getMinutes() * 6 + 6 * (data.getSeconds() / 60),
      secondRotate: this.state.secondRotate + 6,
      timeout: setTimeout(this.getTime, 1000),
    })
  }

  // 更新时间 (自定义时间)
  updataTime() {
    console.log('updataing')
    let data = this.state.selfTime
    // 提取时/分/秒来计算旋转角度 并增加
    let hour = data.split(':')[0]
    let minute = data.split(':')[1]
    let second = data.split(':')[2]
    let time =
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second)
    console.log('time:', time)
    // 设置时间和时钟角度
    this.setState({
      date: time,
      hourRotate: (hour % 12) * 30 + minute / 2,
      minuteRotate: minute * 6 + second / 10,
      secondRotate: second * 6,
      // timeout: setTimeout(this.updataTime, 1000),
    })
  }

  render() {
    return (
      <div className={`columnCenter`}>
        <div
          className={`neuShadow_border_clock rowCenter ${styles.AnalogClock} ${styles.lineTransition}`}
          style={{
            width: this.props.Width,
            height: this.props.Height,
          }}
        >
          {/* 时针 */}
          <div
            className={`${styles.hourLine} ${styles.lineTransition}`}
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
}
