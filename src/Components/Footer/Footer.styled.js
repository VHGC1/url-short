import styled from "styled-components";

export const FooterWrapper = styled("footer")`
  background: 	#232127;
  padding: 50px;

  @media (max-width: 40rem) {
    & {
      text-align: center;
    }
  }
`

export const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;

  & svg {
    fill: #fff;
  }

  @media (max-width: 40rem) {
    & {
      flex-direction: column;
    }

    & svg {
      align-self: center;
      margin-bottom: 1rem;
    }
  }
`

export const OptionsWrapper = styled("div")`
  font-size: 16px;
  margin: 0 1rem;

  & span {
    display: block;
    color: #fff;
    margin-bottom: 1rem;
  }

  & li {
    color: #bfbfbf;
  }

  @media (max-width: 40rem) {
    margin: 1rem 0;
  }
`

export const IconsWrapper = styled("div")`
  & svg {
    margin: 0 1rem;
  }

  @media (max-width: 40rem) {
    & svg {
      margin-top: 1rem;
    }
  }
`

