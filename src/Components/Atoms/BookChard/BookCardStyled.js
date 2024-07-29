import styled from "styled-components";
import { Link } from "react-router-dom";

export const BookCardContainer = styled(Link)`
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 120px;
    border-radius: 0px;
    box-shadow: none;
    flex-direction: row; /* 모바일 환경에서는 가로 배열 */
    align-items: center; /* 센터 정렬 */
    position: none;
    display: flex;
    border-bottom: solid 1px #eee;
    padding-bottom: 20px;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    height: 240px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;
export const BookDetailsContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 80px;
  z-index: 2;
  margin-top: -80px;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  &:hover {
    height: 120px;
    margin-top: -120px;
    transition: 0.5s;
  }
  @media screen and (max-width: 768px) {
    margin-top: -70px;
    height: 70px;
    &:hover {
    height: 100px;
    margin-top: -100px;
    transition: 0.5s;
  }
  }
  @media screen and (max-width: 480px) {
    margin-left: 120px;
    width: 200px;
    height: 100%;
    margin-top: 0px;
    position: none;
    padding: 4px;
  }
`;

// 글자 styled
export const BookTitle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  @media screen and (max-width: 768px) {
  font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const BookLocation = styled.div`
  color: gray;
  margin-top: 10px;
  font-size: 12px;
  @media screen and (max-width: 768px) {
    margin: 4px 0px 10px 0px; 
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const BookPrice = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;
