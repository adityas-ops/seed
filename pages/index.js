import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Card1 from "@/components/Card1";
import Marquee from "@/components/Marque";
import Stat from "@/components/Stat";
import Carosuel from "@/components/Carosuel";

const inter = Inter({ subsets: ["latin"] });
//  ${inter.className}
export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Hero />
      <section className="md:py-[40px] py-0 w-full h-full ">
        <div className="py-[4rem]  bg-[#f6f3fa]">
          <div className="w-full max-w-[1240px] mx-auto md:px-[20px] px-4">
            <div className="w-full h-full mb-[15px]">
              <div className=" text-center font-dm text-[1.5rem] mb-[24px] text-[#200051]">
                Subscribe to get the latest from Accel emailed directly to you
              </div>
              <form className=" gap-x-4 gap-y-4 rounded-lg flex-col grid-rows-auto grid-cols-1 auto-cols-1 justify-items-center grid">
                <label className=" font-inter mx-2 flex  items-start">
                  <input
                    type="checkbox"
                    className=" min-w-[12px] min-h-[12px] h-[12px] mt-1 w-[12px] border border-[#00000080] "
                  />
                  <span className=" text-[#000000a3] text-[0.875rem] mx-2  ">
                    I agree to receive latest updates and newsletters from Accel
                  </span>
                </label>
                <div className="relative md:w-[500px] w-full gap-4 md:gap-0 flex flex-col md:flex-row">
                  <input
                    className=" h-[40px]  w-full bg-[#fff] rounded-[8px] py-[8px] px-[12px] text-[14px] leading-[1.4]"
                    placeholder="Enter your email address"
                    type="text"
                  />
                  <input
                    type="submit"
                    className=" min-w-[168px] md:w-[168px] w-full rounded-[8px] bg-[#511e9f] py-[12px] px-[29px] flex items-center justify-center text-[14px] font-inter text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[40px]">
        <div className="w-full max-w-[1240px] mx-auto md:px-[20px] px-4">
          <h2 className=" text-center mb-[32px] md:text-[2rem] text-[1.5rem] font-dm font-[400]">
            What you get from SeedToScale
          </h2>
          <Card1 />
        </div>
      </section>
      <section className="py-[60px] bg-[#e8f5f4] mb-[40px] bg-no-repeat bg-back1 bg-right-top ">
        <div className="w-full max-w-[1240px] mx-auto md:px-[20px] px-4">
          <div className="w-full h-full grid md:grid-cols-2 grid-cols-1">
            <div>
              <h2 className=" text-left mb-[4px] md:text-[2rem] text-[1.5rem] font-dm font-[400] text-[#200051]">
                Curated By Accel
              </h2>
              <p className=" md:text-[1.125rem] text-[14px] leading-[1.5] text-[#200051] font-inter ">
                At Accel, we have backed{" "}
                <span class="text-[#f0485c]">150+ portfolio companies</span>{" "}
                from their seed stage and travelled with them to scale. We are
                bringing these learnings back to the startup ecosystem through
                SeedToScale.
              </p>
            </div>
            <div className=" w-full px-4 md:px-0 mt-10 md:mt-0 overflow-hidden flex justify-start relative">
              <Marquee />
              <div className=" bg-fade-left top-0 bottom-auto right-auto left-[0%] md:w-[140px] w-[70px] h-full absolute" />
              <div className=" bg-fade-right top-0 bottom-auto right-[0%] left-auto md:w-[140px] w-[70px] h-full absolute" />
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-[40px] py-0 w-full h-full">
        <div className="w-full max-w-[1240px] mx-auto md:px-[20px] px-4">
          <Stat/>
        </div>
      </section>
      <section className="py-[40px] w-full h-full">
      <div className="w-full max-w-[1240px] mx-auto md:px-[20px] px-4">
      <h2 className=" text-center mb-[2rem] relative  text-[2em] font-dm font-[400]  text-[#200051]">Success Stories from our Community</h2>
      <Carosuel/>
      </div>
      </section>
    </div>
  );
}
