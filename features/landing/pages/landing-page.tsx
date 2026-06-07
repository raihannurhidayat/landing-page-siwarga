import React from "react";
import FAQSection from "../components/faq-section";
import TestimonialSection from "../components/testimonial-section";
import HowItWorksSection from "../components/how-it-works-section";
import ContactLanding from "../components/contacts";

const LandingPage = () => {
  return (
    <div>
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />
      <ContactLanding />
    </div>
  );
};

export default LandingPage;
