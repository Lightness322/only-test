import { css } from "styled-components"
import { baseTheme } from "../../../baseTheme"
import arrowIcon from "../../../assets/arrow_slider.svg"

const { colors, media } = baseTheme

export const swiperStyles = css`
  .swiper {
    position: static;
  }
  .swiper-wrapper {
    position: static;
  }
  .swiper-slide {
    max-width: calc((100% - 160px) / 3);
    min-width: 300px;
    cursor: move;

    @media (${media.xl}) {
      max-width: calc((100% - 100px) / 3);
    }
    @media (${media.md}) {
      min-width: 240px;
    }
    @media (${media.sm}) {
      min-width: 200px;
    }
    @media (${media.min}) {
      min-width: 166px;
    }
  }
  .swiper-pagination {
    display: none;

    @media (${media.md}) {
      position: absolute;
      left: 50% !important;
      bottom: 40px !important;

      width: max-content !important;

      margin: 0 auto;

      display: flex;
      justify-content: center;
      gap: 10px;

      transform: translateX(-50%);
    }
    @media (${media.sm}) {
      bottom: 32px !important;
    }
  }
  .swiper-pagination-bullet {
    margin: 0px !important;

    background-color: ${colors.bg.bullet};
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: ${colors.bg.tertiary};
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;

    border-radius: 100%;
    background-color: ${colors.bg.secondary};

    @media (${media.md}) {
      display: none;
    }
  }
  .swiper-button-prev {
    left: 20px;
    @media (${media.xl}) {
      left: 30px;
    }
  }
  .swiper-button-next {
    right: 20px;
    @media (${media.xl}) {
      right: 30px;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    content: url(${arrowIcon});
    position: absolute;
    left: 50%;
    top: 50%;

    height: 10px;
    width: 5px;

    display: flex;
    align-items: center;

    font-size: 0px;
    transform: translate(-50%, -50%);
  }
  .swiper-button-prev::after {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  .swiper-button-disabled {
    display: none;
  }
`
