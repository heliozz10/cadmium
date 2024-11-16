import { Text, Img } from "./..";
import React from "react";

export default function ServiceProfile({
  serviceName = "Green Wheels Service",
  serviceLocation = "Downtown City Center",
  serviceRating = "Rating: ★★★★☆",
  url = "https://borze.kz/?utm_source=google&utm_medium=cpc&utm_campaign=g_search_kz_sto&utm_content=714646730524&utm_term=%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81&gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPt9WCjaeyHjbcxTKgNTjevZnDrvdQSyVzRvSIQBj9TIrB6Jx3NanjoaAqv4EALw_wcB", // Add the URL you want to navigate to
  ...props
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-[26px] px-[34px] py-10 sm:p-5 border-gray-900_01 border border-solid bg-white-a700 shadow-xs rounded-[44px] cursor-pointer`}
    >
      <div className="flex flex-col gap-7 self-stretch">
        <div className="flex items-center gap-5">
          <Img src="images/img_play.png" alt="Play Button Image" className="h-[96px] w-[96px] object-cover" />
          <div className="flex flex-1 flex-col items-center self-end">
            <Text as="p" className="w-[96%] text-[20px] font-medium leading-[25px] text-black-900">
              {serviceName}
            </Text>
            <Text size="textxs" as="p" className="w-[96%] text-[18px] font-normal leading-[22px] text-black-900">
              {serviceLocation}
            </Text>
          </div>
        </div>
        <div className="h-px bg-black-900" />
      </div>
      <Text size="textxs" as="p" className="mb-1.5 text-[18px] font-normal text-black-900">
        {serviceRating}
      </Text>
    </a>
  );
}
