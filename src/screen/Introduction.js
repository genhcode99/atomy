import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 100px;
`
const Title = styled.h2`
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
const Emphasis2 = styled.span`
  font-family: a-light;
  font-size: 25px;
  color: #ff3333;
`

export const Introduction = () => {
  return (
    <Container>
      <Title>Atomy Product</Title>
      <img
        src="../image/atomyproduct.png"
        alt="1"
        style={{ marginBottom: 20 }}
      />
      <Subscription>
        애터미의 상품들은 구매자의 편의성을 위하여{" "}
        <Emphasis>한 가지 상품</Emphasis>을 사용기간으로, 일정 용량으로{" "}
        <Emphasis>나누어 포장</Emphasis>을 하였다. 그로 인하여{" "}
        <Emphasis2>작은 플라스틱 조각</Emphasis2>의 쓰레기와{" "}
        <Emphasis2>비닐류 쓰레기</Emphasis2>가 발생한다. 작은 플라스틱은
        재활용이 어렵고, 비닐류 쓰레기는 일부지역에서는 일반 쓰레기로 취급되어
        버려진다.
      </Subscription>
    </Container>
  )
}
