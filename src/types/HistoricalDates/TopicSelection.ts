import { RefObject } from "react"

export interface ITopicSelectionProps {
  handleTopicClick: (index: number) => void
  activeIndex: number
  topicCirclesRef: RefObject<HTMLButtonElement[]>
  topicsRef: RefObject<HTMLSpanElement[]>
  circleRef: RefObject<HTMLDivElement>
}
