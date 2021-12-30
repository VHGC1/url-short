import styled from "styled-components";

export const Section = styled("section")`
  background: #f0f1f6;
  padding: 1rem 0;
`;

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UrlShort = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  width: 100%;
  padding: 0.8rem 1.5rem;
  border-radius: 0.2rem;
  margin: 0.5rem 0;
  font-size: 16px;

  @media (max-width: 40rem) {
    & {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  & div p:last-of-type {
    color: hsl(180, 66%, 49%);
  }
`;

export const LinkWrapper = styled("div")`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 40rem) {
    & {
      flex-direction: column;
    }

    & p:first-of-type::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin: .5rem 0;
      background-color: #f0f1f6;
    }
  }
`;


