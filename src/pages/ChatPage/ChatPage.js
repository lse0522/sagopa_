import { useEffect, useState } from "react";
import { firestore, auth } from "../../firebase";
import { FiSend } from "react-icons/fi";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import {
  ChatList,
  ChatListDisplay,
  ChatMateUserImage,
  ChatRight,
  ChatTitle,
  ChatText,
  ChatListBox,
  ChatRoom,
  ChatRoomHeader,
  ChatRoomDate,
  Box,
  MessageInputContainer,
  MessageInput,
  MessageSendButton,
  Messagescontainer,
  MessageText,
  Messagetime,
  Text,
} from "./ChatPageStyled";
import { NullText } from "../../Components/Features/ChatRoom/ChatRoomStyled";
import { MediumText, SSmallText } from "../../Components/TextStyles";
import { MessageContainer } from "../../Components/Features/ChatRoom/ChatRoomStyled";

import { TwoContainer } from "../../Components/SharedLayout/TwoContainer";

function ChatPage({ myuid }) {
  // 채팅방 리스트
  const [allchatroomdata, setAllChatRoomData] = useState([]); // 채팅방 다 불러오기
  const [mychatroomlist, setMyChatRoomList] = useState([]); // 내 채팅방만 불러오기
  const [chatroomid, setChatRoomId] = useState(null); // 선택한 채팅방
  // const [chatmateuid, setChatMateUid] = useState([]); // 선택한 채팅방
  const [chatcreatedate, setChatCreateDate] = useState([]); // 선택한 채팅방
  const [mymessages, setMyMessages] = useState([]); // 내 메세지, 상대방 메세지
  const [messageinputvalue, setMessageInputValue] = useState(""); // 메세지 입력

  // 채팅방 다 가져오기
  useEffect(() => {
    const fetchChatrooms = async () => {
      try {
        const querySnapshot = await firestore.collection("chatroom").get();
        const chatroomsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllChatRoomData(chatroomsData);
        console.log("채팅방 불러오기", allchatroomdata);
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
    console.log("내 채팅방만 가져오기", mychatroomlist);
  }, [allchatroomdata]);

  useEffect(() => {
    // mychatroomlist 배열을 순회하여 각 채팅방의 who 정보를 출력
    mychatroomlist.forEach(chatroom => {
      // 각 채팅방의 who 속성이 존재하고, who 배열에 요소가 있는지 확인
      if (chatroom.who && chatroom.who.length > 0) {
        // 각 채팅방의 who 정보를 출력
        console.log("상대방 uid 찾기", chatroom.who[0].myuid);
      } else {
        console.log("해당 채팅방에는 who 정보가 없습니다.");
      }
      // console.log("상대방 아이디 추가한 배열", mychatroomlist)
    });
  }, [mychatroomlist]);

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
    // if (chatroomfind.who[0].myuid === myuid) {
    //   setChatMateUid(chatroomfind.who[0].chatmateuid);
    // } else if (chatroomfind.who[0].chatmateuid === myuid) {
    //   setChatMateUid(chatroomfind.who[0].myuid);
    // }
    setChatCreateDate(formatDate(chatroomfind.date));
  };

  const onMessageInput = (e) => {
    setMessageInputValue(e.target.value);
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
        // setLastMessage(messagesData[messagesData.length -1].messageinputvalue)
      } catch (err) {
        console.error("chatroom 메시지 불러오기 에러: ", err);
      }
    };
    fetchMessages();
  }, [chatroomid]);

  // 메세지 보내기
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
  // 시간
  const formatTime = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Timestamp를 Date 객체로 변환
    return new Intl.DateTimeFormat("ko-KR", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true, // 12시간 형식으로 표시 (예: 오전/오후)
    }).format(date);
  };
  return (
    <TwoContainer>
      <ChatList>
        {mychatroomlist.length === 0 ? (
          <NullText>아직 채팅을 하지 않으셨어요!</NullText>
        ) : (
          <>
            {mychatroomlist.map((mychatroomlist, index) => (
              <ChatListDisplay
                key={index}
                onClick={() => handleChatClick(mychatroomlist.id)}
              >
                <ChatListBox>
                  <ChatMateUserImage />
                  <ChatRight>
                    <ChatTitle>
                      <MediumText>{mychatroomlist.product}</MediumText>
                    </ChatTitle>
                    <ChatText>
                      <SSmallText>
                        {mychatroomlist.who[0].chatmateuid !== myuid
                          ? mychatroomlist.who[0].chatmateuid
                          : mychatroomlist.who[0].myuid}
                      </SSmallText>
                    </ChatText>
                  </ChatRight>
                </ChatListBox>
              </ChatListDisplay>
            ))}
          </>
        )}
      </ChatList>
      <ChatRoom>
        {chatroomid === null ? (
          <NullText>채팅방을 선택해 주세요!</NullText>
        ) : (
          <>
            <ChatRoomHeader>
              <ChatMateUserImage />
              <ChatTitle>
                <MediumText>상대방 id</MediumText>
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
      </ChatRoom>
    </TwoContainer>
  );
}

export default ChatPage;
