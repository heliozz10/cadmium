import { Img, Text } from "../../components";
import React from "react";

export default function EcoFriendlyDrivingSection() {
  return (
    <>
      {/* eco friendly driving section */}
      <div>
        <div className="flex flex-col items-center">
          <div className="container-xs relative z-[1] flex flex-col items-end pl-14 pr-[280px] md:px-5">
            <Img src="images/img_magnifier_svgrepo_com.svg" alt="Search Icon" className="h-[200px] w-[200px]" />
          </div>
          <div className="relative mt-[-184px] flex items-start justify-center self-stretch px-14 md:flex-col md:px-5">
            <div className="flex w-[50%] flex-col items-start gap-[34px] md:w-full">
              <Text
                size="textlg"
                as="p"
                className="w-[84%] text-[60px] font-medium leading-[76px] text-black-900 md:w-full md:text-[52px] sm:text-[46px]"
              >
                <span className="text-black-900">Revolutionizing&nbsp;</span>
                <span className="text-light_green-600">Eco-Friendly Driving with AI</span>
              </Text>
              <Text
                size="textlg"
                as="p"
                className="w-[72%] text-[24px] font-normal leading-10 text-black-900 md:w-full md:text-[22px]"
              >
                Detect exhaust issues, improve your vehicle, and help the planet
              </Text>
            </div>
            <Img
              src="images/img_3d_city_1.png"
              alt="City Image"
              className="h-[500px] w-[42%] self-center object-contain md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
