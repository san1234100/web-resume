import React from "react";

const Education = () => {
  return (
    <div className="py-16 flex justify-between">
      <div>
        <h4 className="font-bold text-xl text-yellow-400">EDUCATION</h4>
        <div className="mt-3 space-y-2">
          <p className="font-semibold text-lg">
            Sethu Bhaskara Matric Hr Sec School, Chennai— 10th
          </p>
          <p className="text-gray-200">Year of Passing -2017</p>
          <p className="text-gray-200">Percentage-87%.</p>
        </div>
        <div className="mt-4 space-y-2">
          <p className="font-semibold text-lg">
            Sethu Bhaskara Matric Hr Sec School, Chennai— 12th
          </p>
          <p className="text-gray-200">Year of Passing -2019</p>
          <p className="text-gray-200">Percentage-71%.</p>
        </div>
        <div className="mt-4 space-y-2">
          <p className="font-semibold text-lg">
            Prince Shri Venkateshwara Padmavathy Engineering College, Chennai
            —B.E CSE
          </p>
          <p className="text-gray-200">Year of Passing -2023</p>
          <p className="text-gray-200">Percentage-85%.</p>
        </div>
      </div>
      {/* skills */}
      <div className="flex-1 ps-24">
        <h4 className="font-bold text-xl text-yellow-400">Skills</h4>
        <ul className="text-[17px] pt-4 space-y-1">
          <li>SQL</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Tailwindcss</li>
          <li>Javascript</li>
          <li>React Js</li>
          <li>GIT and GITHUB</li>
          <li>Object Oriented Programming</li>
          <li>Communication skills</li>
          <li> Teamwork skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
