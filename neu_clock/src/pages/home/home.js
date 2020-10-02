import React from 'react'
import Clock from './components/clock'
import homeStyle from './home.module.scss'

function home() {
  

  return (
    <div className={`${homeStyle.home} columnCenter`}>
      <Clock />
      {/* <p>Neumorphism Clock</p> */}
    </div>
  )
}

export default home
