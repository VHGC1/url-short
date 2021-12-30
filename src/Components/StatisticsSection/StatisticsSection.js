import React from "react";
import { Card, Section, TextWrapper, WrapperCards } from "./StatisticsSection.styled";
import BrandRecognition from "../../Assets/icon-brand-recognition.svg";
import DetailedRecords from "../../Assets/icon-detailed-records.svg";
import FullyCustomizable from "../../Assets/icon-fully-customizable.svg";

const StatisticsSection = () => {
  return (
    <Section>
      <div className="container">
        <TextWrapper>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboar
          </p>
        </TextWrapper>

        <WrapperCards>
          <Card icon={BrandRecognition}>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded link help instil confidence in your content.
            </p>
          </Card>
          <Card icon={DetailedRecords}>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </Card>
          <Card icon={FullyCustomizable}>
            <h3>Fully Customizable</h3>
            <p>
              improved brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </Card>
        </WrapperCards>
      </div>
    </Section>
  );
};

export default StatisticsSection;
