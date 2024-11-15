import { Text, Button, Img, Heading } from "../../components";
import ServiceProfile from "../../components/ServiceProfile";
import React, { Suspense } from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const serviceRatingsList = [
  { serviceName: "Green Wheels Service", serviceLocation: "Downtown City Center", serviceRating: "Rating: ★★★★☆" },
  { serviceName: "EcoTune Garage", serviceLocation: "Suburban Area", serviceRating: "Rating: ★★★★★" },
  { serviceName: "Green Wheels Service", serviceLocation: "Downtown City Center", serviceRating: "Rating: ★★★★☆" },
];
const accordionData = [
  {
    numberLabel: "01",
    descriptionLabel: "Improved vehicle health and performance",
  },
  {
    numberLabel: "02",
    descriptionLabel: "Reduced environmental penalties",
  },
  {
    numberLabel: "03",
    descriptionLabel: "Contribution to eco-friendly infrastructure.",
  },
];

export default function AutoServicesSection() {
  return (
    <>
      {/* auto services section */}
      <div className="mt-[30px] flex flex-col items-center gap-[54px] sm:gap-[27px]">
        <div className="container-xs md:px-5">
          <Accordion preExpanded={[0]} className="flex flex-col gap-[30px]">
            {accordionData.map((d, i) => (
              <AccordionItem uuid={i} key={`Expandable List${i}`}>
                <div className="flex flex-1 flex-col items-center gap-[30px] rounded-[44px] border border-solid border-gray-900_01 bg-light_green-a200 p-10 shadow-xs sm:p-5">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col">
                              <div className="flex flex-1 flex-wrap items-center gap-[26px] md:self-stretch">
                                <Heading
                                  size="text4xl"
                                  as="h1"
                                  className="text-[60px] font-medium text-black-900 md:text-[52px] sm:text-[46px]"
                                >
                                  {d.numberLabel}
                                </Heading>
                                <Heading
                                  size="text2xl"
                                  as="h2"
                                  className="mb-3 self-end text-[30px] font-medium text-black-900 md:text-[28px] sm:text-[26px]"
                                >
                                  {d.descriptionLabel}
                                </Heading>
                              </div>
                              {props?.expanded ? (
                                <Button
                                  shape="round"
                                  className="w-[58px] rounded-[28px] border border-solid border-gray-900_01 px-5"
                                >
                                  <Img src="images/img_.png" />
                                </Button>
                              ) : (
                                <Button
                                  shape="round"
                                  className="w-[58px] rounded-[28px] border border-solid border-gray-900_01 px-4"
                                >
                                  <Img src="images/img_plus.svg" />
                                </Button>
                              )}
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="flex w-[96%] flex-col gap-7 md:w-full">
                      <div className="h-px bg-black-900" />
                      <Text size="textxs" as="p" className="text-[18px] font-normal leading-[22px] text-black-900">
                        Keeping the vehicle&#39;s emissions within legal limits ensures it operates as the manufacturer
                        intended, avoiding performance reductions caused by degraded parts.
                      </Text>
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex flex-col gap-[26px] self-stretch">
          <div className="mx-[100px] flex items-start gap-10 md:mx-0 md:flex-col">
            <div className="relative h-[60px] w-[36%] self-center md:w-full md:px-5">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[50px] flex-1 rounded-md bg-light_green-a200" />
              <Text
                size="textmd"
                as="p"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[40px] font-medium text-black-900 md:text-[38px] sm:text-[36px]"
              >
                Trusted Auto Services
              </Text>
            </div>
            <Text
              size="textxs"
              as="p"
              className="mt-1 w-[38%] text-[18px] font-normal leading-[22px] text-black-900 md:mt-0 md:w-full md:px-5"
            >
              Your Car Deserves the Best: Handpicked Auto Services You Can Rely On
            </Text>
          </div>
          <div className="flex gap-10 py-[30px] pl-[98px] pr-14 md:flex-col md:px-5 sm:p-5">
            <Suspense fallback={<div>Loading feed...</div>}>
              {serviceRatingsList.map((d, index) => (
                <ServiceProfile {...d} key={"listgreenwheels" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
