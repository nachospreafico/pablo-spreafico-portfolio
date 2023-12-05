import React from "react";

const ProjectItem = ({ number }) => {
  return (
    <div className="cursor-pointer flex flex-col gap-1 relative w-fit">
      <div className="z-10 hover:bg-gray-100/40 bg-transparent duration-200 absolute top-0 left-0 w-full h-full"></div>
      <img
        src="https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&w=330&h=258&dpr=1"
        className="object-cover"
      ></img>
      <h2 className="text-[14px]">Project #{number}</h2>
      <p className="font-bold text-[12px] text-[#999]">{2023 - number + 1}</p>
    </div>
  );
};

export default ProjectItem;
