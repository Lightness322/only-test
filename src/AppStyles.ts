import styled from "styled-components"
import { baseTheme } from "./baseTheme"

const { colors, media } = baseTheme

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
  max-width: 1440px;

  margin-left: auto;
  margin-right: 160px;

  border-left: 1px solid ${colors.line.primary};
  border-right: 1px solid ${colors.line.primary};

  @media (${media.xxxl}) {
    margin-right: auto;
  }
  @media (${media.xxl}) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (${media.md}) {
    margin: 0px;

    border-left: none;
    border-right: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 1px;

    background-color: ${colors.line.primary};

    @media (${media.md}) {
      display: none;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 395px;
    left: 0;
    height: 1px;
    width: 100%;

    background-color: ${colors.line.primary};

    @media (${media.lg}) {
      top: 415px;
    }
    @media (${media.md}) {
      display: none;
    }
  }
`
