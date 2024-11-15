import { Button, Input, Img, Text } from "../../components";
import React from "react";

export default function AppealFormSection() {
  return (
    <>
      {/* appeal form section */}
      <div>
        <div className="flex flex-col items-start gap-8 bg-white-a700 py-[38px] pl-[100px] pr-14 md:px-5 sm:p-5">
          <div className="flex w-[96%] flex-col items-start md:w-full">
            <div className="relative h-[60px] self-stretch">
              <div className="absolute left-0 top-[1.86px] m-auto h-[50px] w-[84%] rounded-md bg-light_green-a200" />
              <Text
                size="textmd"
                as="p"
                className="absolute bottom-0 left-[7px] top-0 my-auto h-max text-[40px] font-medium text-black-900 md:text-[38px] sm:text-[36px]"
              >
                Have Questions or Concerns About Your Notification?
              </Text>
            </div>
            <Text
              size="textxl"
              as="p"
              className="relative z-[1] mt-[-6px] text-[26px] font-normal text-black-900 md:text-[24px] sm:text-[22px]"
            >
              We’re here to help. Submit your appeal and let us review your case
            </Text>
          </div>
          <div className="mb-20 flex w-[62%] flex-col justify-center gap-[22px] rounded-[44px] border border-solid border-gray-900_01 bg-light_green-a200 px-[50px] py-[30px] shadow-xs md:w-full md:px-5 sm:p-5">
            <Text
              as="p"
              className="w-[90%] text-[30px] font-medium leading-[38px] text-black-900 md:w-full md:text-[28px] sm:text-[26px]"
            >
              Fill out the form below, and we’ll get back to you promptly with the next steps
            </Text>
            <div className="flex flex-col items-start gap-[34px]">
              <div className="flex flex-col items-start gap-[34px] self-stretch">
                <Input
                  shape="round"
                  type="number"
                  name="Vehicle Number Input"
                  placeholder={`Vehicle number: `}
                  suffix={
                    <div className="flex h-[50px] w-[300px] items-center justify-center rounded-[10px] bg-gray-100">
                      <Img
                        src="images/img_license_plate_1.png"
                        alt="License-plate 1"
                        className="h-[50px] w-[50px] rounded-[10px] bg-gray-100 object-cover pl-[34px]"
                      />
                    </div>
                  }
                  className="w-[70%] gap-4 rounded-[10px]"
                />
                <Input
                  shape="round"
                  type="password"
                  name="Reason Input"
                  placeholder={`Reason:`}
                  className="w-[70%] rounded-[10px] pr-2"
                />
              </div>
              <Input
                size="sm"
                shape="round"
                type="password"
                name="Comment Input"
                placeholder={`Comment:`}
                className="w-[70%] rounded-[10px] px-1.5"
              />
              <Button
                color="gray_900_01"
                size="sm"
                className="min-w-[200px] rounded-[20px] px-[34px] font-medium sm:px-5"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
