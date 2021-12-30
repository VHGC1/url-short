import React from "react";
import { GetStartedButton, Section, TextWrapper } from "./BoostSection.styled";

const BoostSection = () => {
  return (
    <Section>
      <TextWrapper className="container">
        <h1>Boost your links today</h1>
        <GetStartedButton>Get Started</GetStartedButton>
      </TextWrapper>
    </Section>
  );
};

export default BoostSection;
