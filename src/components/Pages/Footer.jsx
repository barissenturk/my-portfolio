import React from "react";

import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";

export default function Footer() {
  const { theme } = useTheme();

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];
  return (
    <div className="md:w-[1140px] mx-auto">
      <h1
        className={` font-['Inter'] font-semibold text-[42px] leading-[125%] tracking-normal max-w-[540px]  ml-6 md:ml-0 pt-[40px] pb-[30px] md:pt-[85px] md:pb-[61px] ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}
      >
        {t.footer.title}
      </h1>
      <div className="flex justify-between md:pb-[130px] pb-[65px] px-2 items-center">
        <a
          href="mailto:barissenturk4@gmail.com"
          target="_blank"
          className={`font-['Inter'] font-medium text-[8px] md:text-[20px] leading-[100%] tracking-[0.05em]    ${theme === "light" ? "text-[#AF0C48]" : "text-[#BAB2E7]"}`}
        >
          <span>👉</span>
          <span className="underline ml-0.5">barissenturk4@gmail.com</span>
        </a>
        <div>
          <a
            href="https://github.com/barissenturk"
            target="_blank"
            className={`font-['Inter'] font-medium text-[8px] md:text-[18px] leading-[150%] tracking-[0.01em]   ${theme === "light" ? "text-[#0A0A14]" : "text-[#E1E1FF]"}`}
          >
            Personal Blog
          </a>
          <a
            href="https://github.com/barissenturk"
            target="_blank"
            className={`font-['Inter'] font-medium text-[8px] md:text-[18px] leading-[150%] tracking-[0.01em] mx-2  md:mx-[20px] ${theme === "light" ? "text-[#00AB6B]" : "text-[#17D18B]"}`}
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/baris-senturk/"
            target="_blank"
            className={`font-['Inter'] font-medium text-[8px] md:text-[18px] leading-[150%] tracking-[0.01em]   ${theme === "light" ? "text-[#0077B5]" : "text-[#0BA6F6]"}`}
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
