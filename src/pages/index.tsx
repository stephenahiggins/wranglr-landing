import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import HorizontalRule from '../components/HorizontalRule';
import Product from '../components/Product';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-10">
          <div
            className={`relative z-10 bg-background`}
          >
            <Header />
          </div>
        </div>
      </div>
      <MainHero />
      <HorizontalRule />
      <LazyShow>
        <>
          <Product />
          <HorizontalRule />
        </>
      </LazyShow>
      {/* <LazyShow>
        <>
          <Features />
          <HorizontalRule />
        </>
      </LazyShow> */}
      <LazyShow>
        <>
          <About />
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
