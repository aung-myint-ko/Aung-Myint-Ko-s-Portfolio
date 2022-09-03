import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-50">
      <img className=" w-24 animate-spin" src="/images/Logo.png" alt="" />
      <h1 className=" text-5xl sm:text-6xl animate-pulse ">Loading</h1>
      {/* <div class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div> */}
    </div>
  );
}

export default Loading;
