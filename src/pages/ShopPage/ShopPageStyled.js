import styled from "styled-components";

export const BookFilterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
export const FilterText = styled.div`
  font-family: "GmarketSansBold";
  font-size: 16px;
  margin-right: 14px;
  color: ${(props) =>
    props.selectfiltertext === props.filter ? "#55666f" : "black"};
  padding-bottom: 8px;
  transition: border-bottom 0.5s;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%; // 중앙에서 시작
    transform: translateX(-50%); // 중앙 정렬 보정
    width: 0; // 초기 너비 0
    height: 2px; // 높이 설정
    background-color: #55666f;
    transition: width 1s; // 너비 변경에 대한 전환 효과 적용
  }

  /* border-bottom: ${(props) =>
    props.selectfiltertext === props.filter ? "solid 2px #55666f" : "none"}; */
  // 선택된 필터에 대한 스타일
  ${(props) =>
    props.selectfiltertext === props.filter &&
    `
    color: #55666f;
    &::after {
      width: 100%; // 전체 너비로 확장
    }
  `}

  &:hover {
    color: #55666f;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-right: 12px;
  }
`;
