import React from "react";

function Card({item}) {
  return (
    <>
      <div className="lg:max-w-[372px] max-w-none w-full  rounded-[12px] h-[260px] overflow-hidden flex items-end relative">
        <img
          src={item.img1}
          className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 bg-[#eee9f6] cardImgage"
          alt="as"
        />
        <div className="w-full h-full flex flex-col justify-end px-[16px] relative bg-card">
          <div className="flex items-center">
            <img
              src={item.img2}
              alt="logo"
              className="mr-[4px] w-[16px] max-w-[100%]"
            />
            <div className=" uppercase  text-white text-[.75rem] ">{item.role}</div>
          </div>
          <div className=" mt-[8px] font-[600] leading-[1.4] text-white text-[1rem] mb-[16px] font-inter">
          {item.desc}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
