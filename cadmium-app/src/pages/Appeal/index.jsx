import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AppealFormSection from "./AppealFormSection";
import React from "react";

export default function AppealPage() {
  return (
    <>
      <Helmet>
        <title>Submit Your Appeal - Vehicle Notification Review</title>
        <meta
          name="description"
          content="Have questions or concerns about your vehicle notification? Submit your appeal through our form and receive prompt assistance to resolve your case."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-2.5 bg-white-a700">
        <Header />
        <div>
          {/* appeal form section */}
          <AppealFormSection />
          <Footer className="border-[0.5px]" />
        </div>
      </div>
    </>
  );
}
