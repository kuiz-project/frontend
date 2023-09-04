import React, { useState } from "react";
import { GenerateView } from "./generatequestions";
import { UploadView } from "./upload";
import { MyTest } from './mytest';
import '../cssfiles/main.css';
import '../cssfiles/mytest.css';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as User } from '../images/Ellipse 2.svg';
import { ReactComponent as Logout } from '../images/logoutbutton.svg';

const MainPage = () => {
    const [activenav, setActivenav] = useState(0);
    const handleClick = (index) => {
        setActivenav(index);
    }
    const renderView = () => {
        if (activenav === 0) {
            return <GenerateView />;
        }
        if (activenav === 1) {
            return <UploadView/>;
        }
        if (activenav === 2){
            return <MyTest/>;
        }
        // 다른 뷰에 대한 조건도 추가 가능
        return null;
    };

    return (
        <div className="mainPage">
            <div className="header">
                <Logo className='logo' />
                <div
                    className={`nav-detail ${activenav === 0 ? "active" : ""}`}
                    onClick={() => handleClick(0)}
                >
                    문제 생성
                </div>
                <div
                    className={`nav-detail ${activenav === 1 ? "active" : ""}`}
                    onClick={() => handleClick(1)}
                >
                    PDF 업로드
                </div>
                <div
                    className={`nav-detail ${activenav === 2 ? "active" : ""}`}
                    onClick={() => handleClick(2)}
                >
                    나의 시험지
                </div>
                <div
                    className={`nav-detail ${activenav === 3 ? "active" : ""}`}
                    onClick={() => handleClick(3)}
                >
                    결제 정보
                </div>
                <div></div>
                <Logout className='logout' />
                <User className='userLogo' />
            </div>
            { renderView() }
        </div>
    );
}

export default MainPage;