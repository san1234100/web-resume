import React from "react";

const Projects = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="font-bold text-xl text-yellow-400">PROJECTS</h4>
        <div className="mt-2">
            <h4 className="text-lg w-[600px]"><span className="text-yellow-400 font-semibold">Courier pickup application(CRUD)</span>—Built using Html, Tailwindcss, Javascript and Local storage.</h4>
            <p className="w-[600px] pt-1 text-gray-300">
            Developed an responsive design with Tailwindcss and ability to get courier request from the user and store it on the local storage and display the courier requests on UI and also allows user to delete the courier request.
            </p>
        </div>
        <div className="mt-4">
            <h4 className="text-lg w-[600px]"><span className="text-yellow-400 font-semibold">Online Restaurant Website</span>—Built using Html and Tailwindcss</h4>
            <p className="w-[600px] pt-1 text-gray-300">
            Developed an Online Restaurant Website using HTML and CSS. Focused on responsive design, I ensured optimal user experience across devices. My intuitive user interface design showcased a balance of simplicity and visual appeal.
            </p>
        </div>
      </div>
      <div className="flex-1 ps-32">
      <h4 className="font-bold text-xl text-yellow-400">Languages</h4>
      <ul className="mt-2 text-lg">
        <li>Tamil</li>
        <li>English</li>
      </ul>
      <h4 className="font-bold text-xl text-yellow-400 mt-10">Area of Interest</h4>
      <ul className="mt-2 text-lg">
        <li>Web Development</li>
        <li>Web Design</li>
      </ul>
      </div>
    </div>
  );
};

export default Projects;
