import React from 'react';
import styles from './AnalogClock.module.scss';

interface DigitalClockProps {
  Time: string;
  Width?: string;
  Height?: string;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ Time, Width = '49vw', Height = '21vw' }) => {
  // 更新数字时钟
  const renderClock = () => {
    const hour = Number(Time.split(':')[0]);
    const minute = Number(Time.split(':')[1]);
    const second = Number(Time.split(':')[2]);

    // 显示的时间
    const time =
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second);

    return time;
  };

  return (
    <div
      className={`${styles.DigitalClock} columnCenter `}
      style={{
        width: Width,
        height: Height,
      }}
    >
      <div className={styles.DigitalClockTime}>{renderClock()}</div>
    </div>
  );
};

export default DigitalClock;
