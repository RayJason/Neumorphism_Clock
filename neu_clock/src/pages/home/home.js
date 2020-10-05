import React from 'react'
import Clock from './components/clock'
import Button from './../../components/button/button'
import styles from './home.module.scss'

import clock from './../../assets/clock.svg'
import shalou from './../../assets/shalou.svg'
import daojishi from './../../assets/daojishi.svg'
import naozhong from './../../assets/naozhong.svg'

// 功能列表
function FeaturesList() {
  const featuresList = [
    {
      id: 1,
      feature: '时间',
      icon: clock,
    },
    {
      id: 2,
      feature: '倒计时',
      icon: shalou,
    },
    {
      id: 3,
      feature: '计时',
      icon: daojishi,
    },
    {
      id: 4,
      feature: '闹钟',
      icon: naozhong,
    },
  ]

  return (
    <div className={`${styles.features} rowCenter`}>
      {featuresList.map((feature) => (
        <div
          key={feature.id}
          className="columnCenter"
          style={{ margin: '10px' }}
        >
          <p>{feature.feature}</p>
          <Button button_icon={feature.icon} />
        </div>
      ))}
    </div>
  )
}

function Menu() {
  return (
    <div className={`${styles.menu} columnCenterStart`}>
      <div className={`${styles.item} rowCenter`}>
        <input className="switch" type="checkbox" id="Punctuality" />
        <label htmlFor="Punctuality" className={`${styles.text}`}>
          正点报时
        </label>
      </div>
      <div className={`${styles.item} rowCenter`}>
        <input className="switch" type="checkbox" id="clockStyle" />
        <label htmlFor="clockStyle" className={`${styles.text}`}>
          数字时钟/模拟时钟
        </label>
      </div>
    </div>
  )
}

function home() {
  return (
    <div style={{ position: 'relative' }}>
      <Menu />
      <div className={`${styles.home} columnCenter`}>
        <Clock clockStyle="Analog" />
      </div>
      <FeaturesList />
    </div>
  )
}

export default home
