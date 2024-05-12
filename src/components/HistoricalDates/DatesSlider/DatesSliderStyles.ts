import styled from "styled-components"
import { baseTheme } from "../../../baseTheme"

const { colors, media } = baseTheme

export const Container = styled.div`
  position: relative;

  margin-left: -80px;
  margin-right: -80px;

  padding-left: 80px;
  padding-right: 80px;

  flex-grow: 1;
`

export const Event = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Year = styled.h3`
  font-size: 25px;
  line-height: 30px;
  font-family: "Bebas Neue", sans-serif;
  color: ${colors.text.blue};

  @media (${media.sm}) {
    font-size: 20px;
    line-height: normal;
  }
  @media (${media.min}) {
    font-size: 16px;
  }
`

export const Description = styled.div`
  font-size: 20px;
  text-align: start;
  line-height: calc(30 / 20 * 100%);
  color: ${colors.text.primary};

  @media (${media.md}) {
    font-size: 18px;
  }
  @media (${media.sm}) {
    font-size: 16px;
  }
  @media (${media.sm}) {
    font-size: 14px;
    line-height: 20px;
  }
`
