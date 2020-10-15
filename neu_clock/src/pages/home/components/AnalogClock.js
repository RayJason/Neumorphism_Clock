import React, { Component } from 'react'
import styles from './AnalogClock.module.scss'

export default class AnalogClock extends Component {
  constructor() {
    super()
    this.state = {
      date: '', // 时钟下面显示的时间
      settedTime: '0:0:0', // 正在运行的初始时间

      hourRotate: 0, // 时针角度
      minuteRotate: 0, // 分针角度
      secondRotate: 0, // 秒针角度

      updataTimeout: '', // 更新时钟计时器
      prevTimestamp: 0, // 设置自定义时间时的时间戳
    }
  }

  // 在第一次渲染后调用
  componentDidMount() {
    this.initTime()
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
        () => this.initTime()
      )
    }
  }

  // 在组件从 DOM 中移除之前立刻被调用
  componentWillUnmount() {
    clearTimeout(this.state.updataTimeout)
  }

  // 初始化更新时间 (自定义时间)
  initTime = () => {
    // 清除计时器
    clearTimeout(this.state.updataTimeout)
    let data = this.state.settedTime
    // 提取时/分/秒 格式化并计算旋转角度
    let hour = Number(data.split(':')[0])
    let minute = Number(data.split(':')[1])
    let second = Number(data.split(':')[2])
    let time =
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second)
    // 设置时间和时钟角度
    this.setState(
      {
        date: time,
        hourRotate: (hour % 12) * 30 + minute / 2,
        minuteRotate: minute * 6 + second / 10,
        secondRotate: second * 6,
      },
      () => this.updataTime()
    )
  }

  // 更新时钟
  updataTime = () => {
    // this.calcuRotate()
    let data = this.state.settedTime
    let hour = Number(data.split(':')[0])
    let minute = Number(data.split(':')[1])
    let second = Number(data.split(':')[2])

    let nowTimestamp = Math.round(new Date() / 1000) + 28800000 // 当前时间戳(+8小时转换到东八区北京时间)
    let outTime = nowTimestamp - this.state.prevTimestamp // 相对时差

    let allSecond = second + outTime // 秒
    let allMinute = minute * 60 + allSecond // 截止到分的总秒

    second = allSecond % 60
    minute = (minute + Math.floor(allSecond / 60)) % 60
    hour = (hour + Math.floor(allMinute / 3600)) % 24

    let time =
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second)

    this.setState({
      date: time,
      hourRotate: (hour % 12) * 30 + minute / 2,
      minuteRotate: minute * 6 + second / 10,
      secondRotate: second * 6,
      updataTimeout: setTimeout(this.updataTime, 1000),
    })
  }

  // 计算模拟时钟角度
  // calcuRotate = () => {
  //   this.setState({
  //     hourRotate: this.state.hourRotate + 1 / 120,
  //     minuteRotate: this.state.minuteRotate + 1 / 10,
  //     secondRotate: this.state.secondRotate + 6,
  //   })
  // }

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
            className={`${styles.minuteLine} ${styles.lineTransition} `}
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
