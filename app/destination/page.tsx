import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-24 pb-10">
      {/* section heading */}
      <SectionHeading heading="Exploring Popular Destinations" />
      {/* section content */}
      <div className="mt-14 w-[80%] mx-auto">
        {/* slider */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
