import { createGlobalStyle } from "styled-components"
import { baseTheme } from "./baseTheme"
import { swiperStyles } from "./components/HistoricalDates/DatesSlider/SwiperStyles"

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    border: 0;
  }
  body,
  #root {
    overflow-x: hidden;
    font-family: 'PT sans';
    min-height: 100vh;
    background-color: ${baseTheme.colors.bg.primary};
  }
  button {
    cursor:pointer
  }
  ${swiperStyles}
`
