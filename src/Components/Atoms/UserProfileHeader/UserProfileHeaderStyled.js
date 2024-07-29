import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
export const UserPhoto = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
export const Infomation = styled.div`
  margin-left: 10px;
`;
export const UserId = styled.div`
  font-family: "GmarketSansBold";
  font-size: 18px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const UserLocation = styled.div`
  margin-top: 8px;
  font-family: "GmarketSansLight";
  font-size: 14px;
  color: gray;
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;