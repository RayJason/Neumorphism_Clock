import React from 'react'
import Clock from './components/clock'
import './home.module.scss'

function home() {
  

  return (
    <div className="home columnCenter">
      <Clock />
      <p>Neumorphism Clock</p>
    </div>
  )
}

export default home
