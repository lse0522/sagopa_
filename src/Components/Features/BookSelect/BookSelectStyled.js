import styled from "styled-components";

export const Select = styled.select`
  width: 30%;
  height: 40px;
  margin: 20px 0px;
  border-radius: 4px;
  border: solid 1px #cfcfcf;
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    display: none;
  }
  @media only screen and (min-width: 901px) {
    display: none;
  }
`;