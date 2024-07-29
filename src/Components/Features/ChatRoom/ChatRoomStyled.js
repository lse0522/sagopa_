import styled from "styled-components";

export const Container = styled.div`
  border-left: solid 1px #eee;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
export const ChatMateUserImage = styled.div`
  width: 40px;
  height: 40px;
  border: solid 1px #eee;
  border-radius: 50%;
  margin-right: 10px;
`;
export const ChatTitle = styled.div`
  /* color: #55666f; */
`;
export const ChatRight = styled.div`
  align-items: center;
`;
export const ChatText = styled.div`
  color: gray;
  margin-top: 6px;
`;
export const ChatRoomHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
`;
export const Box = styled.div`
  height: 460px;
  overflow: hidden;
  overflow-y: auto;
  padding: 0px 10px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;
export const ChatRoomDate = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  color: gray;
`;
export const Message = styled.div``;
export const MessageContainer = styled.div`
  width: 100%;
  height: 540px;
`;
export const MessageInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #eee;
  margin-top: 10px;
`;
export const MessageInput = styled.input`
  width: 90%;
  background-color: #eee;
  border: none;
  font-family: "GmarketSansLight";
  font-size: 14px;
  padding-left: 20px;
`;
export const MessageSendButton = styled.button`
  width: 10%;
  color: #55666f;
`;
export const MessageText = styled.div`
  display: flex;
  justify-content: ${(props) => (props.$ismymessage ? "right" : "left")};
  height: 30px;
  margin-bottom: 4px;
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  background-color: ${(props) => (props.$ismymessage ? "#55666F" : "#eee")};
  font-size: 14px;
  font-weight: 800px;
  color: ${(props) => (props.$ismymessage ? "white" : "black")};
  padding: 10px 20px;
  border-radius: ${(props) =>
    props.$ismymessage ? "20px 2px 20px 20px" : "2px 20px 20px 20px"};
  font-family: "GmarketSansMedium";
`;
export const Messagescontainer = styled.div`
  border: solid 1px black;
  width: 100%;
  height: 100%;
`;
export const Messagetime = styled.div`
  font-size: 12px;
  color: gray;
  display: flex;
  align-items: end;
  margin: 0px 4px;
`;
export const NullText = styled.div`
  font-family: "GmarketSansMedium";
  width: 100%;
  font-size: 18px;
  color: gray;
  display: flex;
  margin-top: 40px;
  justify-content: center;
`;
