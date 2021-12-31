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
              <a href={original_link} target="_blank" rel="noreferrer">
                {original_link}
              </a>
              <a
                href={full_short_link}
                target="_blank"
                ref={linkRef}
                rel="noreferrer"
              >
                {full_short_link}
              </a>
            </LinkWrapper>
            <CopyButton copy={linkRef}></CopyButton>
          </UrlShort>
        ))}
      </Container>
    </Section>
  );
};

export default FormItem;
