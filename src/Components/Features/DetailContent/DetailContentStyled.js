import styled from "styled-components";

export const DetailContentContainer = styled.div`
  width: 100%;
  height: 300px;
  padding-left: 40px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding-left: 0px;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    margin: 0px auto;
    border-top: solid 1px #eee;
  }
`;
export const PostTitle = styled.div`
  display: flex;
  font-size: 20px;
  height: auto;
  font-family: "GmarketSansBold";
  padding: 40px 20px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    font-size: 18px;
    padding: 30px 0px;
  }
`;
export const PostPrice = styled.div`
  height: 40px;
  display: flex;
  padding: 20px;
  align-items: center;
  font-size: 24px;
  font-family: "GmarketSansBold";
  justify-content: flex-end;
  color: #55666f;
  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding: 0px;
  }
`;
export const PostContent = styled.div`
  height: 160px;
  font-family: "GmarketSansMedium";
  border: solid 1px gray;
  padding: 10px;
  margin: 20px;
  @media screen and (max-width: 1024px) {
    border: none;
    padding: 10px;
    margin: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 0px;
    margin: 0px;
    height: auto;
  }
`;
export const EditButton = styled.button``;
export const Text = styled.div`
  font-family: "GmarketSansMedium";
  display: flex;
  margin-right: 10px;
  color: gray;
  font-size: 14px;
  align-items: center;
`;
export const BoookMark = styled.div`
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
export const PostBottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 60px;
    border-top: solid 1px #eee;
    position: fixed;
    bottom: 0;
    margin: 0px auto;
  }
`;
export const ChatButton = styled.button`
  background-color: #55666f;
  border-radius: 4px;
  font-size: 28px;
  padding: 20px 0px;
  width: 100%;
  color: white;
  font-family: "GmarketSansMedium";
  font-weight: 800;
  float: right;
  margin: 20px;
  @media screen and (max-width: 1024px) {
    margin: 40px 20px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
    width: 200px;
    padding: 10px 0px;
  font-size: 14px;
  }
`;
export const PostInfoSection = styled.div`
  font-family: "GmarketSansMedium";
  color: gray;
  font-size: 14px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    margin-top: 60px;
    margin-bottom: 40px;
    padding: 0px;
    font-size: 10px;
  }
`;
export const ViewCountContainer = styled.div``;
export const ComplaintFormContainer = styled.div`
  text-decoration: underline;
`;
export const MobailBottomContainer = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
padding: 10px 0px;
/* border: solid 1px black; */
background-color: white;
margin: 0px auto;
`;
