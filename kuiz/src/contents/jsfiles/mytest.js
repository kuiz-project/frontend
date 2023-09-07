import React, { useState } from 'react';
import { ReactComponent as Left } from '../images/left.svg';
import { ReactComponent as Right } from '../images/right.svg';
import { ReactComponent as ResultButton } from '../images/resultbutton.svg';

export const MyTest = () => {
    const [selected, setSelected] = useState(null);

    // 클릭 이벤트 핸들러
    const handleDivClick = (index) => {
        if (selected === index) {
            setSelected(null);  // 이미 선택된 div를 다시 클릭하면 선택을 해제
        } else {
            setSelected(index);  // 새로운 div를 클릭하면 그 div를 선택
        }
    }

    const testData = [
        { b1: 'fkfkfkfkfk', b2: '운체제', b3: 'PDF 이름_번호', b4: '210', b5: '2023.01.02', b6: '13/20' },
        { b1: 'ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러', b2: 'ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ', b3: 'ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호', b4: '2', b5: '2023.01.02', b6: '13/20' },
        { b1: 'ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러', b2: 'ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ', b3: 'ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호', b4: '2', b5: '2023.01.02', b6: '13/20' },
        { b1: 'ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러', b2: 'ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ', b3: 'ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호', b4: '2', b5: '2023.01.02', b6: '13/20' },
        { b1: 'ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러', b2: 'ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ', b3: 'ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호', b4: '2', b5: '2023.01.02', b6: '13/20' },
        { b1: 'ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러', b2: 'ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ', b3: 'ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호', b4: '2', b5: '2023.01.02', b6: '13/20' },
        { b1: 'ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러', b2: 'ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ', b3: 'ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호', b4: '2', b5: '2023.01.02', b6: '13/20' }
        // ... (나머지 데이터)
    ];
    return (
        <div className='mytest'>
            <div className='mytest_left'>
                <div className='left_header'>
                    <div className='left_header_top'>나의 시험지</div>
                    <div className='left_header_bottom'>나의 시험지를 통해 틀린 문제를 점검하고 무엇무엇을 향상시켜보세용</div>
                </div>
                <div className='left_body'>
                    <div className='left_body_header'>
                        <div className='h1'>디렉토리명</div>
                        <div className='h2'>강의명</div>
                        <div className='h3'>테스트명</div>
                        <div className='h4'>페이지</div>
                        <div className='h5'>출제일</div>
                        <div className='h6'>점수</div>
                    </div>
                    {testData.map((data, index) => (
                        <div
                            key={index}
                            className='left_body_contents'
                            style={
                                selected === index
                                    ? { borderRadius: '12px', background: '#E3E6F2' }
                                    : selected === index + 1
                                        ? { border: 'none' }
                                        : {}
                            }
                            onClick={() => handleDivClick(index)}
                        >
                            <div className='b1'>{data.b1}</div>
                            <div className='b2'>{data.b2}</div>
                            <div className='b3'>{data.b3}</div>
                            <div className='b4'>{data.b4}</div>
                            <div className='b5'>{data.b5}</div>
                            <div className='b6'>{data.b6}</div>
                        </div>
                    ))}
                    <div className='left_body_footer'>
                        <Left />123<Right />
                    </div>
                </div>
            </div>
            <div className='mytest_right'></div>
            <footer>
                <ResultButton
                    className='resbutton'
                    onClick={() => {
                        if (selected === null) {
                            alert("PDF 선택하셔야죠 인간?");
                        } else {
                            alert(`${selected + 1}번째 PDF를 누르셨네요!!`);
                        }
                    }}
                />
            </footer>
        </div>
    );
}


