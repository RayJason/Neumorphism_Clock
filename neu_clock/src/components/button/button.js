import React, { Component } from 'react'
// const styles = StyleSheet.create({
//     neuShodow_out: {

//     }
// })

export default class button extends Component {
  // TODO 添加width、height、按钮内容参数
  state = {
    Width: '40px',
    Height: '40px',
    button_icon: 'X',
  }

  render() {
    return (
      <div
        className="neuShodow_out flex_center flex_column"
        style={{ width: this.state.Width, height: this.state.Height }}
      >
        <div>{this.state.button_icon}</div>
      </div>
    )
  }
}
