import { useEffect } from "react"

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

import { Navigation, FreeMode, Pagination } from "swiper/modules"

import { IDatesSliderProps } from "../../../types/HistoricalDates/DatesSlider"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import * as S from "./DatesSliderStyles"

export default function DatesSlider({
  activePeriod,
  swiperRef,
}: Readonly<IDatesSliderProps>) {
  useEffect(() => {
    const historicalDatesContainer = (swiperRef.current as Element & SwiperRef)
      .parentElement.parentElement

    const pagination = Array.from(
      (swiperRef.current as Element & SwiperRef).children
    ).filter((elem) => elem.className.includes("swiper-pagination"))[0]

    if (!pagination) return

    historicalDatesContainer.appendChild(pagination)
  }, [])

  return (
    <S.Container>
      <Swiper
        ref={swiperRef}
        spaceBetween={25}
        slidesPerView={"auto"}
        navigation={true}
        pagination={{ clickable: true }}
        freeMode={true}
        modules={[Pagination, FreeMode, Navigation]}
        breakpoints={{
          1281: { spaceBetween: 80 },
          1025: { spaceBetween: 50 },
        }}
      >
        {activePeriod.events.map((event) => (
          <SwiperSlide key={event.year}>
            <S.Event>
              <S.Year>{event.year}</S.Year>
              <S.Description>{event.description}</S.Description>
            </S.Event>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  )
}
