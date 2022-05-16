import React from "react";

const Spinner = () => {
  return (
    <div className=" fixed z-50 left-0 top-0 bg-primary/25 h-screen w-screen">
      <button className="btn btn-square loading absolute left-1/2 top-1/2"></button>
    </div>
  );
};

export default Spinner;
