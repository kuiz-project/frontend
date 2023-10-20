import React, { useState, useEffect } from "react";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import resultbutton from "../../assets/images/resultbutton.svg";
import nresultbutton from "../../assets/images/button_nactive.svg";
import * as S from "./styles/index";
import { testAPI } from "../../apis/API";
import { useNavigate } from "react-router-dom";

const Mytest = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(0);
  const [tests, setTests] = useState([]);
  const itemsPerPage = 10;
  const [selectedTestId, setSelectedTestId] = useState(null); // 추가된 상태
  // 클릭 이벤트 핸들러
  useEffect(() => {
    // API 호출하여 데이터 가져오기
    testAPI()
      .then((response) => {
        setTests(response.data.tests); // API 응답에서 tests 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);
  const handleDivClick = (index, testId) => {
    if (selected === index) {
      setSelected(null); // 이미 선택된 div를 다시 클릭하면 선택을 해제
      setSelectedTestId(null);
    } else {
      setSelected(index); // 새로운 div를 클릭하면 그 div를 선택
      setSelectedTestId(testId);
    }
  };
  const currentTests = tests.slice(
    selectedPage * itemsPerPage,
    (selectedPage + 1) * itemsPerPage
  );
  const maxPage = Math.ceil(tests.length / itemsPerPage) - 1;
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
          {currentTests.map((test, index) => (
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
              onClick={() => handleDivClick(index, test.test_id)}
            >
              <div className="b1">{test.folder_name}</div>
              <div className="b2">{test.subject}</div>
              <div className="b3">{test.file_name}</div>
              <div className="b4">{test.page}</div>
              <div className="b5">{test.date}</div>
              <div className="b6">{test.score}</div>
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
                  setSelected(null);
                  setSelectedPage((prevPage) => prevPage - 1);
                }
              }}
            />
            <div className="left_body_footer_lists">
              {Array.from({ length: maxPage + 1 }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="left_body_footer_list"
                  style={
                    selectedPage === pageIndex
                      ? { backgroundColor: "#312E81", color: "white" }
                      : {}
                  }
                  onClick={() => {
                    setSelected(null); // 선택 초기화
                    setSelectedPage(pageIndex);
                  }}
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
                if (selectedPage < maxPage) {
                  setSelected(null);
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
              console.log(selectedTestId); //이따가 여기 api로 연결하기
              navigate("/testlist", {
                state: { testId: selectedTestId, submitted: true },
              });
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
