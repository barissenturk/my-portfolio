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

  const lightStyle = `flex items-center  pl-[12px] pr-[20px] py-[11px]  ml-[12px] font-['Inter'] font-normal text-[18px] leading-[28px]  border  rounded-[6px]  transition-all duration-300  ${theme === "light" ? " border-[#3730A3] text-[#3730A3] bg-[#FFFFFF]  hover:bg-[#EEEBFF]" : " border-[#E1E1FF] text-[#E1E1FF] bg-[#383838] hover:bg-[#2E2E2E]"}`;

  const hireMeStyle = `px-[32px] py-[12px] font-['Inter'] font-normal text-[18px] leading-[28px] tracking-normal  rounded-[6px] ${theme === "light" ? "text-[#FFFFFF] bg-[#3730A3] " : " text-[#000000] bg-[#E1E1FF] "} `;

  return (
    <section id="hire-me" className="flex mt-[80px] ">
      <div className="flex flex-col">
        <div className="flex items-center  w-full">
          <div
            className={`w-[102px] h-[1px] bg-[#3730A3] mr-[10px] ${theme === "light" ? "bg-[#4338CA]" : "bg-[#B7AAFF]"}`}
          ></div>
          <span
            className={`font-['Inter'] font-medium text-[20px] leading-[28px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
          >
            Barış Şentürk
          </span>
        </div>
        <h1
          className={`font-['Inter']  font-bold text-[71px] leading-[72px] text[#1F2937] mt-[40px] ${theme === "light" ? "text[#1F2937]" : "text-[#AEBCCF]"}`}
        >
          {t.hero.title}
        </h1>
        <span
          className={`font-['Inter'] text-[#6B7280] font-normal text-[18px] leading-[28px] mt-[40px] ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
        >
          {t.hero.aboutMe}
        </span>
        <div className="mt-[40px] min-h-[52px] flex ">
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
      <div className="flex ml-[68px]">
        <img src={img} className="min-w-[476px] h-[375px] rounded-[18px]" />
      </div>
    </section>
  );
}
