import styled from "styled-components";
import { VscBell } from "react-icons/vsc";
import { BsBookmark } from "react-icons/bs";

export const NavbarContainer = styled.div`
  top: 0;
  z-index: 4;
  width: 100%;
  border-bottom: solid 1px #eee;
  position: fixed;
  background-color: white;
`;
export const SagopaNavbar = styled.div`
  margin: 0px auto;
  width: 70%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  font-family: "GmarketSansBold";
`;
export const SagopaMainLink = styled.div`
  color: #55666f;
  font-size: 30px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-right: 10px;
  }
`;
export const SagopaShopLink = styled.div`
  font-size: 20px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-right: 10px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const SagopaChatLink = styled(SagopaShopLink)``;
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "GmarketSansLight";
  justify-content: right;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const SagopaSearch = styled.div`
  width: 40%;
  height: 30px;
  border: solid black 1px;
  border-radius: 30px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 30%;
    height: 20px;
    padding: 10px;
  }
  .search-icon {
    color: black;
    margin-left: 10px;
  }
`;
export const VscBellIcon = styled(VscBell)`
  width: 22px;
  height: 22px;
  @media screen and (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;
export const BsBookmarkIcon = styled(BsBookmark)`
  width: 20px;
  height: 20px;
  @media screen and (max-width: 1024px) {
    width: 18px;
    height: 18px;
  }
`;
export const SagopaAlertLink = styled.div`
  margin-left: 10px;
`;
export const SearchInput = styled.input`
  display: flex;
  justify-content: end;
  border: none;
  width: 100%;
`;
export const SagopaAuthLink = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
export const SagopaBookMarkLink = styled(SagopaAlertLink)``;
export const SagopaUploadButtonLink = styled.button`
  margin-left: 10px;
  background-color: #55666f;
  border-radius: 4px;
  color: white;
  width: 80px;
  height: 40px;
  font-size: 14px;
`;
export const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
`;

//모바일
export const MobileRightSection = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
  }
`;
