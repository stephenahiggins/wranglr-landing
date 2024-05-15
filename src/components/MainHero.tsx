import React from "react";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  return (
    <main className="w-full mx-10 max-w-7xl px-10 pb-0 flex flex-wrap-reverse md:flex-nowrap items-center">
      <div className="md:w-1/2">
        <div className="hero-text-left mt-4 md:mt-0 flex flex-col items-start justify-start col-gap-8 text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{mainHero.title}</span>{" "}
            <span className="block text-primary xl:inline">
              {mainHero.subtitle}
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mr-10 md:mt-5 md:text-xl lg:mx-0">
            {mainHero.description}
          </p>
          <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href={mainHero.primaryAction.href}
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-secondary hover:text-white md:py-4 md:text-lg"
                target="_blank"
                rel="noreferrer"
              >
                {mainHero.primaryAction.text}
              </a>
            </div>
            <div className="">
              <a
                href={mainHero.secondaryAction.href}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:text-white hover:bg-primary md:py-4 md:text-lg md:px-10"
              >
                {mainHero.secondaryAction.text}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 sm:pr-12 lg:pr-14">
        <img
          className="w-full object-contain"
          src={mainHero.img}
          alt="Wranglr screenshot"
        />
      </div>
    </main>
  );
};

export default MainHero;
