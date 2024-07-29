import { useEffect, useState } from "react";
import { firestore } from "../../../firebase";

import {
  Container,
  UserFavoritesList,
  ProductText,
  ProductBox,
  Img,
  NullText
} from "./UserBookMarkStyled";

import { MediumText } from "../../TextStyles";

function UserBookMark({ myuid }) {
  // 북마크 id 가져오기
  const [mybookmarkid, setMyBookMarkId] = useState([]);
  const [mybookmarks, setMyBookMarks] = useState([]);

  // 북마크 id 가져오기
  useEffect(() => {
    if (myuid) {
      const bookmarkDocRef = firestore.collection("bookmark").doc(myuid);
      const fetchBookmark = async () => {
        try {
          const result = await bookmarkDocRef.get();
          if (result.exists) {
            const item = { id: result.id, ...result.data() };
            setMyBookMarkId(item.productid);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching bookmark:", error);
        }
      };
      fetchBookmark();
    }
  }, [myuid]);

  // 모든 게시물 불러오기
  const productRef = firestore.collection("product").orderBy("date", "desc");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await productRef.get();
        const allproducts = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const filter = allproducts.filter((product) =>
          mybookmarkid.includes(product.id)
        );
      setMyBookMarks(filter);
      console.log(allproducts,filter);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <Container>
      <MediumText>관심목록</MediumText>
      <UserFavoritesList>
        {
          mybookmarks.length === 0 ? (
            <NullText>아직 북마크한 게시물이 없어요!</NullText>
          ):(
            <>
            {mybookmarks.map((bookmark, index) => (
              <ProductBox key={index}>
                <Img src={bookmark.preview}/>
                <ProductText>{bookmark.title}</ProductText>
              </ProductBox>
            ))}
            </>
          )
        }
      </UserFavoritesList>
    </Container>
  );
}

export default UserBookMark;
