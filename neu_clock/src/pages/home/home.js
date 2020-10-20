import React, { Component } from 'react'
import Clock from './components/clock'
import styles from './home.module.scss'

import TimePicker from './../../components/pickers/TimePicker.js'
import Nav from './../../components/header/Nav.js'
import FeaturesList from './components/featuresList'
import Footer from './../../components/footer/footer.js'
import music from './../../assets/VariousArtists.mp3'

export class home extends Component {
  constructor() {
    super()
    this.state = {
      menu: '', // 显示菜单
      features: 0, // 功能选择
      punctual: false, // 整点报时
      clockStyle: 1, // 时钟风格
      selfTime: false, // 自定义时间开关
      Time: '', // （自定义）时间
      pickerTimestamp: 0,
      route: 1, // 功能选择

      onTime:false // 整点
    }

    this.controlAudio = React.createRef()
  }

  componentDidUpdate() {
    // 整点报时
    if (this.state.onHour && this.state.punctual) {
      // TODO Safari无法用play()控制
      this.controlAudio.current.play()
    } 
  }

  render() {
    return (
      <div>
        <Nav
          clockStyle={(e) => this.setState({ clockStyle: e })}
          selfTimeButton={(e) => this.setState({ selfTime: e })}
          selfTime={this.state.selfTime}
          setPunctual={(e) => this.setState({ punctual: e })}
        />
        <div style={{ position: 'relative' }}>
          <div className={`${styles.home} columnCenter`}>
            <audio src={music} ref={this.controlAudio}></audio>

            {/* <TimePicker
              sendTime={(e) => this.setState({ Time: e })}
              timestamp={(e) => this.setState({ pickerTimestamp: e })}
              changeButton={(e) => this.setState({ selfTime: e })}
            />

            <Clock
              clockStyle={this.state.clockStyle}
              Time={this.state.Time}
              timestamp={this.state.pickerTimestamp}
            /> */}

            {this.state.selfTime ? (
              <TimePicker
                sendTime={(e) => this.setState({ Time: e })}
                timestamp={(e) => this.setState({ pickerTimestamp: e })}
                changeButton={(e) => this.setState({ selfTime: e })}
              />
            ) : (
                <Clock
                  clockStyle={this.state.clockStyle}
                  Time={this.state.Time}
                  timestamp={this.state.pickerTimestamp}
                  onHour={(e) => this.setState({onHour:e})}
                />
              )}
          </div>
          <FeaturesList
            route={this.state.route}
            routeTo={(e) => this.setState({ route: e })}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default home
