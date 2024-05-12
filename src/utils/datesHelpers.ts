import { baseTheme } from "../baseTheme"

const { totalPeriods } = baseTheme.circleParams

export function getAnimationParams(activeIndex: number, targetIndex: number) {
  let degree
  let arcCount

  if (activeIndex > targetIndex) {
    arcCount = Math.min(
      activeIndex - targetIndex,
      targetIndex + totalPeriods - activeIndex
    )
    arcCount = arcCount === activeIndex - targetIndex ? -arcCount : arcCount

    degree = -arcCount * (360 / totalPeriods)
  } else {
    arcCount = Math.min(
      targetIndex - activeIndex,
      activeIndex + totalPeriods - targetIndex
    )
    arcCount = arcCount === targetIndex - activeIndex ? arcCount : -arcCount

    degree = -arcCount * (360 / totalPeriods)
  }

  const animationDuration = 0.3 * Math.abs(arcCount)

  return { degree, animationDuration }
}
