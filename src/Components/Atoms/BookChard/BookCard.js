
import {
  Img,
  BookDetailsContainer,
  BookTitle,
  BookLocation,
  BookPrice,
  BookCardContainer,
} from "./BookCardStyled";
import { BoldText, SmallText } from "../../TextStyles";

function BookCard({ product }) {
  return (
    <BookCardContainer key={product.id} to={`/detail?id=${product.id}`}>
      <Img src={product.preview}></Img>
      <BookDetailsContainer>
        <BoldText>
          <BookTitle>{product.title}</BookTitle>
        </BoldText>
        <SmallText>
          <BookLocation>{product.location}</BookLocation>
        </SmallText>
        <BoldText>
          <BookPrice>{Number(product.price).toLocaleString()} 원</BookPrice>
        </BoldText>
      </BookDetailsContainer>
    </BookCardContainer>
  );
}
export default BookCard;
