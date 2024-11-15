import { Img, Text } from "./..";
import React from "react";

export default function CameraSensorDetection({
  cameraSensorText = "Cameras and sensors ",
  detectCarsText = "detect cars ",
  imageSource = "images/img_tokyo_magnifier.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-full gap-8 p-[50px] md:p-5 border-gray-900_01 border border-solid shadow-xs rounded-[44px]`}
    >
      <div className="flex-1">
        <div>
          <div className="relative mr-1.5 h-[76px] sm:mr-0">
            <div className="absolute bottom-0 left-0 top-0 my-auto h-[76px] w-[80%] rounded-md bg-light_green-a200" />
            <Text
              as="p"
              className="absolute bottom-0 right-px top-0 my-auto h-max w-[96%] text-[30px] font-medium leading-[38px] text-black-900 sm:w-[96%] sm:text-[25px]"
            >
              {cameraSensorText}
            </Text>
          </div>
          <div className="relative z-[2] mt-[-4px] h-[44px]">
            <div className="absolute bottom-0 left-0 top-0 my-auto h-[38px] w-[70%] rounded-md bg-light_green-a200" />
            <Text
              as="p"
              className="absolute bottom-0 left-[7px] top-0 my-auto h-max text-[30px] font-medium text-black-900 sm:text-[25px]"
            >
              {detectCarsText}
            </Text>
          </div>
        </div>
      </div>
      <Img src={imageSource} alt="Magnifier Image" className="h-[166px] w-[44%] object-contain" />
    </div>
  );
}
