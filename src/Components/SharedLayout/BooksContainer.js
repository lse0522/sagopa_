import styled from "styled-components";

export const BooksContainer = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px 20px;

  @media screen and (max-width: 768px) {
  gap: 20px 20px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px 0px;
  }
`;
