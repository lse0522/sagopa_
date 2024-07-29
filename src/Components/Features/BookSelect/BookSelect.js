import { Select } from "./BookSelectStyled";
import { useEffect, useState } from "react";

function BookSelect({ setSelectedOption }) {
  const [selectedValue, setSelectedValue] = useState("전체");

  const onChangeSelect = (e) => {
    setSelectedValue(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <Select value={setSelectedOption} onChange={onChangeSelect}>
      <option value="전체">전체</option>
      <option value="생명산업과학대">생명산업과학대</option>
      <option value="사회과학대">사회과학대</option>
      <option value="인문예술대">인문예술대</option>
      <option value="공과대">공과대</option>
      <option value="사범대">사범대</option>
      <option value="약학대">약학대</option>
      <option value="미래융합대">미래융합대</option>
      <option value="교양">교양</option>
      <option value="기타">기타</option>
    </Select>
  );
}
export default BookSelect;
