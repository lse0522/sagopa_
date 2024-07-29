import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const Img = styled.img`
  width: 100px;
  display: flex;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  font-family: "GmarketSansLight";
  font-size: 14px;
  margin-top: 20px;
`

function EmptyPost() {
  return (
    <Container>
      <TextContainer>
        <Img src="free-icon-books.png" />
        <Text>게시물이 없습니다.</Text>
      </TextContainer>
    </Container>
  );
}
export default EmptyPost;
