import { Text } from "../../components";
import CameraSensorDetection from "../../components/CameraSensorDetection";
import React, { Suspense } from "react";

const sensorDetectionGrid = [
  {
    cameraSensorText: "Cameras and sensors ",
    detectCarsText: "detect cars ",
    imageSource: "images/img_tokyo_magnifier.png",
  },
  {
    cameraSensorText: "License plates are recorded",
    detectCarsText: "",
    imageSource: "images/img_license_plate_1.png",
  },
  {
    cameraSensorText: "Owners visit nearby auto services",
    detectCarsText: "to verify the issues",
    imageSource: "images/img_icons8_car_repair_100.png",
  },
  {
    cameraSensorText: "Penalties are issued ",
    detectCarsText: "if issues are confirmed",
    imageSource: "images/img_penalties_1.png",
  },
];

export default function AIOverviewSection() {
  return (
    <>
      {/* a i overview section */}
      <div className="mt-6 flex flex-col items-center gap-[74px] px-14 md:gap-[55px] md:px-5 sm:gap-[37px]" id="about_us">
        <div className="flex w-[94%] items-center gap-[41px] md:w-full sm:flex-col">
          <div className="relative h-[60px] w-[10%] sm:w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[50px] flex-1 rounded-md bg-light_green-a200" />
            <Text
              size="textmd"
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[40px] font-medium text-black-900 md:text-[38px] sm:text-[36px]"
            >
              About
            </Text>
          </div>
          <Text
            size="textxl"
            as="p"
            className="mb-1.5 self-end text-[26px] font-normal text-black-900 md:text-[24px] sm:mb-0 sm:self-auto sm:text-[22px]"
          >
            How Our AI Technology Works
          </Text>
        </div>
        <div className="grid w-[94%] grid-cols-2 justify-center gap-10 md:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {sensorDetectionGrid.map((d, index) => (
              <CameraSensorDetection {...d} key={"desktopGrid" + index} className="bg-gray-100" />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
