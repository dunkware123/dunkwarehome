import React from "react";

const WorkCard = ({ icon, title, description, delay }) => {
  return (
    <div className="card bg-gray-800 shadow-4xl w-96 h-auto rounded-xl text-white py-8 px-4 mx-8 " data-aos="fade-left" data-aos-delay={delay}>
      <div>
        <span className="icon text-2xl  text-white flex justify-center mt-4">{icon}</span>
        <h1 className="text-lg text-center mt-4">{title}</h1>
        <p className="text-sm  mt-4 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
