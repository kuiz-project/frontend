import React, { useState, useEffect } from "react";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import resultbutton from "../../assets/images/resultbutton.svg";
import nresultbutton from "../../assets/images/button_nactive.svg";
import * as S from "./styles/index";
import { testAPI } from "../../apis/API";

const Mytest = () => {
  const [selected, setSelected] = useState(null);
  const [selectedPage, setSelectedPage] = useState(0);

  // 클릭 이벤트 핸들러
  const handleDivClick = (index) => {
    if (selected === index) {
      setSelected(null); // 이미 선택된 div를 다시 클릭하면 선택을 해제
    } else {
      setSelected(index); // 새로운 div를 클릭하면 그 div를 선택
    }
  };
  const testData = [
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    // ... (나머지 데이터)
  ];
  let displayData;
  switch (selectedPage) {
    case 0:
      displayData = testData;
      break;
    case 1:
      displayData = testData;
      break;
    case 2:
      displayData = testData;
      break;
    default:
      displayData = testData; // 기본값 설정
      break;
  }
  return (
    <S.MytestWrapper>
      <div className="left_header">
        <div className="left_header_top">나의 시험지</div>
        <div className="left_header_bottom">
          나의 시험지를 통해 틀린 문제를 점검하고 무엇무엇을 향상시켜보세용
        </div>
      </div>
      <div className="mytest_left">
        <div className="left_body">
          <div className="left_body_header">
            <div className="h1">디렉토리명</div>
            <div className="h2">강의명</div>
            <div className="h3">테스트명</div>
            <div className="h4">페이지</div>
            <div className="h5">출제일</div>
            <div className="h6">점수</div>
          </div>
          {displayData.map((data, index) => (
            <div
              key={index}
              className="left_body_contents"
              style={
                selected === index
                  ? { borderRadius: "12px", background: "#E3E6F2" }
                  : selected === index + 1
                  ? { border: "none" }
                  : {}
              }
              onClick={() => handleDivClick(index)}
            >
              <div className="b1">asdf</div>
              <div className="b2">2323</div>
              <div className="b3">2352345</div>
              <div className="b4">rwe</div>
              <div className="b5">sdfdsf</div>
              <div className="b6">3</div>{" "}
              {/* 점수 정보가 API 응답에 없기 때문에 임시 텍스트를 넣었습니다. */}
            </div>
          ))}
          <div className="left_body_footer">
            <img
              src={left}
              alt="왼쪽 버튼"
              className="button"
              onClick={() => {
                if (selectedPage > 0) {
                  // 0보다 클 때만 감소
                  setSelectedPage((prevPage) => prevPage - 1);
                }
              }}
            />
            <div className="left_body_footer_lists">
              {Array(3)
                .fill(null)
                .map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="left_body_footer_list"
                    style={
                      selectedPage === pageIndex
                        ? { backgroundColor: "#312E81", color: "white" }
                        : {}
                    }
                    onClick={() => setSelectedPage(pageIndex)}
                  >
                    {pageIndex + 1}
                  </div>
                ))}
            </div>
            <img
              src={right}
              alt="오른쪽 버튼"
              className="button"
              onClick={() => {
                // 최대 페이지 수 2 (0-based index)를 넘기지 않도록 조건 추가
                if (selectedPage < 2) {
                  setSelectedPage((prevPage) => prevPage + 1);
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="mytest_footer">
        {selected == 0 || selected ? (
          <img
            src={resultbutton}
            alt="Result Button"
            className="resbutton"
            onClick={() => {
              alert(`${selected + 1}번째 PDF를 클릭했음`);
            }}
          />
        ) : (
          <img
            src={nresultbutton}
            alt="Not Active Result Button"
            className="nresbutton"
          />
        )}
      </div>
    </S.MytestWrapper>
  );
};

export default Mytest;
