import React, { useState } from "react"

import { historicalPeriods } from "../../../constants/historicalPeriods"

import { ITopicSelectionProps } from "../../../types/HistoricalDates/TopicSelection"

import * as S from "./TopicSelectionStyles"

const TopicSelection: React.FC<ITopicSelectionProps> = ({
  handleTopicClick,
  activeIndex,
  topicCirclesRef,
  topicsRef,
  circleRef,
}) => {
  const [hoveredTopicCircle, setHoveredTopicCircle] = useState<null | number>(
    null
  )

  function nextPage() {
    handleTopicClick(activeIndex + 1)
  }

  function prevPage() {
    handleTopicClick(activeIndex - 1)
  }

  function handleMouseEnter(
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) {
    const target = e.target as HTMLButtonElement
    if (target === e.currentTarget) {
      setHoveredTopicCircle(index)
    }
  }

  function handleMouseLeave() {
    setHoveredTopicCircle(null)
  }

  return (
    <>
      <S.Circle ref={circleRef}>
        {historicalPeriods.map((period, index) => (
          <S.TopicCircle
            ref={(elem) => (topicCirclesRef.current[index] = elem)}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTopicClick(index)}
            $isActive={index === activeIndex}
            $index={index}
            key={period.topic}
          >
            <S.Topic
              ref={(elem) => (topicsRef.current[index] = elem)}
              onClick={(e) => e.stopPropagation()}
              $isActive={index === activeIndex}
            >
              {historicalPeriods[index].topic}
            </S.Topic>
            <S.Dot
              $isActive={activeIndex === index}
              $isHovered={hoveredTopicCircle === index}
            >
              {index + 1}
            </S.Dot>
          </S.TopicCircle>
        ))}
      </S.Circle>
      <S.TopicNav>
        <S.CurrentPage>
          0{activeIndex + 1}/0{historicalPeriods.length}
        </S.CurrentPage>
        <S.NavButtons>
          <S.PrevButton
            onClick={prevPage}
            disabled={activeIndex === 0}
          ></S.PrevButton>
          <S.NextButton
            onClick={nextPage}
            disabled={activeIndex === historicalPeriods.length - 1}
          ></S.NextButton>
        </S.NavButtons>
      </S.TopicNav>
    </>
  )
}

export default TopicSelection
