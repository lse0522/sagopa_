import styled from "styled-components";

export const TopSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
export const UploadContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: none;
  }
`;
export const UloadButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #55666f;
  border-radius: 4px;
  color: white;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
export const LeftSection = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 4%;
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    grid-template-columns: 30% 70%;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    border: solid 1px black;
    height: 100px;
    display: flex;
  }
`;
export const ImagePreview = styled.div`
  grid-template-rows: 1fr 1fr 1fr 1fr;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
  grid-template-rows: none;
  }
`;
export const MiniPreview = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    border: solid 1px black;
    display: flex;
    flex-direction: row;
  }
`;
export const MiniContainerPlus = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  border: dashed 1px gray;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: grid;
  }
`;
export const ImageContainer = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: #f5f5f5;
  .photo-icon {
    width: 30px;
    height: 30px;
    margin: 10px 0px;
    color: gray;
  }
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    width: 220px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const RightSection = styled.div`
  display: grid;
  width: 100%;
  height: 430px;
  padding-left: 200px;
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    padding-left: 100px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const PostCreationContainer = styled.input`
  width: 100%;
  height: 40px;
  border: solid 1px #cfcfcf;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
  }
`;
export const PostInputBox = styled.textarea`
  width: 100%;
  height: 180px;
  border: solid 1px #cfcfcf;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  color: gray;
  display: flex;
  padding: 10px;
  
  @media only screen and (min-width: 320px) and (max-width: 480px) {
  }
`;
export const Select = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #cfcfcf;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
