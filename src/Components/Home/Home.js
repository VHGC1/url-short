import React from "react";
import { Container, HomeButton, Img, Section, TextWrapper } from "./Home.styled";
import useMedia from "../../Hooks/useMedia"
import Bg from "../../Assets/illustration-working.svg";

const Home = () => {
  const mobile = useMedia('(max-width: 40rem)')

  return (
    <Section>
      <Container className="container">
        {mobile && <img src={Bg} alt="background" />}

        <TextWrapper >
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <HomeButton>Get Started</HomeButton>
        </TextWrapper>
        
        {!mobile && <Img src={Bg} alt="background" />}
      </Container>
    </Section>
  );
};

export default Home;
