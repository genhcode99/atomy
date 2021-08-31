import React from "react"
import styled from "styled-components"

const Contatiner = styled.div`
  margin-top: 20px;
  width: 100%;
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
const ImgContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`

const ImgBox = styled.img`
  width: 450px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`

export const Prolog = () => {
  return (
    <Contatiner>
      <Subscription>
        대한민국 사람들의 환경에 대한 수준은 과거에 비하여 많은 발전을 이루었다.
        하지만 플라스틱에 대한 재활용률은 그 수준을 따라가지 못하고 있다.
        대한민국의{" "}
      </Subscription>
      <Emphasis>플라스틱 재활용 비율은 15%</Emphasis>{" "}
      <Subscription>
        나머지 85%의 플라스틱은 버려지거나 소각되고 있다.
      </Subscription>
      <img src="/image/15.png" alt="1" style={{ marginTop: 20 }} />
      <Subscription>플라스틱 재활용률이 낮은 이유는 첫 째로 </Subscription>
      <Emphasis2>방대한 플라스틱의 양</Emphasis2>{" "}
      <Subscription>때문이고, 두 번째로 각 제품에 맞는 </Subscription>
      <Emphasis2>분리배출 방법을 찾기 어렵다</Emphasis2>
      <Subscription>는 점이다.</Subscription>
      <ImgContainer>
        <ImgBox src="https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80" />
        <ImgBox src="/image/A.png" />
      </ImgContainer>
    </Contatiner>
  )
}
