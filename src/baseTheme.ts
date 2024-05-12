import { historicalPeriods } from "./constants/historicalPeriods"

const totalPeriods = historicalPeriods.length
const minArc = 360 / totalPeriods
const coefficient = Math.floor(minArc / 90) * 2
const initialDegree = minArc / (2 + coefficient)

export const baseTheme = {
  colors: {
    bg: {
      primary: "#f4f5f9",
      secondary: "#fff",
      tertiary: "#42567A",
      bullet: "#adb5c6",
    },
    border: {
      primary: "#42567A80",
      secondary: "#C7CDD9",
      tertiary: "#303E5880",
    },
    line: {
      primary: "#e2e5ec",
    },
    text: {
      primary: "#42567A",
      blue: "#3877EE",
      blue_purple: "#5d5fef",
      pink: "#ef5da8",
    },
  },
  media: {
    xxxl: "(max-width: 1759px)",
    xxl: "(max-width: 1479px)",
    xl: "(max-width: 1279px)",
    lg: "(max-width: 1023px)",
    md: "(max-width: 767px)",
    sm: "(max-width: 479px)",
    min: "(max-width: 374px)",
  },
  circleParams: {
    totalPeriods,
    radius: 265,
    degree: initialDegree,
  },
  circleTopicParams: {
    hoveredRadius: 56,
    hiddenRadius: 6,
  },
} as const
