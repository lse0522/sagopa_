import styled from "styled-components";

export const TwoContainer = styled.div`
  margin: 0px auto;
  width: 70%;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 30% 70%;
  height: 700px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    width: 100%;
  height: 100vw;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    padding-top: 60px;
    padding-bottom: 60px;
    box-shadow: none;
  grid-template-columns: 100%;
  }
`;
