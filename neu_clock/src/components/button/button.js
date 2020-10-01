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
    <button
      className={`columnCenter ${buttonStyle()}`}
      style={{ width: props.Width, height: props.Height}}
    >
      <img src={props.button_icon} alt="" width="50%" />
      {props.button_text}
    </button>
  )
}

export default Button

// 有状态函数式组件写法：

// import React, { Component } from 'react'

// export default class button extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       Width: this.props.Width,
//       Height: this.props.Height,
//       button_icon: this.props.button_icon,
//       style: this.props.Style
//     }
//   }

//   buttonStyle(style) {
//     var styleClass = '';
//     switch (style) {
//       case 'out':
//         styleClass = 'neuShadow_out'
//         break;
//       case 'in':
//         styleClass = 'neoShadow_in'
//         break;
//       default:
//         styleClass = 'neoShadow_border'
//         break;
//     }
//     return styleClass;
//   }

//   render() {
//     return (
//       <div
//         className={"columnCenter" + this.buttonStyle}
//         style={{ width: this.state.Width, height: this.state.Height }}
//       >
//         <div>{this.state.button_icon}</div>
//       </div>
//     )
//   }
// }
