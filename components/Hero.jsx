import React from "react";
import Slider from "./Slider";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full md:mt-[12rem] mt-[3rem] h-full mb-[80px]">
      <div className="w-full max-w-[1240px] mx-auto md:px-[20px] px-4 relative h-full  ">
        <div className="w-full   grid h-full md:gap-[3rem] md:grid-cols-12 grid-cols-1 z-20">
          <div className="  col-span-7 pt-4 order-2 md:order-1 mt-[3rem] md:mt-0">
            <h1 className="md:text-[3rem] text-[1.6rem] text-center md:text-left md:w-[85%] w-[100%] font-dm font-[400] leading-[1.2] my-0 text-[#511e9f]">
              Accel&apos;s curated{" "}
              <span className="text-[#f0485c]">learning community</span> to help
              founders build venture fundable startups
            </h1>
            <p className="mt-[12px] md:text-[1rem] text-[0.875rem] leading-[1.7] text-center md:text-left font-inter opacity-60 text-black ">
              We partner with early stage startups to help with{" "}
              <strong>market sizing</strong>, <strong>product</strong>,
              <strong>GTM</strong>, and <strong>fundraising</strong>
            </p>
            <div className="mt-[24px] w-full  relative">
              <input
                placeholder="Search for content,people,jobs"
                className=" max-w-[450px] w-full md:h-[52px] h-[42px] pr-[12px] text-[12px] md:text-[1rem] py-[8px] pl-[36px] border input1 border-[#d2c4e7] rounded-[8px]"
              />
            </div>
          </div>

          <div className=" md:col-span-5  relative order-1 md:order-1  w-full h-full  overflow-y-visible ">
            <div className="h-[90%] md:w-[410px] w-[81vw] bg-[#2000511a] rounded-[16px] absolute top-[30px] left-[24px] z-[-1]"></div>
            <div className=" w-full  h-full z-[10] ">
                <Slider/>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
