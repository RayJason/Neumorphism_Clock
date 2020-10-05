import React from 'react'
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

function clock(props) {
  // 选择时钟风格
  function renderClock() {
    switch (props.clockStyle) {
      case 'Analog':
        // 模拟时钟
        return <AnalogClock />
      case 'Digital':
        // 数字时钟
        return <DigitalClock />
      default:
        // 默认模拟时钟
        return <AnalogClock />
    }
  }

  return renderClock()
}

export default clock
