import styled from "styled-components";

export const Container = styled.div`
  /* border: solid 1px black; */
  padding-top: 140px;
  width: 70%;
  margin: 0px auto;
`;
export const UserImageContainer = styled.div`
  /* border: solid 1px black; */
    width: 100%;
    height:200px;
    display: flex;
    justify-content: center;
`
export const Img = styled.img`
  /* border: solid 1px black; */
    width: 200px;
    height:200px;
    border-radius: 50%;
`
export const UserId = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const UserEmail = styled.div`
    display: flex;
    justify-content: center;
    font-family: "GmarketSansLight";
  font-size: 14px;
  color: gray;
  margin-top: 4px;
  margin-bottom: 20px;
`
export const BookMarkContainer = styled.div`
/* width: 100%; */
border: solid 1px black;
height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  border-top: solid 1px #eee;
  padding-top: 20px;
`
export const ProductBox = styled.div`
  /* border: solid 1px black; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
export const BookImg = styled.img` 
width: 100%;
height: 100%;
display: flex;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
border-radius: 4px;
  /* border: solid 1px black; */

`;
export const ProductText = styled.div`
  /* border: solid 1px white; */
  font-family: "GmarketSansMedium";
  font-size: 14px;
  color: gray;
  margin-top: 20px;
  width: 100%;
  /* height: 16px; */
  /* overflow: hidden; */
`;
export const NullText = styled.div`
  font-family: "GmarketSansMedium";
  width: 100%;
  font-size: 18px;
  color: gray;
  /* margin: 0px auto; */
  margin-top: 80px;
  border-top: solid 1px #eee;
  padding-top: 20px;
  display: flex;
justify-content: center;
`