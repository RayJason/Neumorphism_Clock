import React, { Component } from 'react'
import styles from './AnalogClock.module.scss'

export default class AnalogClock extends Component {
  constructor() {
    super()
    this.state = {
      date: '', // 时钟下面显示的时间
      Timeing: '0:0:0', // 正在运行的初始时间

      hourRotate: 0, // 时针角度
      minuteRotate: 0, // 分针角度
      secondRotate: new Date().getSeconds() * 6, // 秒针角度
    }

    this.updataTime = this.updataTime.bind(this)
  }

  // 在第一次渲染后调用
  componentDidMount() {
    this.updataTime()
  }

  componentDidUpdate() {
    console.log('传入的selfTime', this.props.Time)
    console.log('现在的Timeing', this.state.Timeing)
    if (this.props.Time !== this.state.Timeing) {
      console.log('Time传入')
      // 清除计时器
      clearTimeout(this.state.timeout)
      this.setState(
        {
          Timeing: this.props.Time,
        },
        () => this.updataTime()
      )
    }
  }

  // 在组件从 DOM 中移除之前立刻被调用
  componentWillUnmount() {
  }

  // 更新时间 (自定义时间)
  updataTime() {
    console.log('updataing')
    let data = this.state.Timeing
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
