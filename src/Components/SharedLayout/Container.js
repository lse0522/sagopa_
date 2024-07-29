import styled from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  width: 70%;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    padding-bottom: 60px;
    padding-top: 60px;
  }
`;
