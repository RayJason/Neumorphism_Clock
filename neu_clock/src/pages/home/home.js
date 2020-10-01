import React from 'react'
import logo from './../../logo.svg'
import './home.scss'

function home() {
  return (
    <div className="home columnCenter">
      <img src={logo} style={{ width: '200px' }} alt="logo" />
      <p>Neumorphism Clock</p>
    </div>
  )
}

export default home
