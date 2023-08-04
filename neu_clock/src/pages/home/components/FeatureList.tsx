import React from 'react';
import Button from '../../../components/button/Button';
import styles from './../home.module.scss';
import clock from './../../../assets/icons/clock.svg';
// import shalou from './../../../assets/icons/shalou.svg';
// import daojishi from './../../../assets/icons/daojishi.svg';
// import naozhong from './../../../assets/icons/naozhong.svg';

interface Feature {
  id: number;
  feature: string;
  icon: string;
}

interface FeaturesListProps {
  route: number;
  routeTo: (id: number) => void;
}

const FeaturesList: React.FC<FeaturesListProps> = ({ route, routeTo }) => {
  const List: Feature[] = [
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
  ];

  return (
    <div className={`${styles.features} rowCenter`}>
      {List.map((feature) => (
        <div key={feature.id} className="columnCenter" style={{ margin: '10px' }}>
          <p>{feature.feature}</p>
          <Button button_icon={feature.icon} id={feature.icon} onClick={() => routeTo(feature.id)} checked={route === feature.id} />
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
