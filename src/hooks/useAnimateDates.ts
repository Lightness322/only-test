import { useRef, useState } from "react"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { MotionPathPlugin, TextPlugin } from "gsap/all"

import { IPeriod } from "../types/HistoricalDates/HistoricalPeriods"
import { SwiperRef } from "swiper/react"

import { historicalPeriods } from "../constants/historicalPeriods"
import { baseTheme } from "../baseTheme"
import { getAnimationParams } from "../utils/datesHelpers"

gsap.registerPlugin(MotionPathPlugin, TextPlugin)

const { degree: initialDegree, totalPeriods, radius } = baseTheme.circleParams

export function useAnimateDates(
  activePeriod: IPeriod,
  setActivePeriod: (period: IPeriod) => void
) {
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const dateFromRef = useRef<HTMLHeadingElement>(null)
  const dateToRef = useRef<HTMLHeadingElement>(null)

  const periodTopicRef = useRef<HTMLHeadingElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const topicCirclesRef = useRef<HTMLButtonElement[]>([])
  const topicsRef = useRef<HTMLSpanElement[]>([])

  const swiperRef = useRef<SwiperRef>(null)

  const activePeriodIndex = historicalPeriods.findIndex(
    (period) => period.topic === activePeriod.topic
  )

  const targetIndex = useRef(activePeriodIndex)

  function handleAnimate(index: number) {
    if (isAnimating) return

    targetIndex.current = index

    if (targetIndex.current !== activePeriodIndex) {
      setIsAnimating(true)
    }
  }

  useGSAP(() => {
    if (isAnimating) {
      const { degree, animationDuration } = getAnimationParams(
        activePeriodIndex,
        targetIndex.current
      )

      const newPeriod = historicalPeriods.find(
        (_, i) => i === targetIndex.current
      )

      const dateFrom = newPeriod.from
      const dateTo = newPeriod.to

      gsap.to(dateFromRef.current, {
        duration: animationDuration,
        innerHTML: dateFrom.toFixed(0),
        onComplete: () => {
          setActivePeriod(newPeriod)
          setIsAnimating(false)
        },
        modifiers: {
          innerHTML: function (i) {
            return Math.round(i)
          },
        },
      })

      gsap.to(dateToRef.current, {
        duration: animationDuration,
        innerHTML: dateTo.toFixed(0),
        onComplete: () => {
          setActivePeriod(newPeriod)
          setIsAnimating(false)
        },
        modifiers: {
          innerHTML: function (i) {
            return Math.round(i)
          },
        },
      })

      gsap
        .timeline()
        .to([swiperRef.current, periodTopicRef.current], {
          duration: animationDuration,
          opacity: 0,
          transform: "translateY(10px)",
        })
        .to([swiperRef.current, periodTopicRef.current], {
          duration: animationDuration / 2,
          opacity: 1,
          transform: "translateY(0px)",
        })

      gsap.to(circleRef.current, {
        transformOrigin: `center ${radius}px`,
        rotation: `+=${degree}`,
        duration: animationDuration,
        ease: "none",
      })

      gsap.to(topicCirclesRef.current, {
        rotation: `-=${degree}`,
        duration: animationDuration,
        ease: "none",
      })

      gsap
        .timeline()
        .to(topicsRef.current[targetIndex.current], {
          duration: 0,
          opacity: 0,
        })
        .to(topicsRef.current[targetIndex.current], {
          duration: animationDuration,
          opacity: 0,
        })
        .to(topicsRef.current[targetIndex.current], {
          duration: animationDuration / 2,
          opacity: 1,
        })

      gsap
        .timeline()
        .to(topicsRef.current[activePeriodIndex], {
          duration: 0,
          opacity: 1,
        })
        .to(topicsRef.current[activePeriodIndex], {
          duration: animationDuration / 2,
          opacity: 0,
        })
    }
  }, [isAnimating])

  const animationRefs = {
    circleRef,
    dateFromRef,
    dateToRef,
    topicCirclesRef,
    topicsRef,
    swiperRef,
    periodTopicRef,
  }

  return {
    targetIndex,
    setIsAnimating,
    isAnimating,
    animationRefs,
    handleAnimate,
  }
}
