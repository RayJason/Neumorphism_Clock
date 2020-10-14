import React from 'react'

/* 
  按钮组件
  Width:按钮宽度 默认40px
  Height:按钮高度 默认40px
  button_icon:按钮图标 用import或require('路径')引入
  button_text:按钮文字 也可插入组件
  style:可直接写css样式
  Style:按钮风格 border/in/out
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
      onClick={props.onClick}
    >
      {props.id && (
        <input
          type="checkbox"
          id={props.id}
          checked={props.checked}
          readOnly
          className="testChecked"
          style={{ appearance: 'none', display: 'none' }}
        ></input>
      )}
      <label
        htmlFor={props.id}
        className={`columnCenter ${buttonStyle()}`}
        style={{
          width: props.Width,
          height: props.Height,
          cursor: 'pointer',
          fontSize: '12px',
        }}
      >
        {/* 图标 */}
        {props.button_icon && (
          <img src={props.button_icon} alt="" width="50%" />
        )}

        {/* 文字 */}
        {props.button_text}
      </label>
    </a>
  )
}

// 默认props
Button.defaultProps = {
  Width: '40px',
  Height: '40px',
}

export default Button
