import React from "react";

function Loading() {
  return (
    <div className="flex gap-x-5 justify-center items-center w-full h-screen bg-slate-50">
      <img
        className=" w-24 animate-spin"
        src="/favicon.ico"
        alt="loader-logo"
      />
      <h1 className=" text-5xl sm:text-6xl animate-pulse">Loading</h1>
    </div>
  );
}

export default Loading;
