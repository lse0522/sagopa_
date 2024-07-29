import React, { useState, useEffect } from "react";

import GlobalStyles from "./GlobalStyles";

import Navbar from "./Components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import DetailPage from "./pages/Detail/DetailPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import MyPage from "./pages/MyPage/MyPage";
import EditProfilePage from "./pages/EditProfilePage/EditprofilePage";
// import AlertPage from "./pages/MyPage/AlertPage";
import BookMarkPage from "./pages/BookMarkPage/BookMarkPage";
import BottomNavBar from "./Components/BottomNavbar";
import MyPosts from "./pages/MyPage/MyPosts";
import MobailSearchPage from "./pages/MobailSearchPage";
import MyPostPage from "./pages/MyPostPage/MyPostPage";
import MobailChatRoom from "./pages/MobailChatRoom/MobailChatRoom";

function App() {
  const [userSearchValue, setUserSearchValue] = useState("");

  const [login, setLogin] = useState(false);
  const [myuid, setMyUid] = useState("");

  // 로그인 유무
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setLogin(true);
        setMyUid(currentUser.uid);
      } else {
        setLogin(false);
        console.log("아직 로그인 안함");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar
        setUserSearchValue={setUserSearchValue}
        login={login}
        myuid={myuid}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/shop"
          element={<ShopPage userSearchValue={userSearchValue} />}
        />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/chat" element={<ChatPage myuid={myuid} />} />
        <Route path="/my" element={<MyPage myuid={myuid} />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
        {/* <Route path="/alert" element={<AlertPage />} /> */}
        <Route path="/bookmark" element={<BookMarkPage />} />
        <Route path="/mypost" element={<MyPosts />} />
        <Route path="/mobailsearch" element={<MobailSearchPage />} />
        <Route path="/mypost" element={<MyPostPage />} />
        <Route path="/chatroom" element={<MobailChatRoom />} />
      </Routes>
      {/* {!hideNavComponents && <BottomNavBar />}  */}
    </>
  );
}

export default App;
