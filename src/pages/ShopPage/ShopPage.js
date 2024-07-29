import React from "react";
import { firestore } from "../../firebase";
import { useEffect, useState } from "react";

// 레이아웃 불러오기
import { Container } from "../../Components/SharedLayout/Container";
import { BooksContainer } from "../../Components/SharedLayout/BooksContainer";

// 컴포넌트 불러오기
import BookCard from "../../Components/Atoms/BookChard/BookCard";
import EmptyPost from "../../Components/Atoms/EmptyPost/EmptyPost";

import { BookFilterContainer, FilterText } from "./ShopPageStyled";

function ShopPage({ userSearchValue }) {
  // 북 필터 pc, 모바일
  const [selectedfilter, setSelectedFilter] = useState("전체");
  const [selectedOption, setSelectedOption] = useState("전체");

  const [allproducts, setAllProducts] = useState([]);
  const [selectedproduct, setSelectedProduct] = useState([]);
  const [searchlist, setSearchList] = useState([]);
  const [selectfiltertext, setSelectFilterText] = useState("전체");

  useEffect(() => {
    const productRef = firestore.collection("product").orderBy("date", "desc");
    const fetchProducts = async () => {
      try {
        const result = await productRef.get();
        const items = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        if (items) {
          setAllProducts(items);
        }
      } catch (error) {}
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 601px)");
    if (mediaQuery.matches) {
      const productfilter = allproducts.filter(
        (allproducts) => allproducts.select === selectedfilter
      );
      if (productfilter) {
        setSelectedProduct(productfilter);
      }
    } else {
    }
  }, [selectedfilter, selectedOption, allproducts]);

  useEffect(() => {
    if (userSearchValue.length >= 2) {
      const searchproductfilter = allproducts.filter((product) =>
        product.title.includes(userSearchValue)
      );
      setSearchList(searchproductfilter);
    } else {
      setSearchList([]);
    }
  }, [userSearchValue, allproducts]);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setSelectFilterText(filter);
  };

  return (
    <Container>
      <BookFilterContainer>
        {[
          "전체",
          "생명산업과학대",
          "사회과학대",
          "인문예술대",
          "공과대",
          "사범대",
          "약학대",
          "미래융합대",
          "교양",
          "기타",
        ].map((filter) => (
          <FilterText
            key={filter}
            filter={filter}
            selectfiltertext={selectfiltertext}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </FilterText>
        ))}
      </BookFilterContainer>

      {allproducts.length === 0 ? (
        <EmptyPost />
      ) : (
        <BooksContainer>
          {userSearchValue.length >= 2
            ? searchlist.map((product) => (
                <BookCard key={product.id} product={product} />
              ))
            : selectedfilter === "전체"
            ? allproducts.map((product) => (
                <BookCard key={product.id} product={product} />
              ))
            : selectedproduct.map((product) => (
                <BookCard key={product.id} product={product} />
              ))}
        </BooksContainer>
      )}
    </Container>
  );
}

export default ShopPage;
