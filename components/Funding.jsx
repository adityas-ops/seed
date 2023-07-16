import Link from "next/link";
import React from "react";

function Funding() {
  return (
    <div className="w-full h-full md:grid flex flex-row overflow-x-scroll md:grid-cols-3 grid-cols-1  gap-0 gap-x-[24px] gap-y-[40px]">
      <div className="carding-1 z-30 min-w-[80vw] md:min-w-0 ">
        <div className="flex justify-start flex-col relative">
          <img
            src="https://assets-global.website-files.com/606cae0c4e05dcef785b0481/6169465bddfe0ac67c4ff72d_logo%201.svg"
            className="w-[60%] mb-[12px]"
            alt="as"
          />
          <div className=" uppercase bg-[#faf6ff] rounded-[2px] w-fit text-[12px] font-inter text-[#200051] mb-[8px] py-[4px] px-[8px]">
            Funding program
          </div>
          <div className=" flex flex-col mb-[24px] ">
            <p className="text-[#323232] mt-[24px] mb-[16px] text-[1.5rem] font-dm leading-[1.5] ">
              It&apos;s time to change pre-seed investing in India
            </p>
            <p className="text-[#200051] mb-[12px] text-[0.875rem] leading-[1.5]">
              Come partner with us and be a part of the Accel family.
            </p>
          </div>
        </div>
        <Link
          className=" min-w-[168px] text-white text-center bg-[#511e9f] rounded-[8px] flex justify-center items-center py-[12px] px-[29px] text-[12px] mt-[90px]"
          href="#"
        >
          Apply Now
        </Link>
      </div>
      <div className="carding-2 min-w-[80vw] md:min-w-0 ">
        <div className="flex justify-start flex-col relative">
          <div className="w-full h-full flex justify-start">
            <img
              src="https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc37675b0507_consumer-stack-icon.svg"
              alt="ad"
              className="w-[64px] h-[64px] mb-[1rem]"
            />
          </div>
          <h2 className=" text-[1.125rem] font-[600] font-inter mb-[8px] text-[#35087a]">
            SeedToScale Startup School - Consumer Tech
          </h2>
          <div className=" uppercase bg-[#faf6ff] rounded-[2px] mb-[8px] py-[4px] px-[8px] text-[12px] w-fit">
            Course
          </div>
          <div className=" flex flex-col mb-[1.5rem]">
            <p className="mb-[12px] leading-[1.5] text-[.825rem] ">
              A self paced course on how to build a Consumer Tech Startup. The
              modules are focused on helping you discover
            </p>
            <div className="tick">Market Sizing</div>
            <div className="tick">Product market Fit Strategy</div>
            <div className="tick">User Growth Frameworks</div>
            <div className="tick">Fundraising </div>
          </div>
          <div className=" flex items-center self-stretch justify-between">
            <div className=" text-[#200051] font-[600] text-[0.825rem]">
              Start Learning
            </div>
            <Link
              href="#"
              className="p-[12px] rounded-[4px] min-w-auto border border-zinc-300"
            >
              <img
                src="https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc84ec5b04be_arrow-purple.svg"
                alt="as"
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="carding-2 min-w-[80vw] md:min-w-0">
        <div className="flex justify-start flex-col relative">
          <div className="w-full h-full flex justify-start">
            <img
              src="https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dcccd25b0503_SAAS.svg"
              alt="ad"
              className="w-[64px] h-[64px] mb-[1rem]"
            />
          </div>
          <h2 className=" text-[1.125rem] font-[600] font-inter mb-[8px] text-[#35087a]">
          SeedToScale Startup School - SaaS 
          </h2>
          <div className=" uppercase bg-[#faf6ff] rounded-[2px] mb-[8px] py-[4px] px-[8px] text-[12px] w-fit">
            Course
          </div>
          <div className=" flex flex-col mb-[1.5rem]">
            <p className="mb-[12px] leading-[1.5] text-[.825rem] ">
            A self paced course on how to build a SaaS Startup. The modules are focused on helping you discover
            </p>
            <div className="tick">Large Market Opportunities</div>
            <div className="tick">User Growth Frameworks</div>
            <div className="tick">Cross Border Sales</div>
            <div className="tick">Fundraising </div>
          </div>
          <div className=" flex items-center self-stretch justify-between">
            <div className=" text-[#200051] font-[600] text-[0.825rem]">
              Start Learning
            </div>
            <Link
              href="#"
              className="p-[12px] rounded-[4px] min-w-auto border border-zinc-300"
            >
              <img
                src="https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc84ec5b04be_arrow-purple.svg"
                alt="as"
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funding;
