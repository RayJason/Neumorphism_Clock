import React, { useState, useEffect, useRef, useCallback } from 'react';
import AnalogClock from './AnalogClock';
import DigitalClock from './DigitalClock';

interface ClockProps {
  clockStyle: number;
  Time: string;
  timestamp: number;
  onHour?: (e: boolean) => void;
}

const Clock: React.FC<ClockProps> = ({ clockStyle, Time, timestamp, onHour }) => {
  const [nowTime, setNowTime] = useState('0:0:0'); // 现在显示的时间
  const [setterTime, setSetterTime] = useState('0:0:0'); // 自定义的时间
  const [init, setInit] = useState(true); // 初始化时间

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // 计算显示的时间
  const calcTime = useCallback(() => {
    let hour = Number(setterTime.split(':')[0]);
    let minute = Number(setterTime.split(':')[1]);
    let second = Number(setterTime.split(':')[2]);

    // 计算现在相对的时间
    const nowTimestamp = Math.round(new Date().getTime() / 1000) + 28800000; // 当前时间戳(+8小时转换到东八区北京时间)
    const outTime = nowTimestamp - timestamp; // 相对时差

    const allSecond = second + outTime; // 秒
    const allMinute = minute * 60 + allSecond; // 截止到分的总秒

    second = allSecond % 60;
    minute = (minute + Math.floor(allSecond / 60)) % 60;
    hour = (hour + Math.floor(allMinute / 3600)) % 24;

    let onHourFlag = false; // 是否整点
    if (!init && minute === 0 && second === 0) {
      onHourFlag = true;
    } else {
      onHourFlag = false;
    }
    if (onHour) {
      onHour(onHourFlag);
    }

    setNowTime(hour + ':' + minute + ':' + second);
    setInit(false);
    timeoutRef.current = setTimeout(calcTime, 1000);
  }, [setterTime, timestamp, init, onHour]);

  // 在第一次渲染后调用
  useEffect(() => {
    calcTime();
  }, [calcTime]);

  useEffect(() => {
    if (Time && Time !== setterTime) {
      setSetterTime(Time);
      calcTime();
    }
  }, [Time, timestamp, calcTime, setterTime]);

  // 在组件从 DOM 中移除之前立刻被调用
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // 选择时钟风格
  const renderClock = () => {
    switch (clockStyle) {
      case 0:
        // 数字时钟
        return <DigitalClock Time={nowTime} />;
      case 1:
        // 模拟时钟
        return <AnalogClock Time={nowTime} />;
      default:
        // 默认模拟时钟
        return <AnalogClock Time={nowTime} />;
    }
  };

  return renderClock();
};

export default Clock;
