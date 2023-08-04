import React, { useState } from 'react';
import Button from '../button/Button';

type TimePickerProps = {
  sendTime: (time: string) => void;
  changeButton: (change: boolean) => void;
  timestamp: (time: number) => void;
};

const TimePicker: React.FC<TimePickerProps> = ({ sendTime, changeButton, timestamp }) => {
  // 自选时间
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("30");
  const [second, setSecond] = useState("30");

  const candidate60 = [];
  const candidate24 = [];

  for (let i = 0; i < 24; i++) {
    candidate24.push(i < 10 ? '0' + i : i.toString());
  }
  for (let i = 0; i < 60; i++) {
    candidate60.push(i < 10 ? '0' + i : i.toString());
  }

  // 现在时间
  function nowTime() {
    const date = new Date();
    const nHour = date.getHours();
    const nMinute = date.getMinutes();
    const nSecond = date.getSeconds();
    const time = nHour + ':' + nMinute + ':' + nSecond;

    // 传到父组件
    console.log('TimePicker时间设置', time);
    sendTime(time);
    changeButton(false);
    timestamp(Math.round(new Date().getTime() / 1000) + 28800000);
  }

  // 设置自定义时间
  function setTime() {
    const time = hour + ':' + minute + ':' + second;

    // 传到父组件
    console.log('TimePicker时间设置', time);
    sendTime(time);
    changeButton(false);
    timestamp(Math.round(new Date().getTime() / 1000) + 28800000);
  }

  return (
    <div className="columnCenter" style={{ width: '150px' }}>
      {/* 选择器 */}
      <div
        className="rowSpaceBetween"
        style={{ width: '100%', margin: '20px 0' }}
      >
        <select
          defaultValue={hour}
          onChange={(e) => setHour(e.target.value)}
        >
          {candidate24.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
        <p>:</p>
        <select
          defaultValue={minute}
          onChange={(e) => setMinute(e.target.value)}
        >
          {candidate60.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
        <p>:</p>
        <select
          defaultValue={second}
          onChange={(e) => setSecond(e.target.value)}
        >
          {candidate60.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* 按钮 */}
      <div className="rowSpaceBetween" style={{ width: '100%' }}>
        <Button
          onClick={nowTime}
          Width="60px"
          Height="30px"
          button_text="现在"
        />
        <Button
          onClick={setTime}
          Width="60px"
          Height="30px"
          button_text="确认"
        />
      </div>
    </div>
  );
}

export default TimePicker;
