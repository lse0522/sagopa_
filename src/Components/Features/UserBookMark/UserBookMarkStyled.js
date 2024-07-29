import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50%;
  padding-left: 100px;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    padding-left: 0px;
    margin-top: 40px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    /* border: solid 1px gray; */
    padding-left: 0px;
    margin-top: 0px;

  }
`;
export const UserFavoritesList = styled.div`
  border: solid 1px gray;
  width: 100%;
  height: 180px;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  overflow: hidden;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    border: none;
    height: 140px;
  }
`;
export const ProductBox = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 0px;
    padding-right: 10px;
  }
`;
export const Img = styled.img`
  width: 100px;
  height: 130px;
  border-radius: 4px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 80px;
    height: 100px;
  }
`;
export const ProductText = styled.div`
  border: solid 1px white;
  font-family: "GmarketSansMedium";
  font-size: 14px;
  color: gray;
  margin-top: 4px;
  width: 100%;
  height: 16px;
  overflow: hidden;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    height: 14px;
  }
`;
export const NullText = styled.div`
  font-family: "GmarketSansMedium";
  font-size: 18px;
  color: gray;
  margin: 0px auto;
  margin-top: 80px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 40px;
    font-size: 14px;
  }
`;
