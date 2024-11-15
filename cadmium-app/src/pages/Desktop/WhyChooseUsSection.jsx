import { Text } from "../../components";
import EcoFriendlyProfile from "../../components/EcoFriendlyProfile";
import React, { Suspense } from "react";

const ecoFriendlyInitiativesList = [
  {
    ecoFriendlyText: "Eco-friendly Impact",
    globeImage: "images/img_globe.svg",
    emissionReductionText: "Reducing harmful emissions for a greener planet",
  },
  {
    ecoFriendlyText: "Smart Detection",
    globeImage: "images/img_object_detection_svgrepo_com.svg",
    emissionReductionText: "Advanced AI accurately identifies issues with exhaust gases",
  },
  {
    ecoFriendlyText: "Eco-friendly Impact",
    globeImage: "images/img_globe.svg",
    emissionReductionText: "Reducing harmful emissions for a greener planet",
  },
];

export default function WhyChooseUsSection() {
  return (
    <>
      {/* why choose us section */}
      <div className="mt-[78px]" id="Why_us">
        <div className="relative mx-[100px] h-[60px] md:mx-0">
          <div className="absolute left-0 top-[1.28px] m-auto h-[50px] w-[46%] rounded-md bg-light_green-a200" />
          <Text
            size="textmd"
            as="p"
            className="absolute bottom-0 left-[7px] top-0 my-auto h-max text-[40px] font-medium text-black-900 md:text-[38px] sm:text-[36px]"
          >
            Why Choose Our AI Solution?
          </Text>
        </div>
        <div className="mt-[22px] flex justify-center bg-white-a700 p-[34px] sm:p-5">
          <div className="flex w-[90%] gap-5 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {ecoFriendlyInitiativesList.map((d, index) => (
                <EcoFriendlyProfile {...d} key={"ecoFriendlyList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
        <div className="flex items-start gap-10 py-6 pl-[100px] pr-14 md:flex-col md:px-5 sm:p-5">
          <div className="relative h-[60px] w-[30%] self-center md:w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[50px] flex-1 rounded-md bg-light_green-a200" />
            <Text
              size="textmd"
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[40px] font-medium text-black-900 md:text-[38px] sm:text-[36px]"
            >
              What Do You Gain?
            </Text>
          </div>
          <Text
            size="textxs"
            as="p"
            className="mt-1 w-[26%] text-[18px] font-normal leading-[22px] text-black-900 md:mt-0 md:w-full"
          >
            Benefits that are provided for you if you contribute to our project
          </Text>
        </div>
      </div>
    </>
  );
}
