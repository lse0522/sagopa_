import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";

import {
  NavbarContainer,
  SagopaNavbar,
  LeftSection,
  SagopaMainLink,
  SagopaShopLink,
  SagopaChatLink,
  RightSection,
  SagopaSearch,
  VscBellIcon,
  BsBookmarkIcon,
  SagopaAlertLink,
  SearchInput,
  SagopaAuthLink,
  SagopaBookMarkLink,
  SagopaUploadButtonLink,
  UserProfileImage,
  MobileRightSection,
} from "./NavbarStyled";
import { firestore } from "../../firebase";

function Navbar({ setUserSearchValue, login, myuid }) {
  const [photourl, setPhotoUrl] = useState(null);

  // 프로필 사진
  useEffect(() => {
    if (myuid) {
      const userRef = firestore.collection("users").doc(myuid);
      userRef.get().then((doc) => {
        if (doc.exists) {
          const url = doc.data()?.photourl;
          setPhotoUrl(url);
        } else {
          console.log("로그인 on / 사진 없음");
        }
      });
    } else {
      console.log("로그인 안함");
    }
  }, [myuid]);

  // 검색창
  const getTitle = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z가-힣]+$/;

    if (regex.test(value)) {
      setUserSearchValue(value);
    }
  };
  return (
    <NavbarContainer>
      <SagopaNavbar>
        <LeftSection>
          <SagopaMainLink>
            <Link to="/">SAGOPA</Link>
          </SagopaMainLink>
          <SagopaShopLink>
            <Link to="/shop">중고거래</Link>
          </SagopaShopLink>
          <SagopaChatLink>
            <Link to="/chat">채팅</Link>
          </SagopaChatLink>
        </LeftSection>

        <MobileRightSection>
          <Link to="/mobailsearch">
            <AiOutlineSearch
              className="search-icon"
              style={{ width: "22px", height: "22px" }}
            />
          </Link>
        </MobileRightSection>

        <RightSection>
          <SagopaSearch>
            <SearchInput type="text" placeholder="Search" onChange={getTitle} />
            <AiOutlineSearch
              className="search-icon"
              style={{ width: "20px", height: "20px" }}
            />
          </SagopaSearch>
          {!login ? (
            <SagopaAuthLink>
              <Link to="/login">로그인/회원가입</Link>
            </SagopaAuthLink>
          ) : (
            <SagopaAuthLink>
              <>
                <SagopaAlertLink>
                  <Link to="/alert">
                    <VscBellIcon />
                  </Link>
                </SagopaAlertLink>
                <SagopaBookMarkLink>
                  <Link to="/bookmark">
                    <BsBookmarkIcon />
                  </Link>
                </SagopaBookMarkLink>
                {photourl ? (
                  <Link to="my">
                    <UserProfileImage
                      src={photourl}
                      alt="User Profile"
                      style={{ marginLeft: "10px" }}
                    />
                  </Link>
                ) : (
                  <Link to="my">
                    <FaCircleUser
                      style={{
                        width: "40px",
                        height: "40px",
                        color: "#D9D9D9",
                        marginLeft: "10px",
                      }}
                    />
                  </Link>
                )}
              </>
            </SagopaAuthLink>
          )}
          <SagopaUploadButtonLink>
            <Link to="/upload">글쓰기</Link>
          </SagopaUploadButtonLink>
        </RightSection>
      </SagopaNavbar>
    </NavbarContainer>
  );
}

export default Navbar;
