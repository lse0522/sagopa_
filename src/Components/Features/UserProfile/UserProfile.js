import {
  Container,
  UserImageConainer,
  Img,
  AccountInfoConainer,
  UserId,
  UserEmail,
  EditProfileButton,
  SignupButton,
  ButtonBox,
  Box,
} from "./UserProfileStyled";

import { FaCircleUser } from "react-icons/fa6";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function UserProfile({ user }) {
  const auth = getAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      // console.log(user.photourl);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("로그아웃 성공");
      navigate("/");
    } catch (error) {
      alert("로그아웃 실패: " + error.message);
    }
  };

  return (
    <Container>
      <UserImageConainer>
        {user && user.photourl ? (
          <Img src={user.photourl} alt="User Profile" />
        ) : (
          <FaCircleUser
            style={{ width: "200px", height: "200px", color: "#D9D9D9" }}
          />
        )}
      </UserImageConainer>
      <Box>
        <AccountInfoConainer>
          <UserId>{user ? user.id : "Loading..."}</UserId>
          <UserEmail>{user ? user.email : "Loading..."}</UserEmail>
        </AccountInfoConainer>
        <ButtonBox>
          <EditProfileButton>
            <Link to="/editprofile">회원정보 수정</Link>
          </EditProfileButton>
          <SignupButton onClick={handleLogout}>로그아웃</SignupButton>
        </ButtonBox>
      </Box>
    </Container>
  );
}
export default UserProfile;
