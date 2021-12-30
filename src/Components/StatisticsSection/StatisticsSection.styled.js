import styled from "styled-components";

export const Section = styled("section")`
  background: #f0f1f6;
`;

export const TextWrapper = styled("div")`
  padding: 100px 0;
  text-align: center;

  & p {
    color: #bfbfbf;
  }
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
    margin-bottom: 5px;
  }

  & p {
    font-size: 12px;
    color: #bfbfbf;
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
    background: #2acfcf;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -36px;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: 	#3b3054 url("${({ icon }) => icon}") center no-repeat;
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
