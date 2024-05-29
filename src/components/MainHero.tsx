import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  const [videoLoading, setVideoLoading] = useState(false);

  useEffect(() => {
    setVideoLoading(true);
  }, [ReactPlayer]);

  return (
    <main className="w-full mx-10 max-w-7xl px-10 pb-0 flex flex-wrap-reverse md:flex-nowrap items-center">
      <div className="md:w-1/2 pr-4">
        <div className="hero-text-left mt-4 md:mt-0 flex flex-col items-start justify-start col-gap-8 text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{mainHero.title}</span>{" "}
            <span className="block text-primary xl:inline">{mainHero.subtitle}</span>
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
            <div className="flex items-center justify-center ml-4 px-5">
              <a
                href={mainHero.secondaryAction.href}
                className="text-base font-medium text-secondary md:text-lg"
              >
                {mainHero.secondaryAction.text}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="player-wrapper md:w-1/2 sm:pl-10 sm:display-contents md:display-block relative">
        {!videoLoading ? (
          <>
            <img src={mainHero.videoPlaceholderUrl} alt="Wranglr logo" className="w-full h-full" />
            <img
              src="/assets/images/waiting-blobs.gif"
              alt="Loading..."
              className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[75px]"
            />
          </>
        ) : (
          <>
            <ReactPlayer
              className="react-player"
              url={mainHero.videoUrl}
              playing={true}
              controls={true}
              // pip={true}
              light={
                <img
                  src={mainHero.videoPlaceholderUrl}
                  alt="Wranglr logo"
                  className="w-full h-full"
                />
              }
              width="100%"
              height="100%"
            />
          </>
        )}
      </div>
    </main>
  );
};

export default MainHero;
