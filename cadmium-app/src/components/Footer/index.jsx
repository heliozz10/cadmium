import { Text, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center py-[38px] sm:py-5 border-black-900 border-solid bg-white-a700`}
    >
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full flex-col items-center gap-[30px]">
          <div className="h-px w-full self-stretch bg-indigo-50_02" />
          <div className="flex w-[14%] flex-col items-center gap-[18px] md:w-full">
            <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[30px] w-[82px] object-contain" />
            <div className="flex justify-center self-stretch">
              <Text size="textxs" as="p" className="font-inter text-[14px] font-normal text-blue_gray-300">
                © 2024 All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
