import React, { useRef } from "react";
import CopyButton from "./CopyButton";
import { Container, LinkWrapper, Section, UrlShort } from "./FormItem.styled";

const FormItem = ({ data }) => {
  const linkRef = useRef(null);

  return (
    <Section>
      <Container className="container">
        {data.map(({ code, full_short_link, original_link }) => (
          <UrlShort key={(code += Math.random() * 10)}>
            <LinkWrapper>
              <p>{original_link}</p>
              <p ref={linkRef}>{full_short_link}</p>
            </LinkWrapper>
            <CopyButton copy={linkRef}></CopyButton>
          </UrlShort>
        ))}
      </Container>
    </Section>
  );
};

export default FormItem;
