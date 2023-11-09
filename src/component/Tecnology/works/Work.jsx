import React, { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

import WorkCard from "./WorkCard";

const Work = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typedOptions = {
      strings: ["How it works?"],
      typeSpeed: 200,
      backSpeed: 300,
      startDelay: 400,
      backDelay: 700,
      loop: true,
    };

    new Typed("#typed-output", typedOptions);

    // Initialize AOS
    AOS.init();
  }, []);

  const info = [
    {
      sl: 1,
      icon: <i className="fa-solid fa-award"></i>,
      title: "Empowering AI and Machine Learning with Dunkstream",
      description: "Dunkstream revolutionizes the landscape of AI and machine learning development by providing a powerful solution for data enrichment and generation. Traditional machine learning models heavily rely on the quality and richness of the data they are trained on. Dunkstream steps in to supercharge this process.",
    },
    {
      sl: 2,
      icon: <i className="fa-solid fa-chart-line"></i>, // Different icon
      title: "Deriving Rich Data Sets",
      description: "Dunkstream takes raw input data streams, such as real-time market data, and employs advanced techniques to derive derivative data sets. These derivative data sets are meticulously crafted to extract every ounce of valuable information from the original feed. By doing so, Dunkstream significantly enhances the depth and breadth of available data, providing a more comprehensive foundation for AI and machine learning algorithms.",
    },
    {
      sl: 3,
      icon: <i className="fa-solid fa-clock"></i>, // Different icon
      title: "Accelerating Development",
      description: "In the fast-paced world of AI development, time is of the essence. Dunkstream lightens the load on AI developers and machine learning engineers by taking on the crucial task of data generation. This means that your team can focus their efforts on fine-tuning models, optimizing algorithms, and innovating, rather than spending precious time wrangling and preparing data.",
    },
    {
      sl: 4,
      icon: <i className="fa-solid fa-cloud-upload"></i>, // Different icon
      title: "Streamlined Integration",
      description: "Dunkstream seamlessly integrates into existing workflows and platforms, including popular cloud marketplaces. This ensures that the enriched data sets are readily accessible and compatible with a wide range of AI and ML tools and frameworks.",
    },
    {
      sl: 5,
      icon: <i className="fa-solid fa-chart-pie"></i>, // Different icon
      title: "Enabling Innovation",
      description: "By leveraging Dunkstream, AI developers and machine learning engineers gain access to a treasure trove of high-quality, pre-processed data. This enables them to explore new avenues of research, develop more accurate models, and unlock insights that may have otherwise remained hidden in the raw data",
    },
    {
      sl: 6,
      icon: <i className="fa-solid fa-cogs"></i>, // Different icon
      title: "Data-Driven Decisions",
      description: "With Dunkstream at your side, you can make more informed and confident decisions. The enriched data sets empower your AI and machine learning models to achieve higher levels of accuracy, leading to more reliable insights and predictions.",
    },
    {
      sl: 7,
      icon: <i className="fa-solid fa-check-circle"></i>, // Different icon
      title: "Conclusion",
      description: "Dunkstream's expertise in data enrichment and generation transforms the way AI and machine learning projects are executed. By providing richer data sets derived from input data, we empower developers to focus on what they do best - building intelligent, innovative solutions.",
    },
  ];
  
    // Add more items here
  

  return (
    <div>
      <section className="bg-black pb-44 pt-24 flex justify-center">
        <div>
          <div className="flex justify-center">
            <div>
              <h1 className="text-center text-6xl text-green-600">
                <span id="typed-output"></span>
              </h1>
              {/* <p className="text-lg text-center mt-8 text-white lg:w-[700px] w-full" data-aos="fade-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus in dignissimos ad ratione rerum? Doloremque!
              </p> */}
            </div>
          </div>
          <div className="mt-16 m-4 lg:mx-32 flex flex-wrap justify-center gap-8">
            {info.map((item, index) => (
              <WorkCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
