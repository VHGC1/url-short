import styled from "styled-components";

export const Section = styled("section")`
  background: #f0f1f6;
`;

export const TextWrapper = styled("div")`
  padding: 100px 0;
  text-align: center;
`;

export const WrapperCards = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 5rem;

  @media (max-width: 40rem) {
    & {
      flex-direction: column;
      gap: 4.5rem;
    }
  }
`;

export const Card = styled("div")`
  padding: 3rem 2rem;
  background: #fff;
  border-radius: 0.4rem;
  position: relative;
  height: fit-content;

  & h3 {
    font-size: 1rem;
  }

  & p {
    font-size: 12px;
  }

  &:nth-child(2) {
    margin-top: 2.2rem;
  }

  &:nth-child(3) {
    margin-top: 4.4rem;
  }

  &:nth-child(1)::after,
  &:nth-child(2)::after {
    content: "";
    display: block;
    position: absolute;
    right: -31px;
    bottom: 90px;
    height: 0.4rem;
    width: 2rem;
    background: hsl(180, 66%, 49%);
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -36px;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: hsl(257, 27%, 26%) url("${({ icon }) => icon}") center no-repeat;
    background-size: 50%;
    transition: 0.2s;
  }

  @media (max-width: 40rem) {
    & {
      text-align: center;
    }

    &:nth-child(2),
    &:nth-child(3) {
      margin: 0;
    }

    &:nth-child(1)::after,
    &:nth-child(2)::after {
      height: 4rem;
      width: .5rem;
      bottom: -4rem;
      right: calc(100vw/2 - 2rem);
    }

    &::before {
      right: calc(100vw/2 - 3.7rem);
    }
  }

`;
