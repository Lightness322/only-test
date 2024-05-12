import { useState } from "react"
import { useAnimateDates } from "../../hooks/useAnimateDates"

import TopicSelection from "./TopicSelection/TopicSelection"
import DatesSlider from "./DatesSlider/DatesSlider"

import { historicalPeriods } from "../../constants/historicalPeriods"

import { IPeriod } from "../../types/HistoricalDates/HistoricalPeriods"

import * as S from "./HistoricalDatesStyles"

const HistoricalDates: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState<IPeriod>(
    () => historicalPeriods[0]
  )

  const { targetIndex, handleAnimate, animationRefs } = useAnimateDates(
    activePeriod,
    setActivePeriod
  )

  const {
    circleRef,
    dateFromRef,
    dateToRef,
    swiperRef,
    topicCirclesRef,
    topicsRef,
    periodTopicRef,
  } = animationRefs

  return (
    <S.Container>
      <S.Title>
        Исторические
        <br />
        даты
      </S.Title>
      <S.FlexDates>
        <S.DateFrom ref={dateFromRef}>{activePeriod.from}</S.DateFrom>
        <S.DateTo ref={dateToRef}>{activePeriod.to}</S.DateTo>
      </S.FlexDates>
      <S.Topic ref={periodTopicRef}>{activePeriod.topic}</S.Topic>
      <TopicSelection
        handleTopicClick={handleAnimate}
        activeIndex={targetIndex.current}
        topicCirclesRef={topicCirclesRef}
        topicsRef={topicsRef}
        circleRef={circleRef}
      />
      <DatesSlider swiperRef={swiperRef} activePeriod={activePeriod} />
    </S.Container>
  )
}

export default HistoricalDates
