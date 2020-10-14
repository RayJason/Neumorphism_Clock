import React from 'react'
import styles from './HomeMenu.module.scss'
// import Toast from './../../../components/toast/toast'

export default function HomeMenu(props) {

  // 开启整点报时
  function punctualChange(e) {
    if (e.target.checked) {
      console.log('开启整点报时')
      // Toast.info('开启整点报时')
    } else {
      console.log('关闭整点报时')
    }
  }

  // 切换时钟类型
  function styleChange(e) {
    if (e.target.checked) {
      props.clockStyle(1)
    } else {
      props.clockStyle(0)
    }
  }

  // 开启自定义时间
  function selfTimeChange(e) {
    if (e.target.checked) {
      props.selfTimeButton(true)
    } else {
      props.selfTimeButton(false)
    }
  }

  // 左上角菜单按钮弹出的设置
  return (
    <div className={`${styles.menu} columnCenterStart`}>
      <div className={`${styles.item} rowCenter`}>
        <input
          className="switch"
          type="checkbox"
          id="punctual"
          value="punctual"
          onChange={punctualChange}
        />
        <label htmlFor="punctual" className={`${styles.text}`}>
          整点报时
        </label>
      </div>
      <div className={`${styles.item} rowCenter`}>
        <input
          className="switch"
          type="checkbox"
          id="clockStyle"
          value="Analog"
          defaultChecked={true}
          onChange={styleChange}
        />
        <label htmlFor="clockStyle" className={`${styles.text}`}>
          数字时钟/模拟时钟
        </label>
      </div>
      <div className={`${styles.item} rowCenter`}>
        <input
          className="switch"
          type="checkbox"
          id="selfTime"
          value="self"
          checked={props.selfTime}
          onChange={selfTimeChange}
        />
        <label htmlFor="selfTime" className={`${styles.text}`}>
          自定义时间
        </label>
      </div>
    </div>
  )
}
