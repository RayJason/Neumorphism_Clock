import React, { Component } from 'react'
import navStyle from './Nav.module.scss'
import Button from './../button/button.js' // 
import icon_Home from './../../assets/shouye.svg'

/* 顶部导航栏 */
export default class Nav extends Component {
  render() {
    return (
      <nav className={navStyle.nav} >
        <Button Width="40px" Height="40px" button_text="X" Style="out" />
        <p
          className={navStyle.title}
        >
          Neumorphism Clock
        </p>
        <a
          href="https://rayjason.cn"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Button Width="40px" Height="40px" button_icon={icon_Home} Style="out" />
        </a>
      </nav>
    )
  }
}
