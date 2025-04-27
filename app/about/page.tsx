import React from "react";
import Image from "next/image";
import SectionHeading from "../Helper/SectionHeading";

const AboutUs = () => {
  return (
    <div className="pt-24 pb-10 ">
      <SectionHeading heading="About Us" />
      <div>
        <section className="pt-10 relative w-[80%] mx-auto">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <Image
                    className="rounded-xl object-cover"
                    src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="about Us image"
                    width={300}
                    height={400}
                  />
                </div>
                <Image
                  className="sm:ml-0 ml-auto rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741215.png"
                  alt="about Us image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-900 text-l font-bold font-manrope leading-normal lg:text-start text-center">
                      Empowering Each Other to Succeed
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      {
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, accusamus iure magni quia ullam cupiditate totam dolorem vel consectetur assumenda itaque optio enim harum quidem earum animi saepe repudiandae aut."
                      }
                    </p>
                  </div>
                  <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                    <div className="flex-col justify-start items-start inline-flex">
                      <h3 className="text-gray-900 text-xl font-bold font-manrope leading-normal">
                        33+
                      </h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Years of Experience
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-900 text-xl font-bold font-manrope leading-normal">
                        125+
                      </h4>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Successful Projects
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-900 text-xl font-bold font-manrope leading-normal">
                        52+
                      </h4>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Happy Clients
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-rose-600 hover:bg-rose-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Read More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
