import { useState, useRef, useEffect } from 'react';
import Clock from './components/Clock';
import styles from './Home.module.scss';

import TimePicker from './../../components/pickers/TimePicker';
import Nav from './../../components/header/Nav';
import FeaturesList from './components/FeatureList';
import Footer from './../../components/footer/Footer';
import music from './../../assets/VariousArtists.mp3';

const Home = () => {
  // const [menu, setMenu] = useState<string>('');
  // const [features, setFeatures] = useState<number>(0);
  const [punctual, setPunctual] = useState<boolean>(false);
  const [clockStyle, setClockStyle] = useState<number>(1);
  const [selfTime, setSelfTime] = useState<boolean>(false);
  const [Time, setTime] = useState<string>('');
  const [pickerTimestamp, setPickerTimestamp] = useState<number>(0);
  const [route, setRoute] = useState<number>(1);
  const [onHour, setOnHour] = useState<boolean>(false);

  const controlAudio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (onHour && punctual && controlAudio.current) {
      controlAudio.current.play();
    }
  }, [onHour, punctual]);

  return (
    <div>
      <Nav
        clockStyle={(e: number) => setClockStyle(e)}
        selfTimeButton={(e: boolean) => setSelfTime(e)}
        selfTime={selfTime}
        setPunctual={(e: boolean) => setPunctual(e)}
      />
      <div style={{ position: 'relative' }}>
        <div className={`${styles.home} columnCenter`}>
          <audio src={music} ref={controlAudio}></audio>

          {selfTime ? (
            <TimePicker
              sendTime={(e: string) => setTime(e)}
              timestamp={(e: number) => setPickerTimestamp(e)}
              changeButton={(e: boolean) => setSelfTime(e)}
            />
          ) : (
            <Clock
              clockStyle={clockStyle}
              Time={Time}
              timestamp={pickerTimestamp}
              onHour={(e: boolean) => setOnHour(e)}
            />
          )}
        </div>
        <FeaturesList route={route} routeTo={(e: number) => setRoute(e)} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
