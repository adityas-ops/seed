import React, { useEffect, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const data = [
  {
    id: 1,
    logo: "https://assets-global.website-files.com/606cae0c4e05dcef785b0481/607814f4163ba81a368abd86_sts-logo-white.svg",
    img: "/carosuel/1.jpeg",
    title: "Why Walrus is on a mission to make money cool again",
    button: "Read About Walrus's Success ",
  },
  {
    id: 2,
    logo: "",
    img: "/carosuel/2.png",
    title:
      "Mailmodo Secures $2 Million Of Funding For The Email Platform Of The Future",
    button: "Read About Walrus's Success ",
  },
  {
    id: 3,
    logo: "https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc6c6b5b0609_logo_yourstory.svg",
    img: "/carosuel/3.jpeg",
    title: "Why Walrus is on a mission to make money cool again",
    button: "Read About Walrus's Success ",
  },
  {
    id: 4,
    logo: "https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc13d85b060b_et-logo.png",
    img: "/carosuel/4.jpeg",
    title: "Why Walrus is on a mission to make money cool again",
    button: "Read About Walrus's Success ",
  },
  {
    id: 5,
    logo: "https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc13d85b060b_et-logo.png",
    img: "/carosuel/5.png",
    title: "Why Walrus is on a mission to make money cool again",
    button: "Read About Walrus's Success ",
  },
];

function Carosuel() {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPage(1);
      } else {
        setPage(1);
      }
    };

    // Set initial perPage value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className=" flex items-center justify-center  relative w-full  h-full">
        <div className=" container w-full h-full relative ">
          <Splide
            hasTrack={false}
            aria-label="..."
            options={{
              rewind: true,
              perPage: page,
              type:"loop"
            }}
          >
            <div className="custom-wrapper">
              <SplideTrack>
                {
                    data.map((item,index)=>{
                        return(
                            <>
                            <SplideSlide key={index}>
                  <div className="h-auto bg-[#dddddd00] w-full">
                    <div className="w-full md:h-[460px] h-[300px] rounded-[16px] overflow-hidden z-0">
                      <div className=" relative block whitespace-nowrap bg-red-500 z-[2]  w-full h-full overflow-hidden ">
                        <img
                          src={item.img}
                          className="w-full h-full object-cover object-center object-top z-[1]"
                          alt="as"
                        />
                        <div className="bg-mask w-full h-full absolute z-10 top-0 md:pl-[40px] md:pr-[40%]  flex flex-col justify-end md:pb-[2rem] p-[1rem]  text-[#fff] md:text-[1.5rem] text-[1rem] font-inter  leading-[1.3]">
                          <div className="mt-[12px]  ">
                            <img
                              src={item.logo}
                              className=" bg-contain w-[32px] mb-[12px]"
                              alt="logo"
                            />
                          </div>
                          <div className=" whitespace-normal">
                          {item.title}
                          </div>
                          <div className="md:mt-[2rem] mt-4 min-w-[168px] w-fit text-[#511e9f] font-inter  bg-white rounded-[8px] py-[12px] px-[29px] text-[14px]">
                           {item.button}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
                            </>
                        )
                    })
                }
              </SplideTrack>
              <div className="splide__arrows md:block hidden" />
            </div>
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Carosuel;
