import { signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { FaCircleUser } from "react-icons/fa6";

import {BoldText} from '../../Components/TextStyles';

import {
  Container,
  UserImageContainer,
  Img,
  UserId,
  UserEmail,
  BookMarkContainer,
  ProductBox,
  BookImg,
  ProductText,
  NullText
} from "./BookMarkPageStyled";

import UserBookMark from "../../Components/Features/UserBookMark/UserBookMark";

function BookMarkPage() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const [myuid, setMyUid] = useState("");
  const [userprofileurl, setUserProfileUrl] = useState("");
  const [userprofile, setUserProfile] = useState([]);

    // 북마크 id 가져오기
    const [mybookmarkid, setMyBookMarkId] = useState([]);
    const [mybookmarks, setMyBookMarks] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setMyUid(currentUser.uid);
      } else {
        navigate("/login");
      }
    });
    if (user !== null) {
      const profileUrl = user.photoURL;
      setUserProfileUrl(profileUrl);
    }

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const querySnapshot = await firestore.collection("users").get();
        querySnapshot.forEach((doc) => {
          if (doc.id === myuid) {
            setUserProfile(doc.data());
          }
        });
      } catch (error) {
        console.log("에러", error);
      }
    };
    fetchuser();
  }, [myuid]);
  
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
        console.log(allproducts, filter);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
 
  return (
    <Container>
      <UserImageContainer>
        {userprofileurl ? (
          <Img src={userprofileurl} alt="User Profile" />
        ) : (
          <FaCircleUser
            style={{ width: "200px", height: "200px", color: "#D9D9D9" }}
          />
        )}
      </UserImageContainer>
        <UserId><BoldText>{userprofile.id}</BoldText></UserId>
        <UserEmail>{userprofile.email}</UserEmail>

        {
          mybookmarks.length === 0 ? (
            <NullText><p>아직 북마크한 책이 없어요!</p></NullText>
          ):(
            <>
            <BookMarkContainer>
        {mybookmarks.map((bookmark, index) => (
          <ProductBox key={index}>
            <Link to={`/detail?id=${bookmark.id}`}>
            <BookImg src={bookmark.preview}/>
            <ProductText>{bookmark.title}</ProductText>
            </Link>
          </ProductBox>
           ))}
        </BookMarkContainer>
            </>
       )}
    </Container>
  );
}

export default BookMarkPage;
