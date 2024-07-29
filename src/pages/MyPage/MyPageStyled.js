import styled from "styled-components";

export const DetailHeader = styled.div`
  width: 70%;
  margin: 0px auto;
  height: 80px;
  font-family: "GmarketSansMedium";
  font-size: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-top: 100px;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    width: 80%;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
export const Container = styled.div`
  margin: 0px auto;
  width: 70%;
  display: grid;
  grid-template-columns: 30% 70%;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
  margin-top: 60px;
  width: 90%;
  display: flex;
  flex-direction: column;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
