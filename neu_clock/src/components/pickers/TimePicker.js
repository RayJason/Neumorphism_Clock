import React from 'react'
import Button from './../button/button'

function TimePicker(props) {
  // 自选时间
  let hour = 0
  let minute = 0
  let second = 0

  let time = '0:0:0'

  let candidate60 = []
  let candidate24 = []

  for (let i = 0; i < 25; i++) {
    candidate24.push(i < 10 ? '0' + i : i)
  }
  for (let i = 0; i < 61; i++) {
    candidate60.push(i < 10 ? '0' + i : i)
  }

  // 现在时间
  function nowTime() {
    let date = new Date()
    let nHour = date.getHours()
    let nMinute = date.getMinutes()
    let nSecond = date.getSeconds()
    time = nHour + ':' + nMinute + ':' + nSecond

    // 传到父组件
    console.log('时间设置', time)
    props.sendTime(time)
    props.changeButton(false)
  }

  // 设置自定义时间
  function setTime() {
    time = hour + ':' + minute + ':' + second

    // 传到父组件
    console.log('时间设置', time)
    props.sendTime(time)
    props.changeButton(false)
  }

  return (
    <div className="columnCenter" style={{ width: '150px' }}>
      {/* 选择器 */}
      <div
        className="rowSpaceBetween"
        style={{ width: '100%', margin: '20px 0' }}
      >
        <select
          onChange={(e) => {
            hour = e.target.value
          }}
        >
          {candidate24.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            )
          })}
        </select>
        <p>:</p>
        <select
          onChange={(e) => {
            minute = e.target.value
          }}
        >
          {candidate60.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            )
          })}
        </select>
        <p>:</p>
        <select
          onChange={(e) => {
            second = e.target.value
          }}
        >
          {candidate60.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            )
          })}
        </select>
      </div>

      {/* 按钮 */}
      <div className="rowSpaceBetween" style={{ width: '100%' }}>
        <Button
          onClick={nowTime}
          Width="60px"
          Height="30px"
          button_text="现在"
        ></Button>
        <Button
          onClick={setTime}
          Width="60px"
          Height="30px"
          button_text="确认"
        />
      </div>
    </div>
  )
}

export default TimePicker

// export default class TimePicker extends Component {
//   constructor() {
//     super()
//     this.state = {
//       hour: 0,
//       minute: 0,
//       second: 0,
//     }

//     this.setTime = this.setTime.bind(this)
//   }

//   setTime(pars) {
//     console.log('按下按钮')
//     console.log('pars', pars)
//     let time = null
//     if (pars == 'now') {
//       let date = new Date()
//       let hour = date.getHours()
//       let minute = date.getMinutes()
//       let second = date.getSeconds()
//       time = hour + ':' + minute + ':' + second
//     } else
//       time = this.state.hour + ':' + this.state.minute + ':' + this.state.second

//     // 传到父组件
//     console.log('时间设置', time)
//     // this.props.sendTime(time)
//   }

//   render() {
//     let candidate60 = []
//     let candidate24 = []

//     for (let i = 0; i < 25; i++) {
//       candidate24.push(i < 10 ? '0' + i : i)
//     }
//     for (let i = 0; i < 61; i++) {
//       candidate60.push(i < 10 ? '0' + i : i)
//     }
//     return (
//       <div className="columnCenter" style={{ width: '150px' }}>
//         {/* 选择器 */}
//         <div
//           className="rowSpaceBetween"
//           style={{ width: '100%', margin: '20px 0' }}
//         >
//           <select
//             onChange={(e) => {
//               let hour = e.target.value
//               this.setState({
//                 hour: hour,
//               })
//             }}
//           >
//             {candidate24.map((item, index) => {
//               return (
//                 <option key={index} value={index}>
//                   {item}
//                 </option>
//               )
//             })}
//           </select>
//           <p>:</p>
//           <select
//             onChange={(e) => {
//               let minute = e.target.value
//               this.setState({
//                 minute: minute,
//               })
//             }}
//           >
//             {candidate60.map((item, index) => {
//               return (
//                 <option key={index} value={index}>
//                   {item}
//                 </option>
//               )
//             })}
//           </select>
//           <p>:</p>
//           <select
//             onChange={(e) => {
//               let second = e.target.value
//               this.setState({
//                 second: second,
//               })
//             }}
//           >
//             {candidate60.map((item, index) => {
//               return (
//                 <option key={index} value={index}>
//                   {item}
//                 </option>
//               )
//             })}
//           </select>
//         </div>

//         {/* 按钮 */}
//         <div className="rowSpaceBetween" style={{ width: '100%' }}>
//           <Button
//             onClick={this.setTime('now')}
//             Width="60px"
//             Height="30px"
//             button_text="现在"
//           ></Button>
//           <Button
//             onClick={this.setTime}
//             Width="60px"
//             Height="30px"
//             button_text="确认"
//           />
//         </div>
//       </div>
//     )
//   }
// }
