import styled from "styled-components";

export const Bg = styled.div`
  background-color: #d9d9d9;
  height: 600px;
  margin-top: 100px;
`
export const Bar = styled.div`
  width: 600px;
  height: 10px;
  background-color: #55666F;
  margin: 0 auto;
`
export const LoginContainer = styled.div`
  width: 600px;
  height: 500px;
  margin: 0 auto;
  background-color: white;
  padding: 70px 140px;
`
export const BolbText = styled.div`
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 500;
  font-family: "GmarketSansBold";
`
export const Text = styled.div`
  color: gray;
  font-size: 14px;
  margin-bottom: 4px;
  font-family: "GmarketSansLight";
`
export const Form = styled.div`
  margin-top: 40px;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 24px;
  font-family: "GmarketSansLight";

`
export const   LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #55666F;
  color: white;
  border-radius: 4px;
  font-size: 18px;
  margin-bottom: 24px;
  font-family: "GmarketSansLight";

`
export const SignupText = styled(Text)``

export const SignupButton = styled(LoginButton)`
  color: #55666F;
  background-color: white;
  border: solid 1px #55666F;
  font-family: "GmarketSansLight";

`
