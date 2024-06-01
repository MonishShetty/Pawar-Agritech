import React from 'react'
import '../styles/App.css';
import Carousel from '../components/Carousel';
import Content from '../components/Content';
import Service from '../components/Service';
import Companyinfo from '../components/Companyinfo';
import Whyus from '../components/Whyus';
import FAQ from '../components/FAQ';

import Reviews from '../components/Reviews';


export default function Home() {
  return (
    <>
        <Carousel />
        <Content />
        <Service />
        <Companyinfo />
        <Whyus />
        <FAQ />
        <Reviews/>
    </>
  )
}
