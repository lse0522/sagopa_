import { useEffect, useState } from "react";
import { firestore, auth } from "../../../firebase";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

import {
  Container,
  ChatListDisplay,
  ChatMateUserImage,
  ChatRight,
  ChatTitle,
  ChatText,
  NullText,
  ChatListBox,
} from "./ChatListStyled";
import { MediumText, SSmallText } from "../../TextStyles";

function ChatList({
  myuid,
  setChatRoomId,
  setChatMateUid,
  setChatCreateDate,
  lastmessage,
}) {
  // 채팅방 리스트
  const [allchatroomdata, setAllChatRoomData] = useState([]); // 채팅방 다 불러오기
  const [mychatroomlist, setMyChatRoomList] = useState([]); // 내 채팅방만 불러오기

  const [mobaillink, setMobailLink] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 320 && width <= 480) {
        setMobailLink(true);
      } else {
        setMobailLink(false);
      }
    };

    checkScreenSize(); // 초기 마운트 시 실행
    window.addEventListener("resize", checkScreenSize); // 윈도우 크기 변화 시 실행

    return () => {
      window.removeEventListener("resize", checkScreenSize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  // 채팅방 다 가져오기?
  useEffect(() => {
    const fetchChatrooms = async () => {
      try {
        const querySnapshot = await firestore.collection("chatroom").get();
        const chatroomsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllChatRoomData(chatroomsData);
      } catch (err) {
        console.log("chatroom 불러오기 에러 : ", err);
      }
    };
    fetchChatrooms();
  }, []);
  // 내 채팅방만 가져오기
  useEffect(() => {
    const chatroomfilter = allchatroomdata.filter(
      (chatroomdata) =>
        chatroomdata.who[0].myuid === myuid ||
        chatroomdata.who[0].chatmateuid === myuid
    );
    setMyChatRoomList(chatroomfilter);
    console.log(chatroomfilter);
  }, [allchatroomdata]);
  // 날짜
  const formatDate = (timestamp) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  // 채팅방 클릭
  const handleChatClick = (chatroomId) => {
    setChatRoomId(chatroomId);
    const chatroomfind = mychatroomlist.find(
      (chatroom) => chatroom.id === chatroomId
    );
    setChatMateUid(chatroomfind.who[0].chatmateuid);
    if (chatroomfind.who[0].myuid === myuid) {
      setChatMateUid(chatroomfind.who[0].chatmateuid);
    } else if (chatroomfind.who[0].chatmateuid === myuid) {
      setChatMateUid(chatroomfind.who[0].myuid);
    }
    setChatCreateDate(formatDate(chatroomfind.chatRoomCreateDate));
  };

  return (
    <Container>
      {mychatroomlist.length === 0 ? (
        <NullText>아직 채팅을 하지 않으셨어요!</NullText>
      ) : (
        <>
          {mychatroomlist.map((mychatroomlist, index) => (
            <ChatListDisplay
              key={index}
              onClick={() => handleChatClick(mychatroomlist.id)}
            >
              {mobaillink === true ? (
                <Link to={`/chatroom?id=${mychatroomlist.id}`}>
                  <ChatListBox>
                    <ChatMateUserImage />
                    <ChatRight>
                      <ChatTitle>
                        <MediumText>{mychatroomlist.productTitle}</MediumText>
                      </ChatTitle>
                      <ChatText>
                        <SSmallText>{lastmessage}</SSmallText>
                      </ChatText>
                    </ChatRight>
                  </ChatListBox>
                </Link>
              ) : (
                <ChatListBox>
                  <ChatMateUserImage />
                  <ChatRight>
                    <ChatTitle>
                      <MediumText>{mychatroomlist.productTitle}</MediumText>
                    </ChatTitle>
                    <ChatText>
                      <SSmallText>{lastmessage}</SSmallText>
                    </ChatText>
                  </ChatRight>
                </ChatListBox>
              )}
            </ChatListDisplay>
          ))}
        </>
      )}
    </Container>
  );
}
export default ChatList;
