import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    height: 500px;
  }
  @media screen and (max-width: 480px) {
    height: 380px;
  }
`;
export const DetailImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 700px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;
export const ImageButtonContainer = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  margin-right: -30px;
  z-index: 2;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const ImageButtonNull = styled.div`
  width: 30px;
`;
export const ImageButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: gray;
  opacity: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: -15px;
`;
export const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 700px;
  @media screen and (max-width: 480px) {
    width: 100%;
    positon: relative;
  }
`;
export const Image = styled.div`
  transition: all 1s;
  transform: ${(props) => `translateX(${props.number * -100}vw)`};
  @media screen and (max-width: 480px) {
    transition: all 1s;
    transform: ${(props) => {
      if (props.number < props.imagelength) {
        return `translateX(-${100 * props.number}vw)`;
      }
      return "none";
    }};
  }
`;
export const Img = styled.img`
  width: 100vw;
  /* width: 100%; */
  height: 500px;
  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vw;
    border-radius: 0px;
  }
`;

export const MobailImgButtons = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    position: absolute;
    z-index: 2;
    margin-top: 94vw;
    justify-content: center;
    /* align-items: center; */
  }
`;
export const MobailButton = styled.button`
  width: 8px;
  height: 8px;
  background-color: white;
  opacity: 50%;
  border-radius: 50%;
  margin-right: 8px;
`;

export const MobailUserInpormation = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 90%;
    height: 60px;
    margin: 0px auto;
    align-items: center;
  }
`;
export const MobailTopHeader = styled.div`
  /* border: solid 1px black; */
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 4;
  padding: 0px 10px;
`;
