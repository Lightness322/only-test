import { RefObject } from "react"
import { SwiperRef } from "swiper/react"

import { IPeriod } from "./HistoricalPeriods"

export interface IDatesSliderProps {
  activePeriod: IPeriod
  swiperRef: RefObject<SwiperRef>
}
