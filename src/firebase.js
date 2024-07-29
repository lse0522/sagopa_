//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
  import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBYl2qQpi9nzpqdhkC6o0c2O4MPYljvDAY",
    authDomain: "sagopa-f91d4.firebaseapp.com",
    projectId: "sagopa-f91d4",
    storageBucket: "sagopa-f91d4.appspot.com",
    messagingSenderId: "257716951826",
    appId: "1:257716951826:web:3dc7c03c5eb7e0ceb471cb"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore, auth, app, db, storage};