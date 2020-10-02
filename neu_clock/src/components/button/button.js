import React from 'react'

/* 
  按钮组件
  属性:
  宽/高/按钮内容
  Width/Height/button_icon
  风格：
  Style
  默认 neuShadow_border
  "in":neuShadow_in
  "out":neuShadow_out
*/

function Button(props) {
  // 按钮样式
  function buttonStyle() {
    let styleClass = ''
    switch (props.Style) {
      case 'out':
        styleClass = 'neuShadow_out'
        break
      case 'in':
        styleClass = 'neuShadow_in'
        break
      default:
        styleClass = 'neuShadow_border'
        break
    }
    return styleClass
  }

  return (
    <a
      href={props.link}
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={props.style}
    >
      <button
        className={`columnCenter ${buttonStyle()}`}
        style={{ width: props.Width, height: props.Height }}
      >
        <img src={props.button_icon} alt="" width="50%" />
        {props.button_text}
      </button>
    </a>
  )
}

export default Button
