import React from "react"
import styled from "styled-components"
import { Conclusion } from "./screen/Conclusion"
import { Development } from "./screen/Development"
import { Introduction } from "./screen/Introduction"
import { Prolog } from "./screen/Prolog"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  font-family: "a-medium";
`
const Inner = styled.div`
  width: 100%;
  max-width: 1000px;
`

export const App = () => {
  return (
    <Container>
      <Inner>
        <img src="image/Title.png" alt="1" style={{ borderRadius: 10 }} />
        <Prolog />
        <Introduction />
        <Development />
        <Conclusion />
      </Inner>
    </Container>
  )
}
