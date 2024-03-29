import React from "react";

const TheHeader = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-semibold text-5xl">SANJEEV U</h1>
        <p className="w-[600px] pt-4 text-gray-300">
          Software Engineering Graduate, seeking an entry-level position as a
          Web Developer to apply and enhance my skills in front-end and back-end
          development. A quick learner with a passion for creating dynamic and
          user-friendly websites.
        </p>
      </div>
      <div className="font-medium space-y-1 flex flex-col">
        <a href="mailto:sanjeevchandru22@gmail" className="hover:text-yellow-400">sanjeevchandru22@gmail</a>
        <a href="https://github.com/san1234100" target="blank" className="hover:text-yellow-400">https://github.com/san1234100</a>
        <a href="https://www.linkedin.com/in/sanjeev-u" target="blank" className="hover:text-yellow-400">www.linkedin.com/in/sanjeev-u</a>
      </div>
    </div>
  );
};

export default TheHeader;
