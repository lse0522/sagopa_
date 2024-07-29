import { useState, useEffect } from "react";
import { AiFillPicture } from "react-icons/ai";
import React, { useRef } from "react";
import { firestore, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { FaPlus } from "react-icons/fa";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import {
  TopSection,
  UloadButton,
  UploadContainer,
  LeftSection,
  RightSection,
  ImageContainer,
  PostCreationContainer,
  PostInputBox,
  Select,
  ImagePreview,
  MiniPreview,
  MiniContainerPlus,
} from "./UploadPageStyled";
import { Container } from "../../Components/SharedLayout/Container";
import {SmallText, SSmallText} from '../../Components/TextStyles';

function UploadPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState("생명산업과학대");

  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [previwe, setPreviwe] = useState("");

  const [uid, setUid] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeSelect = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleImageContainerClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (imageFile.length >= 4) {
        alert("최대 4개의 이미지만 업로드할 수 있습니다.");
        return;
      }

      const file = e.target.files[0];
      setImageFile((prevFiles) => [...prevFiles, file]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl((prevUrls) => [...prevUrls, reader.result]); // 이미지 URL 상태 업데이트
      };
      reader.readAsDataURL(file);
    }
  };

  const renderImagePreview = () => {
    return imageUrl.map((url, index) => (
      <MiniPreview key={index}>
        <img
          src={url}
          alt={`Preview ${index}`}
          style={{ width: "100%", height: "100%", borderRadius: "4px" }}
        />
      </MiniPreview>
    ));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUid(currentUser.uid);
      } else {
        navigate("/login");
        alert("로그인을 해주세요!");
      }
    });

    // 컴포넌트 언마운트 시 구독 해제
    return () => unsubscribe();
  }, [navigate]);

  const onSubmitPost = async () => {
    if (imageFile.length === 0) {
      alert("최소 한 장의 사진을 업로드해야 합니다.");
      return;
    } else if (title === "") {
      alert("제목을 입력해 주세요.");
      return;
    } else if (content === "") {
      alert("내용을 입력해 주세요.");
      return;
    } else if (location === "") {
      alert("위치를 입력해 주세요.");
      return;
    } else if (price === "") {
      alert("가격을 입력해 주세요.");
      return;
    }

    const imageUrls = [];

    for (const file of imageFile) {
      const pathRef = storageRef(storage, `image/${file.name}`);
      try {
        const snapshot = await uploadBytes(pathRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        imageUrls.push(downloadURL);
      } catch (error) {
        console.error("Upload failed", error);
        return;
      }
    }

    if (imageUrls.length > 0) {
      setPreviwe(imageUrls[0]);
    }

    const productRef = collection(firestore, "product");
    const result = {
      title,
      content,
      location,
      price,
      select: selectedOption,
      date: new Date(),
      preview: imageUrls[0],
      imageUrls,
      uid,
    };

    try {
      await addDoc(productRef, result);
      alert("게시물이 성공적으로 업로드 되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("Firestore에 데이터 저장 실패", error);
    }
  };

  return (
    <Container>
      <TopSection>
        <UloadButton onClick={onSubmitPost}><SmallText>올리기</SmallText></UloadButton>
      </TopSection>

      <UploadContainer>

      < LeftSection  >
        <ImagePreview>
          {imageUrl.length > 0 ? <>{renderImagePreview()}</> : <></>}

          {imageFile.length <= 3 ? (
            <MiniContainerPlus onClick={handleImageContainerClick}>
              <input
                type="file"
                style={{ display: "none"}}
                ref={fileInputRef}
                onChange={handleImageChange}
              />
              <FaPlus />
            </MiniContainerPlus>
          ) : (
            <></>
          )}
        </ImagePreview>
        <ImageContainer>
          {imageUrl.length > 0 ? (
            <img
              src={imageUrl[imageUrl.length - 1]}
              alt="Preview"
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          ) : (
            <>
              <AiFillPicture className="photo-icon" />
              <SmallText style={{color:"gray"}}>사진을 올려주세요.</SmallText>
              <SSmallText style={{color:"gray", marginTop:"4px"}}>4장까지 올릴 수 있어요.</SSmallText>
            </>
          )}
        </ImageContainer>
      </LeftSection>


      <RightSection>
        <PostCreationContainer
          placeholder="제목을 작성해 주세요."
          onChange={onChangeTitle}
        />
        <PostInputBox
          placeholder="어떤 상품인지 소개해 주세요."
          onChange={onChangeContent}
        />
        <PostCreationContainer placeholder="지역" onChange={onChangeLocation} />
        <PostCreationContainer placeholder="가격" onChange={onChangePrice} />
        <Select value={selectedOption} onChange={onChangeSelect}>
          <option value="생명산업과학대">생명산업과학대</option>
          <option value="사회과학대">사회과학대</option>
          <option value="인문예술대">인문예술대</option>
          <option value="공과대">공과대</option>
          <option value="사범대">사범대</option>
          <option value="약학대">약학대</option>
          <option value="미래융합대">미래융합대</option>
          <option value="교양">교양</option>
          <option value="기타">기타</option>
        </Select>
      </RightSection>
      </UploadContainer>
    </Container>
  );
}
 
export default UploadPage;
