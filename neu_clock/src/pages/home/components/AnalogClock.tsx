import React from 'react';
import styles from './AnalogClock.module.scss';

interface AnalogClockProps {
  Time: string;
  Width?: string;
  Height?: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ Time, Width = '30vw', Height = '30vw' }) => {
  let hourRotate = 0; // 时针角度
  let minuteRotate = 0; // 分针角度
  let secondRotate = 0; // 秒针角度

  let time = ''; // 数字时钟

  const renderClock = () => {
    const hour = Number(Time.split(':')[0]);
    const minute = Number(Time.split(':')[1]);
    const second = Number(Time.split(':')[2]);

    hourRotate = (hour % 12) * 30 + minute / 2;
    minuteRotate = minute * 6 + second / 10;
    secondRotate = second * 6;

    // 显示的时间
    time =
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second);
  };

  renderClock();

  return (
    <div className={`columnCenter`}>
      <div
        className={`neuShadow_border_clock rowCenter ${styles.AnalogClock} ${styles.lineTransition}`}
        style={{
          width: Width,
          height: Height,
        }}
      >
        {/* 时针 */}
        <div
          className={`${styles.hourLine} ${styles.lineTransition}`}
          style={{
            transform: `translateY(-50%) rotateZ(${hourRotate}deg)`,
          }}
        ></div>

        {/* 秒针 */}
        <div
          className={`${styles.secondLine} ${styles.lineTransition} `}
          style={{
            transform: `translateY(-50%) rotateZ(${secondRotate}deg)`,
          }}
        ></div>
        {/* 分针 */}
        <div
          className={`${styles.minuteLine} ${styles.lineTransition} `}
          style={{
            transform: `translateY(-50%) rotateZ(${minuteRotate}deg)`,
          }}
        ></div>

        <div className={styles.dot}></div>
      </div>
      <div className={styles.time}>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default AnalogClock;
