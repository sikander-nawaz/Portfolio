import React from "react";

const Skill = ({ name }) => {
  return (
    <div className="flex items-center justify-start rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:bg-transparent sm:dark:bg-transparent sm:text-dark sm:dark:text-light sm:font-bold">
      <span>➾</span>&nbsp; {name}
    </div>
  );
};

const MobilesSkills = () => {
  return (
    <div className="flex items-center justify-between 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:pt-10">
      <div>
        <Skill name={"Java (DSA)"} />
        <Skill name={"JavaScript ES6+"} />
        <Skill name={"CSS"} />
        <Skill name={"Bootstrap CSS"} />
        <Skill name={"Frame_Motion"} />
        <Skill name={"React_JS"} />
        <Skill name={"Next_JS"} />
        <Skill name={"Express_JS"} />
        <Skill name={"Firebase"} />
        <Skill name={"Git"} />
        <Skill name={"Rest APIs"} />
      </div>

      <div>
        <Skill name={"Python"} />
        <Skill name={"HTML"} />
        <Skill name={"SCSS, SAAS"} />
        <Skill name={"Tailwind CSS"} />
        <Skill name={"shadcn/ui"} />
        <Skill name={"React_Native"} />
        <Skill name={"Node_JS"} />
        <Skill name={"Mongo_DB"} />
        <Skill name={"Firestore"} />
        <Skill name={"GitHub"} />
        <Skill name={"Postman API"} />
      </div>
    </div>
  );
};

export default MobilesSkills;
