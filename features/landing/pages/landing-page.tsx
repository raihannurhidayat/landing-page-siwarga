import React from "react";
import FAQSection from "../components/faq-section";
import TestimonialSection from "../components/testimonial-section";
import HowItWorksSection from "../components/how-it-works-section";

const LandingPage = () => {
  return (
    <div>
      <HowItWorksSection />
      <FAQSection />
      <TestimonialSection />
    </div>
  );
};

export default LandingPage;
