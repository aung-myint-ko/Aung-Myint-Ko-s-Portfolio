import React from "react";

function Progress({ title, done }) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="mt-2">
      <div className=" flex justify-between items-center px-1">
        <p className=" text-lg">{title}</p>
        <p className=" text-lg">{done}%</p>
      </div>

      <div className="progress relative h-5 w-full rounded-xl bg-gray-300">
        <div className="progress-done" style={style}></div>
      </div>
    </div>
  );
}

export default Progress;
