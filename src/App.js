
import './App.css';

import React from 'react';
import Card from './component/Card';
import Header from './component/Header'
import Section from './component/Section';

function App() {
  return (
  <div className='flex flex-col'>
    <Header/>
    <Section/>
   <div className='flex flex-row gap-4 m-5'>
    <Card title="Himalayan Green Tea 60s Classic" image="th1" id="alapa" price="300" discount="0"/>
    <Card title="Himalayan Green Tea 60s Classic" id="kullt"  image="th2" price="300" discount="0"/>
    <Card title="Lipton Green Tea Honey Lemon 100gm" id="pajalfa"  image="th3" price="130" discount="0"/>
    <Card title="Recipo_party_Popper" id="1"  image="th4" price="1"  discount="0"/>
   </div>
   </div>
  );
}

export default App;