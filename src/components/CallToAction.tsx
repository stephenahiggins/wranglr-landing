import React from "react";
import { callToAction } from "../config/index.json";

const CallToAction = () => {
  return (
    <div
      id="call-to-action"
      className="mx-10 container xl:px-20 lg:px-12 sm:px-6 px-4 pt-20 pb-5 border-slate-20"
    >
      <div className="flex flex-col items-center justify-center border-slate-200 border-solid">
        <div className="relative isolate overflow-hidden w-full">
          <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Want to join the data revolution?
          </h2>

          <div className="mt-12 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href={callToAction.href}
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-secondary hover:text-white md:py-4 md:text-lg"
                target="_blank"
                rel="noreferrer"
              >
                Sign up to the wait   list
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
