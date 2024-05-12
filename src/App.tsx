import React from "react"

import HistoricalDates from "./components/HistoricalDates/HistoricalDates"

import GlobalStyles from "./globalStyles"
import * as S from "./AppStyles"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <S.Container>
        <HistoricalDates />
      </S.Container>
    </>
  )
}
export default App
