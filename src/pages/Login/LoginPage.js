import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import {
  Bg,
  Bar,
  LoginContainer,
  BolbText,
  Text,
  Form,
  Input,
  LoginButton,
  SignupText,
  SignupButton,
} from "./LoginPageStyled";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("로그인을 실패하였습니다. 다시 로그인해주세요!");
    }
  };

  return (
    <Bg>
      <Bar></Bar>
      <LoginContainer>
        <BolbText>회원 로그인</BolbText>
        <Text>가입하신 아이디와 비밀번호를 입력해주세요.</Text>
        <Text>비밀번호는 대소문자를 구분합니다.</Text>

        <Form>
          <Input type="text" placeholder="아이디" onChange={onChangeEmail} />
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={onChangePassword}
          />
          <LoginButton onClick={handleLogin}>로그인</LoginButton>

          <SignupText>아직 회원이 아니신가요?</SignupText>
          <SignupButton>
            <Link to="/signup">회원가입</Link>
          </SignupButton>
        </Form>
      </LoginContainer>
    </Bg>
  );
}

export default LoginPage;
