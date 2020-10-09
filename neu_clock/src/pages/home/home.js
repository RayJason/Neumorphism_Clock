import React, { Component } from 'react'
import Clock from './components/clock'
import Button from './../../components/button/button'
import styles from './home.module.scss'

import Nav from './../../components/header/Nav.js'
import Footer from './../../components/footer/footer.js'

import clock from './../../assets/clock.svg'
import shalou from './../../assets/shalou.svg'
import daojishi from './../../assets/daojishi.svg'
import naozhong from './../../assets/naozhong.svg'

// 左下角功能列表
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
          <Button button_icon={feature.icon} id={feature.icon} />
        </div>
      ))}
    </div>
  )
}

export class home extends Component {
  constructor() {
    super()
    this.state = {
      menu: '', // 显示菜单
      features: 0, // 功能选择
      punctual: false, // 整点报时
      clockStyle: 1, // 时钟风格
    }

    this.setClockStyle = this.setClockStyle.bind(this)
  }

  // 时钟风格切换
  setClockStyle(e) {
    this.setState({
      clockStyle: e,
    })
  }

  render() {
    return (
      <div>
        <Nav clockStyle={this.setClockStyle} />
        <div style={{ position: 'relative' }}>
          <div className={`${styles.home} columnCenter`}>
            <Clock clockStyle={this.state.clockStyle} />
          </div>
          <FeaturesList />
        </div>
        <Footer />
      </div>
    )
  }
}

export default home
