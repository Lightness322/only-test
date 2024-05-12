import styled from "styled-components"
import { baseTheme } from "../../baseTheme"

const { colors, media } = baseTheme

export const Title = styled.h1`
  position: relative;

  margin-bottom: 96px;

  font-weight: 700;
  font-size: 56px;
  line-height: 67.2px;
  color: ${colors.text.primary};

  @media (${media.lg}) {
    margin-bottom: 116px;
    font-size: 50px;
  }
  @media (${media.md}) {
    margin-bottom: 56px;
    font-size: 40px;
    line-height: normal;
  }
  @media (${media.sm}) {
    font-size: 30px;
  }
  @media (${media.min}) {
    font-size: 20px;
  }
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 60px);
    left: -83px;

    height: 120px;
    width: 5px;

    background: linear-gradient(
      180deg,
      ${colors.text.blue} -5%,
      ${colors.text.pink} 85%
    );

    @media (${media.xl}) {
      left: -43px;
    }
    @media (${media.md}) {
      display: none;
    }
  }
`

export const Container = styled.div`
  position: relative;

  min-height: 100vh;

  padding: 85px 80px 20px;

  @media (${media.xl}) {
    padding: 85px 40px 20px;
  }
  @media (${media.md}) {
    display: flex;
    flex-direction: column;
    padding: 59px 20px 20px;
  }
`

export const FlexDates = styled.div`
  position: relative;

  margin-bottom: 75px;

  display: flex;
  justify-content: center;
  gap: 50px;

  @media (${media.md}) {
    gap: 25px;
    margin-bottom: 20px;
  }
  @media (${media.sm}) {
    gap: 20px;
  }
  &::after {
    display: none;

    content: "";
    position: absolute;
    left: 0;
    bottom: -70px;

    height: 1px;
    width: 100%;

    background-color: ${colors.border.secondary};

    @media (${media.md}) {
      display: block;
    }
  }
`

export const StyledDate = styled.h2`
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: 0.02em;

  @media (${media.xl}) {
    font-size: 160px;
  }
  @media (${media.lg}) {
    font-size: 140px;
  }
  @media (${media.md}) {
    font-size: 90px;
    line-height: normal;
  }
  @media (${media.sm}) {
    font-size: 70px;
  }
  @media (${media.min}) {
    font-size: 56px;
  }
`

export const DateFrom = styled(StyledDate)`
  color: ${colors.text.blue_purple};
  @media (${media.md}) {
    color: ${colors.text.blue};
  }
`
export const DateTo = styled(StyledDate)`
  color: ${colors.text.pink};
`

export const Topic = styled.h2`
  display: none;

  @media (${media.md}) {
    display: block;

    position: relative;

    margin-bottom: 60px;

    font-size: 20px;
    font-weight: 600;
    color: ${colors.text.primary};
  }
`
