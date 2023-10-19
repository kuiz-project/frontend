import React, { useState, useEffect } from "react";
import * as S from "./styles/index";
import { testlistAPI } from "./../../apis/API";
import { useLocation } from "react-router-dom";
const TestList = () => {
  const location = useLocation();
  const testId = location.state?.testId;
  const [submitted, setSubmitted] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]); // questions를 상태로 초기화
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await testlistAPI.get(`/getanswer/${testId}`); // test_id가 1로 주어져 있으므로 이와 같이 설정했습니다.
        const apiData = response.data;

        const formattedQuestions = apiData.questions
          .map((q) => {
            console.log("Correct:", q.correct, "Explanation:", q.explanation);

            const baseQuestion = {
              correct: q.correct,
              explanation: q.explanation,
            };
            if (q.type === "multiple_choices") {
              return {
                ...baseQuestion,
                type: "multipleChoice",
                main: q.question,
                choices: q.choices || [],
                answerIndex: q.answer,
              };
            } else {
              return {
                ...baseQuestion,
                type: "subjective",
                main: q.question,
                choices: q.choices || [],
                answerText: q.answer,
              };
            }
            // 다른 문제 유형도 추가할 수 있습니다.
            return null;
          })
          .filter(Boolean);

        setQuestions(formattedQuestions);
      } catch (error) {
        console.error("Error fetching the test data:", error);
      }
    };

    fetchApiData();
  }, []);
  // 사용자가 제출했는지 여부를 확인하는 상태
  const handleSubmitAnswers = () => {
    console.log("제출된 답안:", answers);
    setSubmitted(true);
    // 필요하다면 여기서 answers를 서버로 전송하거나 다른 처리를 할 수 있습니다.
  };
  const allQuestionsAnswered = () => {
    return Object.keys(answers).length === questions.length;
  };

  // 각 문제에 대한 답안을 저장하는 상태

  const handleChoiceClick = (questionIndex, choiceIndex) => {
    setSelectedChoices({
      ...selectedChoices,
      [questionIndex]: choiceIndex,
    });
    setAnswers({
      ...answers,
      [questionIndex]: choiceIndex,
    });
    console.log(`문제 ${questionIndex + 1}의 선택된 답안: ${choiceIndex}`);
  };
  const handleSubjectiveBlur = (questionIndex, e) => {
    e.preventDefault();
    setAnswers({
      ...answers,
      [questionIndex]: e.target.value,
    });
    console.log(`문제 ${questionIndex + 1}의 입력된 답안: ${e.target.value}`);
  };

  return (
    <S.AppContainer>
      <S.TestWrapper>
        <S.TestList>
          {questions.map((question, index) => {
            const isAnswered = typeof answers[index] !== "undefined";
            const isCorrect =
              isAnswered &&
              (question.type === "multipleChoice"
                ? answers[index] === question.answerIndex
                : answers[index] === question.answerText);
            const titleStyle =
              submitted && !question.correct
                ? { backgroundColor: "#FDA5A5" }
                : { backgroundColor: "#E7ECF8" };

            if (question.type === "multipleChoice") {
              return (
                <S.TestMultipleChoice key={index}>
                  <S.TestTitle style={titleStyle}>
                    <S.TestTitleSmallTitle>객관식 문제</S.TestTitleSmallTitle>
                    <S.TestTitleMain>
                      {index + 1}. {question.main}
                    </S.TestTitleMain>
                  </S.TestTitle>
                  <S.TestProblem>
                    {question.choices.map((choice, idx) => {
                      const isSelected = selectedChoices[index] === idx;
                      const isAnswer = question.answerIndex === idx;

                      // 조건에 따라 빨간색 테두리 적용
                      const choiceStyle = {};
                      if (submitted && !isCorrect && isAnswer) {
                        choiceStyle.border = "2px solid red";
                      }

                      const ChoiceComponent = S[`TestProblem${idx + 1}`];
                      return (
                        <ChoiceComponent
                          key={idx}
                          style={choiceStyle} // 적용한 스타일을 여기에 추가
                          isSelected={isSelected}
                          onClick={() => handleChoiceClick(index, idx)}
                        >
                          {String.fromCharCode(65 + idx)}. {choice}
                        </ChoiceComponent>
                      );
                    })}
                  </S.TestProblem>
                  {submitted && !question.correct && (
                    <S.IncorrectAnswerNotice>
                      {question.explanation}
                    </S.IncorrectAnswerNotice>
                  )}
                </S.TestMultipleChoice>
              );
            } else if (question.type === "subjective") {
              return (
                <S.TestSubjective key={index}>
                  <S.TestTitle style={titleStyle}>
                    <S.TestTitleSmallTitle>주관식 문제</S.TestTitleSmallTitle>
                    <S.TestTitleMain>
                      {index + 1}. {question.main}
                    </S.TestTitleMain>
                  </S.TestTitle>
                  <S.TestProblem_2>
                    <S.TestProblemSubjective
                      placeholder="여기에 답 입력"
                      defaultValue={answers[index] || ""}
                      onBlur={(e) => handleSubjectiveBlur(index, e)}
                    />
                  </S.TestProblem_2>
                  {submitted && !question.correct && (
                    <S.IncorrectAnswerNotice>
                      {question.explanation}
                    </S.IncorrectAnswerNotice>
                  )}
                </S.TestSubjective>
              );
            }
            return null;
          })}
        </S.TestList>
      </S.TestWrapper>
      <S.StickyFooter>
        <S.SubmitButton
          disabled={!allQuestionsAnswered()}
          onClick={handleSubmitAnswers}
        >
          제출
        </S.SubmitButton>
      </S.StickyFooter>
    </S.AppContainer>
  );
};

export default TestList;
