import Link from "next/link";
import React from "react";
import {BsArrowDown} from "react-icons/bs"
const data = [
  {
    id: "1",
    img: "/card1/1.svg",
    title: "How to scale your early stage ",
    desc: "200+ hours of curated content, community events, and masterclasses",
  },
  {
    id: "2",
    img: "/card1/2.svg",
    title: "Access to best founders, operators & investors",
    desc: "Roundtables and content aimed at getting you ready to pitch, and demo days for each cohort",
  },
  {
    id: "3",
    img: "/card1/3.svg",
    title: "The SeedToScale Community ",
    desc: "Be part of a highly exclusive community of founders, operators, and investors",
  },
];

function Card1() {
  return (
    <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 min-h-[320px]">
        {
            data.map((item)=>{
               return(

                <div  className="offer-card "  key={item.id}>
                    <div className="offer-icon">
                        <img 
                        src={item.img}
                        alt="a"
                        />
                    </div>
                    <div className="main-container">
                    <div className="heading text-[1.1rem]  leading-[1.5] font-[500] mb-[4px] font-inter text-[#511e9f] hover:text-white">
                    <h1 className="w-[75%]">{item.title}</h1>
                    <p className=" opacity-60 text-[0.875rem] mt-1 font-[400] ">{item.desc}</p>
                    </div>
                   <div className="w-[302px]">
                <Link
                href="#"
                className=" max-w-[180px] mt-[1.5rem]  flex items-center py-[12px]">
                    Scroll To Section <BsArrowDown className="ml-2"/>
                </Link>
                   </div>
                    </div>
                </div>
               )
            })
        }
    </div>
  );
}

export default Card1;
