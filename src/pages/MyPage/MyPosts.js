import styled from "styled-components";
import { signInWithEmailAndPassword, signOut, getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { FaCircleUser } from "react-icons/fa6";


const BookMarkContainer = styled.div`
    width: 70%;
    /* border: solid 1px black; */
    margin: 0px auto;
`
const BookMarkHeader = styled.div`
    height: 70px;
    display: flex;
    align-items:center;
`
const Text = styled.div`
    font-family: 'GmarketSansBold';
    font-size: 20px;
`
const BookMarkMyInformation = styled.div`
    /* border: solid 1px black; */
    display: flex;
    justify-content:center;
    flex-direction: column;
`
const BookMarkMyImg = styled.div`
    /* border: solid 1px black; */
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0px auto;
`
const BookMarkMyId = styled.div`
    margin: 0px auto;
    margin-top: 40px;
    font-size: 20px;
`
const BookMarkListContainer = styled.div`
    border: solid 1px black;
    height: 400px;
    margin-top: 40px;
`
const BookMarkList = styled.div`
    border: solid 1px black;
    width: 200px;
    height: 400px;
`
const UserFavoritesContainer = styled.div`
  width: 100%;
  height: 180px;
  border: solid 1px #cfcfcf;
  margin-bottom: 60px;
  display:flex;
  border-radius: 4px;
` 
const ProductText = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  color: gray;
  margin-top: 4px;
  `
const ProductBox = styled.div`
  /* border: solid 1px black; */
  width: 120px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding: 10px;
`
const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`



function MyPosts() {
    const auth = getAuth();
    const navigate = useNavigate(); 
  
    const [myuid, setMyUid] = useState('');
    const [userprofile, setUserProfile] = useState({});
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(currentUser => {
          if(currentUser){
            setMyUid(currentUser.uid)
          }else{
              navigate('/login');
          }
      })
      return () => unsubscribe();
    },[])
  
    useEffect(() => {
      const fetchuser = async () => {
        try{
          const querySnapshot = await firestore.collection('users').get();
          querySnapshot.forEach(doc =>{
            if(doc.id === myuid){
              setUserProfile(doc.data());
            }
        })
            }catch(error){
              console.log("에러",error)
            }
        }
        fetchuser();
    },[myuid])
  
  
      const handleLogout = async () => {
          try {
            await signOut(auth);
            alert('로그아웃 성공');
            window.location.reload();
          } catch (error) {
            alert('로그아웃 실패: ' + error.message);
          }
        }
  
  
        const [products, setProducts] = useState([]);
        const productRef = firestore.collection('product').orderBy('date', 'desc');
      
        useEffect(() => {
          const fetchProducts = async () => {
            try {
              const result = await productRef.get();
              const items = result.docs.map(doc => ({ id: doc.id, ...doc.data() }));
              setProducts(items);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
      
          fetchProducts();
        }, []); 
  
        const [userProfileUrl, setUserProfileUrl] = useState('');
  
        useEffect(() => {
          const auth = getAuth();
          const user = auth.currentUser;
      
          if (user !== null) {
            const profileUrl = user.photoURL;
            setUserProfileUrl(profileUrl);
          }
        }, []);
      
  
        const [myproducts, setMyProducts] = useState([]);
          // 내가 올린 게시물만 불러오기
          useEffect(()=>{
            const productfilter = products.filter(products => products.uid === myuid);
            setMyProducts(productfilter);
  
            // 북마크 게시물
            const bookmarkfilter = products.filter(product => mybookmarkid.includes(product.id));
            setMyBookMarks(bookmarkfilter)
            console.log(bookmarkfilter)
          },[products, myuid])
  
  
  
          const [mybookmarkid, setMyBookMarkId] = useState([]);
          const [mybookmarks, setMyBookMarks] = useState([]);
  
          useEffect(()=>{
            if (myuid) { // myuid가 설정된 경우에만 로직 실행
              const bookmarkDocRef = firestore.collection('bookmark').doc(myuid);
              const fetchBookmark = async () => {
                try {
                  const result = await bookmarkDocRef.get();
                  if (result.exists) {
                    const item = { id: result.id, ...result.data() };
                    setMyBookMarkId(item.productid);
                  } else {
                    console.log("No such document!");
                  }
                } catch (error) {
                  console.error('Error fetching bookmark:', error);
                }
              };
              fetchBookmark();
            }
            },[myuid])
  
  
  
  
  
    return(
        <BookMarkContainer>
            <BookMarkHeader>
                <Text>마이페이지 > 북마크</Text>
            </BookMarkHeader>
            <BookMarkMyInformation>
                <BookMarkMyImg>
                {
                    userProfileUrl ? (
                      <UserProfileImage src={userProfileUrl} alt="User Profile" />
                    ) : (
                        <FaCircleUser 
                          style={{width: '100%', height: '100%', color: '#D9D9D9'}}
                        />
                    )
                  }
                </BookMarkMyImg>
                <BookMarkMyId>
                    kim
                </BookMarkMyId>
            </BookMarkMyInformation>
            <BookMarkListContainer>
            <UserFavoritesContainer>
                {
                  mybookmarks.map((bookmark, index) => (
                    <ProductBox key={index}>
                      <img src={bookmark.preview} style={{width: "100px", height: '120px'}}/>
                      <ProductText>{bookmark.title}</ProductText>
                    </ProductBox>
                  ))
                }
              </UserFavoritesContainer>
            </BookMarkListContainer>
        </BookMarkContainer>
    );
}

export default MyPosts;