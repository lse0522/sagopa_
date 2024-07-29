import {
  DetailContentContainer,
  PostTitle,
  PostContent,
  ChatButton,
  PostBottom,
  PostPrice,
  PostInfoSection,
  ViewCountContainer,
  ComplaintFormContainer,
  MobailBottomContainer,
} from "./DetailContentStyled";
import React, { useState, useEffect } from "react";
import { SmallText } from "../../TextStyles";
import { Link } from "react-router-dom";
import { firestore } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { BottomContainer } from "../../../pages/Detail/DetailStyled";

function DetailContent({ product, productuseruid, myuid, chatmateuid }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 481);

  // 채팅방 생성
  const handleChatroomButton = async () => {
    try {
      // chatroom 컬렉션에 새로운 문서를 추가합니다.
      await addDoc(collection(firestore, "chatroom"), {
        who: [{myuid : myuid, chatmateuid :  product.uid}],
        product:  product.title,
        date: new Date(),
        // 필요한 경우 추가 데이터를 여기에 포함할 수 있습니다.
      });
      console.log("채팅방이 생성되었습니다.");
    } catch (error) {
      console.error("채팅방 생성 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 481);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DetailContentContainer>
      <PostTitle>{product?.title}</PostTitle>
      {isMobile ? null : (
        <PostPrice>{Number(product?.price).toLocaleString()} 원</PostPrice>
      )}
      <PostContent>{product?.content}</PostContent>
      <PostInfoSection>
        <ViewCountContainer>조회수 : 7</ViewCountContainer>
        <ComplaintFormContainer>이 게시글 신고하기</ComplaintFormContainer>
      </PostInfoSection>
      <PostBottom>
        {isMobile ? (
          <MobailBottomContainer>
            <PostPrice>{Number(product?.price).toLocaleString()} 원</PostPrice>
            {myuid === productuseruid ? (
              <ChatButton>
                <Link to="/chat">
                  <SmallText>대화 중인 채팅방</SmallText>
                </Link>
              </ChatButton>
            ) : (
              <ChatButton onClick={handleChatroomButton}>
                <Link to="/chat">
                  <SmallText>채팅 하기</SmallText>
                </Link>
              </ChatButton>
            )}
          </MobailBottomContainer>
        ) : null}
        {isMobile ? null : (
          <>
            {myuid === productuseruid ? (
              <ChatButton>
                <Link to="/chat">
                  <SmallText>대화 중인 채팅방</SmallText>
                </Link>
              </ChatButton>
            ) : (
              <ChatButton onClick={handleChatroomButton}>
                <Link to="/chat">
                  <SmallText>채팅 하기</SmallText>
                </Link>
              </ChatButton>
            )}
          </>
        )}
      </PostBottom>
    </DetailContentContainer>
  );
}
export default DetailContent;
