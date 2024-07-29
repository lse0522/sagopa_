import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 파이어베이스 불러오기
import { createUserWithEmailAndPassword, getAuth ,signOut} from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

import {Bg, Bar, SignupContainer, BolbText,Form, Input,EmailForm, Email, EmailText, Select, SignupButton,Text}from './SignupPageStyled';

function SignupPage() {
  const navigate = useNavigate(); 

  const [displayName, setDisplayName] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [emailDomain, setEmailDomain] = useState('@gmail.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, serConfirePassword] = useState('');

  const onChangeId = (e) =>{
    setDisplayName(e.target.value)
  } 
  const onChangeEmail = (e) => {
    setEmailUser(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmailDomain(e.target.value)
  } 
  const onChangePassword = (e) =>{
    setPassword(e.target.value)
  }
  const onChangeConfirePassword = (e) =>{
    serConfirePassword(e.target.value)
  }

  const handleSignup = async () =>{
    const email = emailUser + emailDomain;

    if (!displayName){
      return;
    }else if(!emailUser){
      return;
    }else if(password < 6){
      return;
    }else if (password !== confirmPassword) {
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: displayName
        });
      }

      const db = getFirestore();
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: email,
        id: displayName,
        photourl : '',
      });
      await signOut(auth); // 사용자를 로그아웃시킵니다.
      alert('회원가입 성공.');
      navigate('/login');
    } catch (error) {
      alert('회원가입 실패하였습니다.');
      console.log(error)
    }
  }

  return (
      <Bg>
        <Bar></Bar>
        <SignupContainer>

        <BolbText>회원가입</BolbText>

        <Form>
          <Input type="text" placeholder="아이디" onChange={onChangeId} />
          {!displayName && (<Text>아이디를 입력해주세요.</Text>)}
          <EmailForm>
            <Email type="text" placeholder="이메일" onChange={onChangeEmail}/>
            <EmailText>@</EmailText>
            <Select value={emailDomain} onChange={handleEmailChange}>
              <option value='@gmail.com'>gmail.com</option>
              <option value='@naver.com'>naver.com</option>
              <option value='@daum.net'>daum.net</option>
            </Select>
          </EmailForm>
          {!emailUser && (<Text>이메일을 입력해주세요.</Text>)}
          <Input type="password" placeholder="비밀번호" onChange={onChangePassword} />
          {password && password.length < 6 && (<Text>비밀번호는 6자 이상 작성해주세요.</Text>)}
          <Input type="password" placeholder="비밀번호 확인" onChange={onChangeConfirePassword}/>
          {
            password && confirmPassword && password !==
            confirmPassword && (<Text>비밀번호가 일치하지 않습니다.</Text>)
          }

          <SignupButton onClick={handleSignup}>회원가입</SignupButton>

        </Form>
        </SignupContainer>

      </Bg> 
  );
}

export default SignupPage;