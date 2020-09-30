import React, { Component } from 'react'
import './Nav.scss'
import Button from './../button/button.js'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Button />
        <p className="title">Neumorphism Clock</p>
        <Button />
      </nav>
    )
  }
}
