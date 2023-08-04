import React from 'react';
import styles from './HomeMenu.module.scss';

interface HomeMenuProps {
  selfTime: boolean;
  setPunctual: (punctual: boolean) => void;
  clockStyle: (style: number) => void;
  selfTimeButton: (selfTime: boolean) => void;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ selfTime, setPunctual, clockStyle, selfTimeButton }) => {
  // 开启整点报时
  function punctualChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPunctual(e.target.checked);
  }

  // 切换时钟类型
  function styleChange(e: React.ChangeEvent<HTMLInputElement>) {
    clockStyle(e.target.checked ? 1 : 0);
  }

  // 开启自定义时间
  function selfTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    selfTimeButton(e.target.checked);
  }

  // 左上角菜单按钮弹出的设置
  return (
    <div className={`${styles.menu} columnCenterStart`}>
      <div className={`${styles.item} rowCenter`}>
        <input className="switch" type="checkbox" id="punctual" value="punctual" onChange={punctualChange} />
        <label htmlFor="punctual" className={`${styles.text}`}>
          整点报时
        </label>
      </div>
      <div className={`${styles.item} rowCenter`}>
        <input className="switch" type="checkbox" id="clockStyle" value="Analog" defaultChecked={true} onChange={styleChange} />
        <label htmlFor="clockStyle" className={`${styles.text}`}>
          数字时钟/模拟时钟
        </label>
      </div>
      <div className={`${styles.item} rowCenter`}>
        <input className="switch" type="checkbox" id="selfTime" value="self" checked={selfTime} onChange={selfTimeChange} />
        <label htmlFor="selfTime" className={`${styles.text}`}>
          自定义时间
        </label>
      </div>
    </div>
  );
};

export default HomeMenu;
