import { useEffect, useState } from "react";
import { firestore } from "../../firebase";

import { DetailHeader, Container, RightContainer } from "./MyPageStyled";

// 컴포넌트 불러오기
import UserProfile from "../../Components/Features/UserProfile/UserProfile.js";
import UserBookMark from "../../Components/Features/UserBookMark/UserBookMark";
import UserPost from "../../Components/Features/UserPost/UserPost";

function MyPage({ myuid }) {
  const [user, setUser] = useState(null);

  // 프로필 사진
  useEffect(() => {
    if (myuid) {
      const userRef = firestore.collection("users").doc(myuid);
      userRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error getting document:", error);
        });
    } else {
      console.log("myuid is not available yet");
    }
  }, [myuid]);

  return (
    <>
      <DetailHeader>마이페이지</DetailHeader>
      <Container>
        <UserProfile user={user} />
        <RightContainer>
          <UserBookMark myuid={myuid} />
          <UserPost myuid={myuid} />
        </RightContainer>
      </Container>
    </>
  );
}

export default MyPage;
