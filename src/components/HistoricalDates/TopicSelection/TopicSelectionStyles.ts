import styled, { css } from "styled-components"

import arrow from "../../../assets/arrow_nav.svg"
import arrowDis from "../../../assets/arrow_disabled.svg"
import arrow_mob from "../../../assets/arrow_nav_mob.svg"
import arrowDis_mob from "../../../assets/arrow_disabled_mob.svg"

import { baseTheme } from "../../../baseTheme"

const { colors, media, circleParams, circleTopicParams } = baseTheme

export const Circle = styled.div`
  position: absolute;
  top: calc(45px + 85px);
  left: calc(50%);

  width: ${circleParams.radius * 2}px;
  height: ${circleParams.radius * 2}px;

  border: 1px solid ${colors.border.secondary};
  border-radius: 100%;

  transform: translateX(-50%) rotate(${-circleParams.degree * 2}deg);
  @media (${media.lg}) {
    top: calc(45px + 105px);
  }
  @media (${media.md}) {
    display: none;
  }
`
interface TopicCircleProps {
  $index: number
  $isActive: boolean
}

export const TopicCircle = styled.button<TopicCircleProps>`
  position: absolute;
  left: 50%;
  top: 50%;

  width: ${circleTopicParams.hoveredRadius}px;
  height: ${circleTopicParams.hoveredRadius}px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background-color: ${(props) =>
    props.$isActive ? colors.bg.primary : "transparent"};

  transform: ${(props) => css`translate(-50%, -50%)
      translate(
        ${
          circleParams.radius *
          Math.cos(props.$index * (Math.PI / (circleParams.totalPeriods / 2)))
        }px,
        ${
          circleParams.radius *
          Math.sin(props.$index * (Math.PI / (circleParams.totalPeriods / 2)))
        }px
      )
      rotate(${circleParams.degree * 2}deg)`};

  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
`

interface ITopic {
  $isActive: boolean
}

export const Topic = styled.span<ITopic>`
  opacity: ${(props) => (props.$isActive ? "1" : "0")};

  position: absolute;
  left: calc(100% + 20px);

  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${colors.text.primary};
  cursor: auto;
`

interface DotProps {
  $isHovered: boolean
  $isActive: boolean
}

export const Dot = styled.span<DotProps>`
  width: ${(props) => {
    if (props.$isActive) {
      return `${circleTopicParams.hoveredRadius}px`
    }
    return props.$isHovered
      ? `${circleTopicParams.hoveredRadius}px`
      : `${circleTopicParams.hiddenRadius}px`
  }};
  height: ${(props) => {
    if (props.$isActive) {
      return `${circleTopicParams.hoveredRadius}px`
    }
    return props.$isHovered
      ? `${circleTopicParams.hoveredRadius}px`
      : `${circleTopicParams.hiddenRadius}px`
  }};

  border-radius: 100%;
  border: ${(props) => {
    if (props.$isActive) {
      return `1px solid ${colors.border.tertiary}`
    }
    return props.$isHovered ? `1px solid ${colors.border.tertiary}` : ""
  }};
  background-color: ${(props) => {
    if (props.$isActive) {
      return colors.bg.primary
    }
    return props.$isHovered ? colors.bg.primary : colors.bg.tertiary
  }};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  line-height: 30px;
  color: ${(props) => {
    if (props.$isActive) {
      return colors.text.primary
    }
    return props.$isHovered ? colors.text.primary : "transparent"
  }};
  transition: all 0.4s;
  cursor: pointer;
`

export const Button = styled.button`
  position: relative;

  width: 50px;
  height: 50px;

  border: ${(props) =>
    props.disabled
      ? `1px solid ${colors.border.secondary}`
      : `1px solid ${colors.border.primary}`};
  border-radius: 100%;
  background-color: ${colors.bg.primary};
  &:hover {
    background-color: ${(props) => (props.disabled ? "" : colors.bg.secondary)};
  }

  @media (${media.sm}) {
    width: 35px;
    height: 35px;
  }
  @media (${media.min}) {
    width: 25px;
    height: 25px;
  }
  &::after {
    content: url(${(props) => (props.disabled ? arrowDis : arrow)});
    position: absolute;
    top: 50%;
    left: 50%;

    width: 10px;
    height: 14px;

    @media (${media.min}) {
      content: url(${(props) => (props.disabled ? arrowDis_mob : arrow_mob)});
      width: 6px;
      height: 16px;
    }
  }
`
export const PrevButton = styled(Button)`
  &::after {
    transform: ${(props) =>
      props.disabled
        ? "translate(-50%, -50%) rotate(180deg)"
        : "translate(-50%, -50%)"};
  }
`

export const NextButton = styled(Button)`
  &::after {
    transform: ${(props) =>
      !props.disabled
        ? "translate(-50%, -50%) rotate(180deg)"
        : "translate(-50%, -50%)"};
  }
`

export const TopicNav = styled.div`
  z-index: 1;

  max-width: max-content;

  margin-bottom: 56px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${media.md}) {
    position: absolute;
    margin-bottom: 0px;
    bottom: 20px;
    left: 20px;
    gap: 20px;
  }
`

export const NavButtons = styled.div`
  display: flex;
  gap: 20px;
  @media (${media.md}) {
    gap: 16px;
  }
  @media (${media.sm}) {
    gap: 8px;
  }
`

export const CurrentPage = styled.div`
  line-height: 20px;
  font-size: 16px;
  color: ${colors.text.primary};
`
