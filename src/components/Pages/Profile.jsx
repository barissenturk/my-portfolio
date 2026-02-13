import React from "react";

import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";

export default function Profile() {
  const { theme } = useTheme();

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];

  const aboutMeTitle = `w-[155px] font-['Inter'] font-semibold text-[18px] leading-[200%] tracking-[0.01em] ${theme === "light" ? "text-[#000000]" : "text-[#FFFFFF]"}`;

  const aboutMe = `ml-[24px] w-[232px] font-['Inter'] font-[300] text-[18px] leading-[200%] tracking-[0.01em] ${theme === "light" ? "text-[#000000]" : "text-[#FFFFFF]"}`;
  return (
    <section
      id="profile"
      className="border-t border-b border-[#BAB2E7] mb-[42px]"
    >
      <h1
        className={`font-['Inter'] font-normal text-[48px] leading-[48px] font-semibold pb-[39px] pt-[39px]  ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}
      >
        Profile
      </h1>
      <div className="flex">
        <div className="flex flex-col w-[412px] mb-[42px]">
          <h2
            className={`font-['Inter'] font-normal text-[30px] leading-[28px] font-medium mb-[28px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
          >
            Profile
          </h2>
          <div className="flex flex-col ">
            <div className="flex items-start">
              <span
                className={`
        ${aboutMeTitle}`}
              >
                Doğum tarihi
              </span>
              <span
                className={`
        ${aboutMe}`}
              >
                24.03.1996
              </span>
            </div>

            <div className="flex">
              <span
                className={`
        ${aboutMeTitle}`}
              >
                İkamet Şehri
              </span>
              <span
                className={`
        ${aboutMe}`}
              >
                Ankara
              </span>
            </div>

            <div className="flex item-center">
              <span
                className={`
        ${aboutMeTitle}`}
              >
                Eğitim Durumu
              </span>
              <span
                className={`
        ${aboutMe}`}
              >
                Hacettepe Ünv. Biyoloji <br />
                Lisans, 2016
              </span>
            </div>

            <div className="flex">
              <span
                className={`
        ${aboutMeTitle}`}
              >
                Tercih Ettiği Rol
              </span>
              <span
                className={`
        ${aboutMe}`}
              >
                Frontend, UI
              </span>
            </div>
          </div>
        </div>
        <div className="flex max-w-[576px] ml-[57px] flex-col">
          <h2 className="text-[24px] font-semibold text-[#4338CA] mb-6">
            About Me
          </h2>

          <p className="text-[#6B7280] mb-6 leading-[26px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut,
            odit laborum aliquam voluptatum nisi mollitia.
          </p>

          <p className="text-[#6B7280] leading-[26px]">
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </section>
  );
}
