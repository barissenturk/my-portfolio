import React from "react";

import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";

import pizza from "../../assets/img/pizza.png";
import movie from "../../assets/img/movie.png";
import journey from "../../assets/img/Journey.png";
export default function Projects() {
  const { theme } = useTheme();

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];

  const projectImages = {
    pizza,
    movie,
    journey,
  };

  const lightStyle = ` mr-[6px] px-[14px] py-[2px] font-['Inter'] font-normal text-[12px] md:text-[14px]  rounded-sm border transition-all duration-300  ${theme === "light" ? " border-[#3730A3] text-[#3730A3] bg-[#FFFFFF]  hover:bg-[#EEEBFF]" : " border-[#8F88FF] text-[#8F88FF] bg-[#383838] hover:bg-[#2E2E2E]"}`;

  return (
    <section id="projects" className="md:pb-[139px]">
      <h1
        className={`font-['Inter'] font-semibold  text-[28px] md:text-[48px] leading-[48px] font-semibold  md:py-[39px] py-5   ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}
      >
        Projects
      </h1>
      <div className="flex justify-between flex-col md:flex-row">
        {t.projects.map((item) => {
          return (
            <div key={item.id} className="max-w-[300px] md:pb-0 pb-4">
              <img
                src={projectImages[item.image]}
                className="w-[300px] h-[180px]"
              />
              <h2
                className={`font-['Inter'] font-medium text-[22px] md:text-[30px] leading-[28px] font-medium md:my-[18px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
              >
                {item.title}
              </h2>
              <p
                className={`h-[70px] font-['Inter'] font-normal text-[12px] md:text-[14px]  leading-[125%] tracking-normal   ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
              >
                {item.description}
              </p>
              <div className="flex my-[18px]">
                {item.technologies.map((tech) => {
                  return (
                    <div
                      key={tech}
                      className={`
        ${lightStyle}`}
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between">
                <a
                  href={item.github}
                  target="_blank"
                  className={`font-['Inter'] font-medium text-[16px] leading-[16px] tracking-normal  underline  ${theme === "light" ? "text-[#3730A3]" : "text-[#E1E1FF]"}`}
                >
                  Github
                </a>
                <a
                  href={item.live}
                  target="_blank"
                  className={`font-['Inter'] font-medium text-[16px] leading-[16px] tracking-normal  underline  ${theme === "light" ? "text-[#3730A3]" : "text-[#E1E1FF]"}`}
                >
                  View Site
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
