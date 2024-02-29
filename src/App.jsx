import './App.css';
// import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
  return (
    <>
    
      <Header subTitle="Little sub"/>
      <Gallery subTitle="Little sub"/>
      <Footer authorName="John Thomas Gause III"/>
        
    </>
  )
}

export default App


