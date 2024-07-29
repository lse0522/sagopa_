import { useEffect, useState } from "react";
import { firestore, auth } from "../../../firebase";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { MediumText, SSmallText } from "../../TextStyles";
import { FiSend } from "react-icons/fi";

import {
  Container,
  ChatRoomHeader,
  ChatMateUserImage,
  ChatTitle,
  ChatRoomDate,
  MessageContainer,
  MessageInputContainer,
  MessageInput,
  MessageSendButton,
  Box,
  NullText,
  Text,
  Messagescontainer,
  MessageText,
  Messagetime,
} from "./ChatRoomStyled";

function ChatRoom({   myuid, chatroomid, chatmateuid ,chatcreatedate, setLastMessage}) {

  // 상대방 아이디,
  const [chatmateid, setChatMateId] = useState("");

  // 메세지 입력
  const [messageinputvalue, setMessageInputValue] = useState("");

  // 내 메세지, 상대방 메세지
  const [mymessages, setMyMessages] = useState([]);

  // 시간
  const formatTime = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Timestamp를 Date 객체로 변환
    return new Intl.DateTimeFormat("ko-KR", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true, // 12시간 형식으로 표시 (예: 오전/오후)
    }).format(date);
  };

  // 채팅방 메세지
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (!chatroomid) {
          return;
        }
        const messageRef = doc(firestore, "chatroom", chatroomid);
        const messagesRef = collection(messageRef, "messages");

        // 쿼리에 정렬 조건 추가
        const messagesQuery = query(messagesRef, orderBy("date", "asc")); // 가장 오래된 메시지부터

        const querySnapshot = await getDocs(messagesQuery);
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMyMessages(messagesData);
        setLastMessage(messagesData[messagesData.length -1].messageinputvalue)
      } catch (err) {
        console.error("chatroom 메시지 불러오기 에러: ", err);
      }
    };
    fetchMessages();
  }, [chatroomid]);

  // 상대 아이디 가져오기
  useEffect(() => {
    const fetchusersid = async () => {
      try {
        const querySnapshot = await firestore.collection("users").get();
        querySnapshot.forEach((doc) => {
          if (doc.id === chatmateuid) {
            setChatMateId(doc.data().id);
          }
        });
      } catch (error) {
        console.error("Error getting users: ", error);
      }
    };
    if (chatmateuid) {
      fetchusersid();
    }
  }, [chatmateuid]);

  const onMessageInput = (e) => {
    setMessageInputValue(e.target.value);
  };

  const onSendButtonClick = async () => {
    const date = new Date();

    const chatroomRef = doc(firestore, "chatroom", chatroomid);

    const messagesRef = collection(chatroomRef, "messages");
    const result = {
      myuid,
      date,
      messageinputvalue,
    };

    try {
      await addDoc(messagesRef, result);
      alert("게시물이 성공적으로 업로드 되었습니다.");
    } catch (error) {
      console.error("Firestore에 데이터 저장 실패", error);
    }
  };

  return (
    <Container>
      {/* <MessageContainer>
        {chatroomid === "" ? (
          <NullText>채팅방을 선택해 주세요!</NullText>
        ) : (
          <>
            <ChatRoomHeader>
              <ChatMateUserImage />
              <ChatTitle>
                <MediumText>{chatmateid}</MediumText>
              </ChatTitle>
            </ChatRoomHeader>

            <Box>
              <ChatRoomDate>
                <SSmallText>{chatcreatedate}</SSmallText>
              </ChatRoomDate>
              {mymessages.map((messages, index) => (
                <Messagescontainer key={index}>
                  <MessageText $ismymessage={messages.myuid === myuid}>
                    {messages.myuid === myuid ? (
                      <>
                        <Messagetime>{formatTime(messages.date)}</Messagetime>
                        <Text $ismymessage={messages.myuid === myuid}>
                          {messages.messageinputvalue}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text $ismymessage={messages.myuid === myuid}>
                          {messages.messageinputvalue}
                        </Text>
                        <Messagetime>{formatTime(messages.date)}</Messagetime>
                      </>
                    )}
                  </MessageText>
                </Messagescontainer>
              ))}
            </Box>
            <MessageInputContainer>
              <MessageInput
                onChange={onMessageInput}
                placeholder="메세지를 입력해 주세요."
              />
              <MessageSendButton onClick={onSendButtonClick}>
                <FiSend style={{ width: "20px", height: "20px" }} />
              </MessageSendButton>
            </MessageInputContainer>
          </>
        )}
      </MessageContainer> */}
    </Container>
  );
}
export default ChatRoom;
