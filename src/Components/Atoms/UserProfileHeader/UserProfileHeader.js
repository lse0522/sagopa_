import { useEffect, useState } from "react";
import { firestore } from "../../../firebase";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import {
  Container,
  UserPhoto,
  LeftContainer,
  Infomation,
  UserId,
  UserLocation,
} from "./UserProfileHeaderStyled";
import { FaCircleUser } from "react-icons/fa6";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

function UserProfileHeader({
  myuid,
  productuseruid,
  productlocation,
  productmyid,
}) {
  const [productuserid, setProductUserId] = useState("");
  const [productuserurl, setProductUserUrl] = useState("");
  const [mybookmark, setMyBookMark] = useState(false);

  // 상대 아이디 가져오기
  useEffect(() => {
    const fetchusersid = async () => {
      try {
        const querySnapshot = await firestore.collection("users").get();
        querySnapshot.forEach((doc) => {
          if (doc.id === productuseruid) {
            setProductUserId(doc.data().id);
            setProductUserUrl(doc.data().photourl);
          }
        });
      } catch (error) {
        console.error("Error getting users: ", error);
      }
    };
    if (productuseruid) {
      fetchusersid();
    }
  }, [productuseruid]);

  const onBookMarkClick = async () => {
    console.log("북마크 버튼 클릭");

    const bookmarkRef = firestore.collection("bookmark").doc(myuid);
    try {
      await bookmarkRef.set({
        productid: productmyid, // 'productid' 필드에 값을 설정하거나 업데이트
      }); // 기존 데이터를 유지하면서 새 데이터를 병합

      alert("Bookmark added successfully, 북마크 성공");
    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };
  const onBookMarkCancel = () => {
    console.log("북마크 취소 버튼");
  };

  // 내 북마크 리스트 불러오기
  useEffect(() => {
    console.log(productmyid);
    const fetchbookmark = async () => {
      try {
        const querySnapshot = await firestore.collection("bookmark").get();
        querySnapshot.forEach((doc) => {
          if (doc.id === myuid) {
            const bookmarkarry = doc.data().productid;
            console.log("받아온 게시물 아이디", bookmarkarry);
            const bookmarkfilter = bookmarkarry.filter(
              (bookmark) => bookmark === productmyid
            );
            console.log("필터값", bookmarkfilter);
            if (bookmarkfilter.length > 0) {
              setMyBookMark(true);
            }
          }
        });
      } catch (error) {
        console.error("Error getting users: ", error);
      }
    };
    if (myuid) {
      fetchbookmark();
    }
  }, [myuid]);

  // 내 게시물이면 수정 버튼 나와야함
  const onPostEditClick = () => {
    console.log("수정버튼 클릭");
  };

  return (
    <Container>
      <LeftContainer>
        <UserPhoto>
          {productuserurl === "" ? (
            <FaCircleUser
              style={{
                width: "100%",
                height: "100%",
                color: "#D9D9D9",
              }}
            />
          ) : (
            <img
              src={productuserurl}
              alt="User Profile"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          )}
        </UserPhoto>
        <Infomation>
          <UserId>{productuserid}</UserId>
          <UserLocation>{productlocation}</UserLocation>
        </Infomation>
      </LeftContainer>
      {myuid === productuseruid ? (
        <PiDotsThreeOutlineLight
          style={{ width: "20px", height: "20px" }}
          onClick={onPostEditClick}
        />
      ) : (
        <>
          {mybookmark === false ? (
            <FaRegBookmark
              style={{ width: "20px", height: "20px" }}
              onClick={onBookMarkClick}
            />
          ) : (
            <FaBookmark
              style={{ width: "20px", height: "20px", color: "#55666f" }}
              onClick={onBookMarkCancel}
            />
          )}
        </>
      )}
    </Container>
  );
}

export default UserProfileHeader;
