import React from 'react'

import Button from './../../../components/button/button'
import styles from './../home.module.scss'
import clock from './../../../assets/clock.svg'
import shalou from './../../../assets/shalou.svg'
import daojishi from './../../../assets/daojishi.svg'
import naozhong from './../../../assets/naozhong.svg'

// 左下角功能列表
export default function featuresList(props) {
  const List = [
    {
      id: 1,
      feature: '时间',
      icon: clock,
    },
    // {
    //   id: 2,
    //   feature: '倒计时',
    //   icon: shalou,
    // },
    // {
    //   id: 3,
    //   feature: '计时',
    //   icon: daojishi,
    // },
    // {
    //   id: 4,
    //   feature: '闹钟',
    //   icon: naozhong,
    // },
  ]
  return (
    <div className={`${styles.features} rowCenter`}>
      {List.map((feature) => (
        <div
          key={feature.id}
          className="columnCenter"
          style={{ margin: '10px' }}
        >
          <p>{feature.feature}</p>
          <Button button_icon={feature.icon} id={feature.icon} onClick={() => props.routeTo(feature.id)} checked={props.route === feature.id} />
        </div>
      ))}
    </div>
  )
}
