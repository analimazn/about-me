import React from 'react';
import { Footer } from './components/footer'
import { Header } from  './components/header'
import { ProfilePhoto } from './components/profile-photo'
import { ProfileInfo } from './components/profile-info'
import './assets/css/timeline.css';
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
