import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AIOverviewSection from "./AIOverviewSection";
import AutoServicesSection from "./AutoServicesSection";
import EcoFriendlyDrivingSection from "./EcoFriendlyDrivingSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import React from "react";

export default function DesktopPage() {
  return (
    <>
      <Helmet>
        <title>Revolutionizing Eco-Friendly Driving with AI Technology</title>
        <meta
          name="description"
          content="Discover how our AI technology revolutionizes eco-friendly driving by detecting exhaust issues and promoting vehicle health. Contribute to a greener planet with smart detection and community contribution."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="flex flex-col gap-11">
          <Header />

          {/* eco friendly driving section */}
          <EcoFriendlyDrivingSection />
        </div>

        {/* a i overview section */}
        <AIOverviewSection />

        {/* why choose us section */}
        <WhyChooseUsSection />

        {/* auto services section */}
        <AutoServicesSection />
        <div>
          <Footer className="border" />
        </div>
      </div>
    </>
  );
}
