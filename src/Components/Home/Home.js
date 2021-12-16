import React from "react";
import { Container, HomeButton, Section, TextWrapper } from "./Home.styled";

const Home = () => {
  return (
    <Section>
      <Container className="container">
        <TextWrapper>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <HomeButton>Get Started</HomeButton>
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default Home;
