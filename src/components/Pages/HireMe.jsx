import React from "react";
import img from "../../assets/img/sample-img.png";
import github from "../../assets/icons/github.png";
import githubDark from "../../assets/icons/github-dark.png";
import linkedin from "../../assets/icons/linkedin.png";
import linkedinDark from "../../assets/icons/linkedin-dark.png";

import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";

export default function HireMe() {
  const { theme } = useTheme();

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];

  const lightStyle = `flex items-center  px-2 md:pl-[12px] md:pr-[20px] py-2.25 md:py-[11px]  ml-[12px] font-['Inter'] font-normal text-[12px] md:text-[18px]  rounded-md border transition-all duration-300  ${theme === "light" ? " border-[#3730A3] text-[#3730A3] bg-[#FFFFFF]  hover:bg-[#EEEBFF]" : " border-[#E1E1FF] text-[#E1E1FF] bg-[#383838] hover:bg-[#2E2E2E]"}`;

  const hireMeStyle = `px-3 py-2  md:px-[32px] md:py-[12px] font-['Inter'] font-normal rounded-md
              text-[12px] md:text-[18px] leading-[28px] tracking-normal  ${theme === "light" ? "text-[#FFFFFF] bg-[#3730A3] " : " text-[#000000] bg-[#E1E1FF] "} `;

  return (
    <section
      id="hireMe"
      className="flex flex-col lg:flex-row items-center gap-1 mt-12 lg:mt-20 "
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <div
            className={`w-15 md:w-26 h-px bg-[#3730A3] mr-[10px] ${theme === "light" ? "bg-[#4338CA]" : "bg-[#B7AAFF]"}`}
          ></div>
          <span
            className={`font-['Inter'] font-medium text-[16px] md:text-[20px] leading-[28px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
          >
            Barış Şentürk
          </span>
        </div>
        <h1
          className={`font-['Inter']  font-bold text-[38px] md:text-[56px] lg:text-[71px]
            leading-tight
            mt-6 md:mt-10 ${theme === "light" ? "text[#1F2937]" : "text-[#AEBCCF]"}`}
        >
          {t.hero.title}
        </h1>
        <span
          className={`font-['Inter'] text-[#6B7280] font-normal  mt-6 md:mt-10
            text-[12px] md:text-[18px]
            leading-[180%] ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
        >
          {t.hero.aboutMe}
        </span>
        <div className=" mt-4 md:mt-10 flex items-center ">
          <a
            href="mailto:barissenturk4@gmail.com"
            target="_blank"
            className={`
        ${hireMeStyle}`}
          >
            {t.navigation.hireMe}
          </a>
          <a
            href="https://github.com/barissenturk"
            target="_blank"
            className={`
        ${lightStyle}`}
          >
            <img src={theme === "light" ? github : githubDark} />
            <p
              className="
               ml-[12px]
             "
            >
              Github
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/baris-senturk/"
            target="_blank"
            className={`
        ${lightStyle}`}
          >
            <img src={theme === "light" ? linkedin : linkedinDark} />
            <p
              className="
               ml-[12px]
             "
            ></p>
            Linkedin
          </a>
        </div>
      </div>
      <div className="flex md:ml-[68px] md:mr-0 my-6 mr-6 items-center ">
        <img
          src={img}
          className="md:min-w-[476px] md:h-[375px] rounded-[18px] shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.14)]"
        />
      </div>
    </section>
  );
}
