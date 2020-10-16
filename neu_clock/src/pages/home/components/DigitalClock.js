import React from 'react'
import styles from './AnalogClock.module.scss'

function DigitalClock(props) {
  // 更新数字时钟
  function renderClock() {
    let data = props.Time
    let hour = Number(data.split(':')[0])
    let minute = Number(data.split(':')[1])
    let second = Number(data.split(':')[2])

    // 显示的时间
    let time =
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second)

    return time
  }

  return (
    <div
      className={`${styles.DigitalClock} columnCenter `}
      style={{
        width: props.Width,
        height: props.Height,
      }}
    >
      <div className={styles.DigitalClockTime}>{renderClock()}</div>
    </div>
  )
}

// 默认props
DigitalClock.defaultProps = {
  Width: '49vw',
  Height: '21vw',
}

export default DigitalClock
