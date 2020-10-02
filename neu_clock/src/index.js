import React from 'react';
import ReactDOM from 'react-dom';
import './components/globalSCSS/App.scss' // 引入全局样式
import Nav from './components/header/Nav.js';
import Home from './pages/home/home.js'
import Footer from './components/footer/footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
