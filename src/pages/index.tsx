import React from "react";

import About from "../components/About";
import Analytics from "../components/Analytics";
import Footer from "../components/Footer";
import HorizontalRule from "../components/HorizontalRule";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import Navigation from "../components/Navigation";
import Product from "../components/Product";

const App = () => {
  return (
    <div className="bg-background grid gap-y-16 overflow-hidden justify-items-center">
      <div className="relative bg-background w-full">
        <div className="max-w-7xl mx-auto">
          <Navigation />
        </div>
      </div>
      <MainHero />
      <LazyShow>
        <>
          <HorizontalRule />
          <Product />
          <HorizontalRule />
        </>
      </LazyShow>
      {/* Uncomment and modify this section if Features component is added later
      <LazyShow>
        <>
          <Features />
          <HorizontalRule />
        </>
      </LazyShow>
      */}
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
