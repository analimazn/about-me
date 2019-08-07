import React from 'react';
import { Footer } from './components/Footer'
import { Header } from  './components/Header'
import { ProfilePhoto } from './components/ProfilePhoto'
import { ProfileInfo } from './components/ProfileInfo'
import './assets/css/timeline.css';
import './assets/css/header.css';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProfilePhoto></ProfilePhoto>
      <ProfileInfo></ProfileInfo>
      <Footer></Footer>
    </div>
  );
}

export default App;
