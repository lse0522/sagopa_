import styled from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  width: 70%;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    height: auto;
    display: block;
    padding-top: 0px;
  }
`;

export const DetailContainer = styled.div`
  margin: 0px auto;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 500px;
  border: solid 1px #eee;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    height: auto;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 100%;
    border: none;
    margin-top: 0px;
  }
`;
