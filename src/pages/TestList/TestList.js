import React, { useState, useEffect } from "react";
import * as S from "./styles/index";
import { testanswerAPI, testnoansnwerAPI } from "./../../apis/API";
import { useParams } from "react-router-dom";
const TestList = () => {
  const { testId } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]); // questions를 상태로 초기화

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await testnoansnwerAPI.get(testId); // test_id가 1로 주어져 있으므로 이와 같이 설정했습니다.
        const apiData = response.data;

        const formattedQuestions = apiData.questions
          .map((q) => {
            if (q.type === "multiple_choices") {
              return {
                type: "multipleChoice",
                main: q.question,
                choices: q.choices || [],
                answerIndex: q.answer,
              };
            } else {
              return {
                type: "subjective",
                main: q.question,
                choices: q.choices || [],
                answerText: q.answer,
              };
            }
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
  const handleSubmitAnswers = async () => {
    try {
      // // 1. 사용자 답안과 문제 정보를 조합하여 API에 보낼 데이터 형식으로 변환합니다.
      // const apiRequestBody = {
      //   testId: testId,
      //   questions: questions.map((question, index) => ({
      //     ...question,
      //     user_answer:
      //       question.type === "multipleChoice"
      //         ? String.fromCharCode(65 + answers[index])
      //         : answers[index],
      //   })),
      // };

      // // 2. POST 요청을 보냅니다.
      // await testlistAPI.post(
      //   "https://3.39.190.225:8443/api/test/scoretest",
      //   apiRequestBody
      // );
      // 3. 2초 기다린 후 기존의 로직을 수행합니다.
      setTimeout(async () => {
        const response = await testanswerAPI.get(testId);
        if (response.data && response.data.questions) {
          const updatedQuestions = questions.map((question, index) => {
            const matchingAnswer = response.data.questions[index];
            if (matchingAnswer) {
              return {
                ...question,
                correct: matchingAnswer.correct,
                explanation: matchingAnswer.explanation,
              };
            }
            return question;
          });

          setQuestions(updatedQuestions);
          setSubmitted(true);
        }
      }, 2000); // 10초 = 10000ms
    } catch (error) {
      console.error("Error fetching the answer results:", error);
    }
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
                  {submitted && !isCorrect && (
                    <S.IncorrectAnswerNotice>
                      sdfhtdtdhgdhgfdhgfdggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
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
          disabled={!allQuestionsAnswered() || submitted}
          onClick={handleSubmitAnswers}
        >
          제출
        </S.SubmitButton>
      </S.StickyFooter>
    </S.AppContainer>
  );
};

export default TestList;
