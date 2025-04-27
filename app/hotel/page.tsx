import SectionHeading from "@/app/Helper/SectionHeading";
import React from "react";
import HotelCard from "./HotelCard";
import { hotelsData } from "@/data/data";

const Hotel = () => {
  return (
    <div className="pt-24 pb-10">
      {/* section heading */}
      <SectionHeading heading="Explore Popular Hotels" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16 items-center">
        {/* hotel card */}
        {hotelsData.map((item) => {
          return (
            <div key={item.id}>
              <HotelCard hotel={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;
