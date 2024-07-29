import { useEffect, useState } from "react";
import { firestore } from "../../../firebase";

import {
  Container,
  BookMarkConainer,
  ProductText,
  ProductBox,
  Img,
  NullText
} from "./UserPostStyled";

import { MediumText } from "../../TextStyles";

function UserPost({ myuid }) {

  const [myproducts, setMyProducts] = useState([]);

  const productRef = firestore.collection("product").orderBy("date", "desc");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await productRef.get();
        const allproducts = result.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const productfilter = allproducts.filter(
          (products) => products.uid === myuid
        );
        setMyProducts(productfilter);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [myuid]);

  return (
    <Container>
      <MediumText>내가 올린 책들</MediumText>
      <BookMarkConainer>
        {
          myproducts.length === 0 ? (
            <NullText>아직 올린 책이 없어요!</NullText>
          ):(
            <>
            {myproducts.map((product, index) => (
              <ProductBox key={index}>
                <Img src={product.preview}/>
                <ProductText>{product.title}</ProductText>
              </ProductBox>
            ))}
            </>
          )
        }
      </BookMarkConainer>
    </Container>
  );
}

export default UserPost;
