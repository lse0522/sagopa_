import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import {Container, DetailContainer } from "./DetailStyled";

// import { Container } from "../../Components/SharedLayout/Container";
import UserProfileHeader from "../../Components/Atoms/UserProfileHeader/UserProfileHeader";
import DetailImg from "../../Components/Features/DetailImg/DetailImg";
import DetailContent from "../../Components/Features/DetailContent/DetailContent";

function DetailPage() {
  const navigate = useNavigate();
  const productId = new URLSearchParams(window.location.search);

  // 진짜 필요한거
  const [myuid, setMyUid] = useState("");
  // 게시물 올린 상대방 uid, 게시물 위치
  const [productuseruid, setProductUserUid] = useState("");
  const [productlocation, setProductLocation] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [imagelength, setimagelength] = useState(0);
  const [product, setProduct] = useState(null);
  // const [chatmateuid, setChatMateUid] = useState("");
  const [productmyid, setProductMyId] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth > 1024);

  // 내 uid 가져오기
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setMyUid(currentUser.uid);
      } else {
        navigate("/");
        alert("로그인을 해주세요!");
      }
      return () => unsubscribe();
    });
  }, [navigate]);

  useEffect(() => {
    const productRef = firestore.collection("product").doc(productId.get("id"));
    setProductMyId(productId.get("id"));

    productRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const productData = doc.data();
          setProductUserUid(productData?.uid ?? "기본값");
          setProductLocation(productData?.location ?? "기본 위치");
          setProductTitle(productData?.title ?? "제목 없음");
          const images = productData?.imageUrls ?? [];
          setProductImages(images);
          setimagelength(images.length);
          setProduct(productData ?? {});
        } else {
          navigate("/shop");
          alert("해당 게시물이 존재하지 않습니다.");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    if (product && myuid && productmyid) {
    }
  }, [myuid, product, productmyid]);

  return (
    <Container>
          <UserProfileHeader
            myuid={myuid}
            productuseruid={productuseruid}
            productlocation={productlocation}
            productTitle={productTitle}
            productmyid={productmyid}
          />
          <DetailContainer>
            <DetailImg
              productImages={productImages}
              imagelength={imagelength}
            />
            <DetailContent
              product={product}
              myuid={myuid}
              productuseruid={productuseruid}
            />
          </DetailContainer>
    </Container>
  );
}

export default DetailPage;
