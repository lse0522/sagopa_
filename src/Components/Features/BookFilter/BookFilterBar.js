import { useEffect, useState } from "react";

import{BookFilterContainer,FilterText } from './BookFilterBarStyled';

function BookFilterBar ({setSelectedFilter}) {
    const [selectfiltertext, setSelectFilterText]= useState("전체")

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        setSelectFilterText(filter)
      };
    return(
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
    );
}
export default BookFilterBar;