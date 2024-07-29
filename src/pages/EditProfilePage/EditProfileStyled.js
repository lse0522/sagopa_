import styled from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  margin-top: 100px;
  width: 50%;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    width: 70%;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    margin-top: 60px;
    padding-bottom: 60px;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const From = styled.div`
  width: 100%;
  margin-top: 40px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 20px;
  }
`;
export const RedText = styled.div`
  font-family: "GmarketSansLight";
  font-size: 12px;
  color: red;
`;
export const InputFrom = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Text = styled.div`
  width: 120px;
  font-family: "GmarketSansMedium";
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 200px;
  height: 40px;
  border: solid 1px gray;
  border-radius: 4px;
  margin-right: 20px;
  padding-left: 10px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-top: 10px;
    margin-right: 0px;
  }
`;
export const Select = styled.select`
  width: 200px;
  height: 40px;
  margin-left: 20px;
`;
export const ImgFile = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    /* justify-content: center; */
    /* width: 200px;
    height: 200px; */
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const EditProfileSend = styled.div`
  background-color: #55666f;
  width: 45%;
  height: 40px;
  border-radius: 4px;
  font-family: "GmarketSansBold";
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
export const ChangePw = styled.div`
  font-family: "GmarketSansBold";
  font-size: 18px;
  width: 45%;
  height: 40px;
  color: #55666f;
  background-color: white;
  border-radius: 4px;
  border: solid 1px #55666f;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
