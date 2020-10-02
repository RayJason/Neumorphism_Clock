import React, { Component } from 'react'
import styles from './clock.module.scss'

/*
    clockStyle:时钟风格
        1.round:圆形针表
        2.rectangle 矩形电子表    
    Width:宽度
    Height:高度
*/

export class clock extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      hourRotate: 0,
      minuteRotate: 0,
      secondRotate: new Date().getSeconds() * 6,
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

  // 获取时间
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
      // secondRotate: data.getSeconds() * 6,
      secondRotate: this.state.secondRotate + 6,
    })
    // console.log('hourRotate:',this.state.hourRotate)
    // console.log('minuteRotate:',this.state.minuteRotate)
    // console.log('secondRotate:',this.state.secondRotate)
    setTimeout(this.getTime, 1000)
  }

  // 选择时钟风格
  selectClockStyle() {
    let ClassName = ''
    switch (this.props.clockStyle) {
      case 'round':
        // 圆形针表
        ClassName = '50%'
        break
      case 'rectangle':
        // 矩形电子表
        ClassName = '10px'
        break
      default:
        ClassName = '50%'
        break
    }
    return ClassName
  }

  render() {
    return (
      <div className={`columnCenter ${styles.clock}} `}>
        <div
          className={`neuShadow_border_clock rowCenter ${styles.clock}`}
          style={{
            width: this.props.Width,
            height: this.props.Height,
            borderRadius: this.selectClockStyle(),
          }}
        >
          {/* 时针 */}
          <div
            className={styles.hLine}
            style={{
              transform:
                'translateY(-50%) rotateZ(' + this.state.hourRotate + 'deg)',
            }}
          ></div>
          {/* 秒针 */}
          <div
            className={`${styles.sLine} ${styles.lineTransition} `}
            style={{
              transform:
                'translateY(-50%) rotateZ(' + this.state.secondRotate + 'deg)',
            }}
          ></div>
          {/* 分针 */}
          <div
            className={styles.mLine}
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
clock.defaultProps = {
  Width: '30vw',
  Height: '30vw',
  clockStyle: 'round',
}

export default clock
