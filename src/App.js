import React from 'react';
import { Footer } from './components/Footer'
import { Header } from  './components/Header'
import { ProfilePhoto } from './components/ProfilePhoto'
import { ProfileInfo } from './components/ProfileInfo'

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
