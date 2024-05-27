import React from 'react'
import './App.css';
import Carousel from './Carousel';
import Content from './Content';
import Service from './Service';
import Companyinfo from './Companyinfo';
import Whyus from './Whyus';
import FAQ from './FAQ';

import Reviews from './Reviews';


export default function Home() {
  return (
    <div>
         <Carousel />
        <Content />
        <Service />
        <Companyinfo />
        <Whyus />
        <FAQ />
        <Reviews/>
    </div>
  )
}
