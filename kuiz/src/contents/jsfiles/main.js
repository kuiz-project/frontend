import React from "react";
import '../cssfiles/main.css';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as User } from '../images/Ellipse 2.svg';
import { ReactComponent as Logout } from '../images/logoutbutton.svg';

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="header">
                <Logo className='logo'/>
                <div className="nav-detail">문제 생성</div>
                <div className="nav-detail">PDF 업로드</div>
                <div className="nav-detail">나의 시험지</div>
                <div className="nav-detail">결제 정보</div>
                <div></div>
                <Logout className='logout'/>
                <User className='userLogo'/>
            </div>
            <section>{/*왼쪽 PDF 섹션*/}
                <div className="section_header"></div>
                <div className="section_lists"></div>
            </section>
            <div>
            </div>
            <footer></footer>
        </div>
    );
}

export default MainPage;