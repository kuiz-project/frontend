import React, { useState } from 'react';
import '../cssfiles/login.css';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as LoginButton } from '../images/loginbutton.svg';
import { ReactComponent as SignupButton } from '../images/signupbutton.svg';
import { ReactComponent as Line } from '../images/line.svg';
import kakaoLoginButton from '../images/kakaoLogin.png';

const LoginPage = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    return (
        <div className='loginPage'>
            <header>
                <div className='header_logo'><Logo /></div>
                <span className='header_text'>로그인</span>
            </header>
            <main>
                <div className='idpw'>
                    <input className='id'
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input className='pw'
                        type="password"
                        placeholder="PW"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                </div>
                <div className='loginsignup'>
                    <div className='login'><LoginButton /></div>
                    <div className='sigunup'><SignupButton /></div>
                </div>
                <div className='bar'><Line /></div>
                <img src={kakaoLoginButton} alt='카카오 로그인 버튼' />
            </main>
        </div>
    );
}



export default LoginPage;