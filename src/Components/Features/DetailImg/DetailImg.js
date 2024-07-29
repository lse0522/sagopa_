import React, { useState } from "react";
import {
  DetailImgContainer,
  ImageButtonContainer,
  ImageButtonNull,
  ImageButton,
  ImageContainer,
  Image,
  MobailButton,
  MobailImgButtons,
  Img,
  Container,
  MobailTopHeader,
} from "./DetailImgStyled";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function DetailImg({ productImages, imagelength }) {
  const navigate = useNavigate();

  const [number, setNumber] = useState(0);

  const ImageMoveRightClick = async () => {
    setNumber((prevNumber) => (prevNumber >= 3 ? 0 : prevNumber + 1));
    console.log("버튼클릭", number);
    console.log(imagelength);
  };
  const ImageMoveLeftClick = () => {
    setNumber((prevNumber) => prevNumber - 1);
    console.log("버튼클릭", number);
  };

  // 모바일 이미지 버튼 클릭 핸들러
  const handleMobailButtonClick = (index) => {
    setNumber(index);
    console.log("모바일 이미지 버튼 클릭", index);
  };
  const BackButton = () => {
    navigate(-1);
  }
  const HomeButton = () => {
    navigate('/shop');
  }

  return (
    <Container>
      <DetailImgContainer>
        {number === 0 ? (
          <ImageButtonContainer>
            <ImageButtonNull></ImageButtonNull>
          </ImageButtonContainer>
        ) : (
          <ImageButtonContainer>
            <ImageButton onClick={ImageMoveLeftClick}>
              <FaChevronLeft />
            </ImageButton>
          </ImageButtonContainer>
        )}

        <ImageContainer>
          {productImages.map((url, index) => (
            <Image key={index} number={number} imagelength={imagelength}>
              <Img src={url} alt={`Product Image ${index}`} />
            </Image>
          ))}
        </ImageContainer>

        {number === imagelength - 1 ? (
          <ImageButtonContainer>
            <ImageButtonNull></ImageButtonNull>
          </ImageButtonContainer>
        ) : (
          <ImageButtonContainer>
            <ImageButton onClick={ImageMoveRightClick}>
              <FaChevronRight />
            </ImageButton>
          </ImageButtonContainer>
        )}
        {imagelength > 1 ? (
          <MobailImgButtons>
            {Array.from({ length: imagelength }, (_, index) => (
              <MobailButton
                key={index}
                onClick={() => handleMobailButtonClick(index)}
              ></MobailButton>
            ))}
          </MobailImgButtons>
        ) : null}
      </DetailImgContainer>
    </Container>
  );
}
export default DetailImg;
