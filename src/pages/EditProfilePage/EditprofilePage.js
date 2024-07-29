import {
  Container,
  Header,
  RedText,
  From,
  Text,
  Input,
  InputFrom,
  ImgFile,
  ButtonBox,
  EditProfileSend,
  ChangePw,
} from "./EditProfileStyled";
import { BoldText } from "../../Components/TextStyles";
import { FaCircleUser } from "react-icons/fa6";

import React, { useEffect, useState, useRef } from "react";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { firestore } from "../../firebase";
import { updateProfile, updateEmail } from "firebase/auth";

function EditProfilePage() {
  const [user, setUser] = useState([]);
  const [myuid, setMyUid] = useState(null);
  const [photourl, setPhotoUrl] = useState(null);
  const [newid, setNewId]= useState(null);
  const [newemail, setNewEmail] = useState(null);
  const [photo, setPhoto] = useState(null);
  
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        setMyUid(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (myuid) {
      const userRef = firestore.collection("users").doc(myuid);
      userRef.get().then((doc) => {
        if(doc.data()){
          setPhotoUrl(doc.data().photourl);
          setPhoto(doc.data().photourl);
        }
      });
    } else {
      console.log("myuid is not available yet");
    }
  }, [myuid]);


  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  // 프로필 사진 선택
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // 프로필 이미지 미리보여주기
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result); // 이미지 URL 상태 업데이트
      };
      reader.readAsDataURL(file);
    }
  };

  // 계정 삭제
  const onDelete = () => {
    console.log("계정 삭제 클릭");
    const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    user.delete().then(() => {
      alert("User deleted successfully.");
    }).catch((error) => {
      alert("Error deleting user:", error);
    });
    }
  }

  // 아이디 수정
  const onChangeId = (e) => {
    setNewId(e.target.value)
  }

  // 이메일 수정
  const onChangeEmail = (e) => {
    setNewEmail(e.target.value)
  }

  const onEditProfile = async () => {
    console.log("회원정보 수정");
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const db = getFirestore();
  
    try {
      // 아이디 변경
      if (newid && newid !== currentUser.displayName) {
        await updateProfile(currentUser, {
          displayName: newid
        });
        await setDoc(
          doc(db, "users", myuid),
          { id: newid },
          { merge: true }
        );
        alert("아이디 업데이트 성공");
      }
  
      // 이메일 변경
      // 인증절차가 필요함
      if (newemail && newemail !== currentUser.email) {
        await updateEmail(currentUser, newemail);
        await setDoc(
          doc(db, "users", myuid),
          { email: newemail },
          { merge: true }
        );
        alert("이메일 업데이트 성공");
      }
  
// 프로필 사진 변경: photourl이 유효할 때만 실행
      if (photourl && photourl !== photo) {
        // Firebase Storage에 이미지 업로드
        const storage = getStorage();
        const storageRef = ref(storage, `profile_images/${myuid}`);
        const response = await fetch(photourl);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
  
        // 업로드된 이미지의 URL 가져오기
        const uploadedPhotoURL = await getDownloadURL(storageRef);
  
        // Firestore에 이미지 URL 저장
       
        await setDoc(
          doc(db, "users", myuid),
          { photourl: uploadedPhotoURL },
          { merge: true }
        );
  
        alert("프로필 이미지 업데이트 성공");
      }
    } catch (error) {
      alert("회원 정보 업데이트 실패", error);
      console.error(error);
    }
  };
  


  return (
    <Container>
      <Header>
        <BoldText>회원 정보 수정</BoldText>
        <RedText onClick={onDelete}>회원탈퇴하기</RedText>
      </Header>
      <From>
        <InputFrom>
          <Text>아이디</Text>
          <Input placeholder={user.displayName} onChange={onChangeId}/>
        </InputFrom>
        <InputFrom>
          <Text>이메일</Text>
          <Input placeholder={user.email} onChange={onChangeEmail}/>
        </InputFrom>
        <InputFrom>
          <Text>프로필 이미지</Text>
          <ImgFile>
            {!photourl ? (
              <>
                <FaCircleUser
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#D9D9D9",
                    cursor: "pointer",
                  }}
                  onClick={handleIconClick}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }} // input 요소를 숨깁니다.
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <>
                <img
                  src={photourl}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={handleIconClick}

                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }} // input 요소를 숨깁니다.
                  onChange={handleImageChange}
                />
              </>
            )}
          </ImgFile>
        </InputFrom>
        <ButtonBox>
          <EditProfileSend onClick={onEditProfile}>
            회원 정보 수정
          </EditProfileSend>
          <ChangePw>비밀번호 변경</ChangePw>
        </ButtonBox>
      </From>
    </Container>
  );
}

export default EditProfilePage;
