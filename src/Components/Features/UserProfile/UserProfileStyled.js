import styled from "styled-components";

export const Container = styled.div`
  border: solid 1px #d9dce0;
  border-radius: 4px;
  padding: 20px;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    border: none;
    padding: 0px;
    height: auto;
    display: flex;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    border: none;
    padding: 0px;
    padding-top: 20px;
    display: flex;
    width: 100%;
    position: relative;
  }
`;
export const Box = styled.div`
  @media screen and (min-width: 601px) and (max-width: 900px) {
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
  }
`;
export const UserImageConainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;
export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;
export const AccountInfoConainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    display: flex;
    align-items: flex-start;
    height: 50px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    /* border: solid 1px #d9dce0; */
    width: 100%;
    align-items: flex-start;
    margin-left: 20px;
  }
`;
export const UserId = styled.div`
  font-family: "GmarketSansBold";
  font-size: 24px;
  margin-bottom: 14px;
  margin-top: 10px;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const UserEmail = styled.div`
  font-family: "GmarketSansMedium";
  color: gray;
  margin-bottom: 40px;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: row;
    height: auto;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    position: absolute;
    width: 100%;
    height: 100px;
    margin-top: 380px;
    margin-left: -70px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const EditProfileButton = styled.button`
  background-color: #55666f;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-family: "GmarketSansBold";
  font-size: 18px;
  color: white;
  margin-bottom: 20px;

  @media screen and (min-width: 601px) and (max-width: 900px) {
    width: 100px;
    height: 30px;
    font-size: 14px;
    margin-right: 20px;
    margin-top: 18px;
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 46%;
    height: 30px;
    font-size: 14px;
  }
`;
export const SignupButton = styled.button`
  font-family: "GmarketSansBold";
  font-size: 18px;
  width: 100%;
  height: 40px;
  color: #55666f;
  background-color: white;
  border-radius: 4px;
  border: solid 1px #55666f;
  margin-bottom: 20px;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    width: 100px;
    height: 30px;
    font-size: 14px;
    margin-top: 18px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 46%;
    height: 30px;
    font-size: 14px;
  }
`;
