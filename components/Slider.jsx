"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ItemIndicator = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  let item = items[currentItemIndex]
  return (
    <div className=" md:w-[410px] w-full md:h-[350px] h-[250px] rounded-[20px] overflow-visible  bg-[#15948e] relative">
      <div className="md:w-[410px] w-full md:h-[350px] h-[250px] overflow-y-visible rounded-[20px]">
        <img
          src={item.img}
          alt={item.title}
          className=" object-cover w-full h-full rounded-[20px]"
        />
       <div className="w-full h-fit absolute bottom-3 rounded-[8px] flex justify-center">
     
       <div className="md:m-4 font-dm w-[90%]  md:p-3 p-[5px] px-[16px] rounded-[8px]  text-white bg-[#00000059]"><span className="text-[12px] font-[400] font-inter" >Featured story</span><br/><p className="mt-[4px] text-[1em] leading-[1.3] ">{item.title}</p></div>
       </div>
      </div>
      <div className="flex absolute md:bottom-[-20%] bottom-[-15%] md:left-[40%] left-[32%]">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: index === currentItemIndex ? "darkblue" : "gray",
          }}
          className="md:w-[8px] w-[7px] h-[7px] md:h-[8px] rounded-[50%] mx-1"
        />
      ))}
      </div>
    </div>
  );
};

export default function MyComponent() {
  const data = [
    {
      img: "/slider/1.png",
      title:
        "Future of Mobility - Vivek on Bounce’s Journey and the Inevitable Adoption of EVs",
    },
    {
      img: "/slider/2.png",
      title:"Building an Effective Startup Program as a GTM Channel",
    },
    {
      img: "/slider/3.png",
      title:
        "Future of Mobility - Vivek on Bounce’s Journey and the Inevitable Adoption of EVs",
    },
    {
      img: "/slider/4.png",
      title:
        "Untold Seed Stories: First 500 Days of Mensa",
    },
    {
      img: "/slider/5.png",
      title:
        "Future of Mobility - Vivek on Bounce’s Journey and the Inevitable Adoption of EVs",
    },
    {
      img: "/slider/6.webp",
      title:
      "Untold Seed Stories: First 500 Days of Mensa",
    },
    {
      img: "/slider/7.png",
      title:
        "Future of Mobility - Vivek on Bounce’s Journey and the Inevitable Adoption of EVs",
    },
    {
      img: "/slider/8.png",
      title:
        "Headhsot of Darpan Sanghvi from Myglamm DECODING MARKETPLACES Learn how India has reimagined its bazaars",
    },
  ];

  return (
    <div>
      <ItemIndicator items={data} />
    </div>
  );
}
