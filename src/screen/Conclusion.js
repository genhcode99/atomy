import React from "react"
import styled from "styled-components"

const Container = styled.div``
const Title = styled.h2`
  margin-top: 100px;
  font-family: a-bold;
  font-size: 25px;
  color: #0099fe;
  margin-bottom: 20px;
`
const Subscription = styled.span`
  font-family: a-light;
  font-size: 18px;
  line-height: 180%;
`
const Emphasis = styled.span`
  font-family: a-light;
  font-size: 25px;
  color: #0099fe;
`

export const Conclusion = () => {
  return (
    <Container>
      <Title>Conclusion</Title>
      <Subscription>
        위의 두 가지 대안으로 애터미의 좋은 상품과 구매자를 고려한 편의성과
        더불어 <Emphasis>건강한 바다</Emphasis>를 만들 수 있을 것이다.
      </Subscription>
    </Container>
  )
}
