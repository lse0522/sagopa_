import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
  }
`;
export const ChatListDisplay = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
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
export const NullText = styled.div`
  font-family: "GmarketSansMedium";
  width: 100%;
  font-size: 18px;
  color: gray;
  display: flex;
  margin-top: 40px;
  justify-content: center;
`
export const ChatListBox = styled.div`
display: flex;
align-items: center;

`