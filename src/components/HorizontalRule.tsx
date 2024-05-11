import React from "react";

const HorizontalRule = () => (
  <div className="flex justify-center">
    <div className="w-full mb-2 flex justify-center">  {/* Ensures the inner div is centered */}
      <div className="w-1/2 h-1 bg-primary opacity-25 rounded-t mb-10"></div>  {/* This is your HR */}
    </div>
  </div>
);

export default HorizontalRule;
