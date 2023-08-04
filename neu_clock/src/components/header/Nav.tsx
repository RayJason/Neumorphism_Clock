import React, { useState } from 'react';
import styles from './Nav.module.scss';
import Button from '../button/Button'; // 引入按钮组件
import HomeMenu from './../../pages/home/components/HomeMenu';
import githubIcon from './../../assets/icons/github.svg';
import homeIcon from './../../assets/icons/home.svg';

// Define props type
type NavProps = {
  selfTime: boolean; // 是否自定义时间
  clockStyle: (e: number) => void; // 时钟类型
  selfTimeButton: (e: boolean) => void; // 开启自定义时间
  setPunctual: (e: boolean) => void; // 开启整点报时
}

/* 顶部导航栏 */
const Nav: React.FC<NavProps> = (props) => {
  const [switchMenu, setSwitchMenu] = useState(false);
  const [, setPunctual] = useState(false); // 整点报时

  const SwitchMenu = () => {
    setSwitchMenu(!switchMenu);
  }

  const Menu_icon = () => {
    return (
      <div>
        <input
          type="checkbox"
          id="burgerToggle"
          className={`${styles.burgerToggle}`}
          onChange={SwitchMenu}
        />
        <label htmlFor="burgerToggle" className={`${styles.burgerMenu}`}>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line}`}></div>
        </label>
      </div>
    )
  }

  return (
    <nav className={`rowSpaceBetween ${styles.nav}`}>
      <p className={styles.title}>Neumorphism Clock</p>
      {/* 菜单 */}
      <Button
        button_text={Menu_icon()}
        id="Menu"
        checked={switchMenu}
        Style="out"
      />
      {/* 标题右侧按钮 */}
      <div className="rowCenter">
        {/* Github */}
        <Button
          button_icon={githubIcon}
          Style="out"
          link="https://github.com/RayJason"
          style={{ margin: '0 20px' }}
        />
        {/* 官网 */}
        <Button
          button_icon={homeIcon}
          Style="out"
          link="https://rayjason.cn"
        />
      </div>
      {/* 菜单list */}
      {switchMenu && (
        <div style={{ position: 'absolute', left: '20px', bottom: '-200%' }}>
          <HomeMenu
            clockStyle={props.clockStyle}
            selfTimeButton={props.selfTimeButton}
            selfTime={props.selfTime}
            setPunctual={setPunctual}
          />
        </div>
      )}
    </nav>
  )
}

export default Nav;
