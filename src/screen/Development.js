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
const SubTitle = styled.h3`
  font-family: a-medium;
  font-size: 22px;
  color: #0099fe;
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

export const Development = () => {
  return (
    <Container>
      <Title> Alternative 1 : 종이포장</Title>
      <SubTitle>음료류</SubTitle>
      <img src="/image/음료.png" alt="1" />
      <Subscription>
        음료류의 비닐포장을 유통기한이 비교적 짧은 코딩된{" "}
        <Emphasis>종이팩포장으로 변경</Emphasis>할 시 그 종이팩은{" "}
        <Emphasis>휴지</Emphasis>로 재생산 될 수 있고, 유통기한이 긴 알류미늄을
        사용한 멸균종이팩을 사용할 경우 <Emphasis>종이 박스</Emphasis>로 재생산
        될 수 있다.
      </Subscription>
      <SubTitle style={{ marginTop: 20, marginBottom: 20 }}>
        습기없는 식품류
      </SubTitle>
      <img src="/image/식품.png" alt="1" />
      <Subscription>
        식품류의 비닐포장을 <Emphasis>종이포장</Emphasis>으로 변경할 시 그
        종이포장은 <Emphasis>휴지</Emphasis>로 재생산 될 수 있다.
      </Subscription>

      <Title> Alternative 2 : 분리배출 가이드</Title>
      <img src="/image/그림.png" alt="1" />
      <Subscription>
        각 제품에 맞는 분리방법을 만화의 형식을 빌려 설명 함으로써 구매자의
        분리배출이 쉬워진다.
      </Subscription>
    </Container>
  )
}
