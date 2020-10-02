import React, { Component } from 'react'
import navStyle from './Nav.module.scss'
import Button from './../button/button.js' //
import icon_Home from './../../assets/shouye.svg'
import icon_Menu from './../../assets/menu.svg'
import icon_Github from './../../assets/github.svg'

/* 顶部导航栏 */
export default class Nav extends Component {
  render() {
    return (
      <nav className={`rowSpaceBetween ${navStyle.nav}`}>
        <Button
          Width="40px"
          Height="40px"
          button_icon={icon_Menu}
          Style="out"
        />
        <p className={navStyle.title}>Neumorphism Clock</p>
        <div className="rowCenter">
          <Button
            Width="40px"
            Height="40px"
            button_icon={icon_Github}
            Style="out"
            link="https://github.com/RayJason"
            style={{ margin: '0 20px' }}
          />
          <Button
            Width="40px"
            Height="40px"
            button_icon={icon_Home}
            Style="out"
            link="https://rayjason.cn"
          />
        </div>
      </nav>
    )
  }
}
