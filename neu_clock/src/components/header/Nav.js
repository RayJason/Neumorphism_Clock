import React, { Component } from 'react'
import styles from './Nav.module.scss'
import Button from './../button/button.js' // 引入按钮组件

import HomeMenu from './../../pages/home/components/HomeMenu'

/* 顶部导航栏 */
export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      switchMenu: false,
      punctual: false, // 整点报时
    }

    this.SwitchMenu = this.SwitchMenu.bind(this)
    this.setClockStyle = this.setClockStyle.bind(this)
  }

  Menu_icon() {
    return (
      <div>
        <input
          type="checkbox"
          id="burgerToggle"
          className={`${styles.burgerToggle}`}
          onChange={this.SwitchMenu}
        />
        <label htmlFor="burgerToggle" className={`${styles.burgerMenu}`}>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line}`}></div>
        </label>
      </div>
    )
  }

  SwitchMenu() {
    this.setState({
      switchMenu: !this.state.switchMenu,
    })
  }

  // 时钟风格切换
  setClockStyle(e) {
    this.props.clockStyle(e)
  }

  render() {
    return (
      <nav className={`rowSpaceBetween ${styles.nav}`}>
        <p className={styles.title}>Neumorphism Clock</p>
        {/* 菜单 */}
        <Button
          button_text={this.Menu_icon()}
          id="Menu"
          checked={this.state.switchMenu}
          Style="out"
        />
        {/* 标题右侧按钮 */}
        <div className="rowCenter">
          {/* Github */}
          <Button
            button_icon={require('./../../assets/github.svg')}
            Style="out"
            link="https://github.com/RayJason"
            style={{ margin: '0 20px' }}
          />
          {/* 官网 */}
          <Button
            button_icon={require('./../../assets/shouye.svg')}
            Style="out"
            link="https://rayjason.cn"
          />
        </div>
        {/* 菜单list */}
        {this.state.switchMenu && (
          <div style={{ position: 'absolute', left: '20px', bottom: '-150%' }}>
            <HomeMenu clockStyle={this.setClockStyle} />
          </div>
        )}
      </nav>
    )
  }
}
