import { Text, Img, Heading } from "./..";
import React from "react";

export default function EcoFriendlyProfile({
  ecoFriendlyText = "Eco-friendly Impact",
  globeImage = "images/img_globe.svg",
  emissionReductionText = "Reducing harmful emissions for a greener planet",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-4`}>
      <div className="ml-11 mr-[46px] flex flex-col items-center gap-3.5 self-stretch">
        <Heading as="p" className="text-[32px] font-medium text-black-900">
          {ecoFriendlyText}
        </Heading>
        <Img src={globeImage} alt="Globe Image" className="h-[100px] w-[100px]" />
      </div>
      <Text size="textmd" as="p" className="self-stretch text-center text-[22px] font-normal leading-7 text-black-900">
        {emissionReductionText}
      </Text>
    </div>
  );
}
