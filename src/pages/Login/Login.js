import React, { useState } from "react";
import * as S from "./styles/index";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState, userNameState } from "../../recoil/atom";
import { loginPostAPI } from "./../../apis/API";
import {
	InputBox,
	InputContent,
	SignupForm,
	InputTitle,
} from "../Signup/styles";
const LoginPage = () => {
	const navigate = useNavigate();

	const [isLoginState, setIsLoginState] = useRecoilState(LoginState);
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [username, setUsername] = useRecoilState(userNameState);

	const handleLogin = async () => {
		const submission = {
			id: id,
			password: pw,
		};
		try {
			const res = await loginPostAPI.post("", submission);
			if (res.status === 200) {
				setUsername(res.data.name);
				setIsLoginState(true);
				navigate("/");
			}
		} catch (err) {
			if (err.response.status === 400) {
				setIsError(true);
				console.log("아이디나 비밀번호 오류");
				setIsSuccess(false);
			}
			if (err.response.status === 500) {
				console.log("서버 에러");
			}
		}
	};

	return (
		<S.SignupWrapper>
			<S.LoginTitleBox>
				<img src={logo} alt="로고 이미지" />
				<S.LoginTitle>로그인</S.LoginTitle>
			</S.LoginTitleBox>
			<S.SignupForm>
				<InputBox>
					<InputTitle>아이디</InputTitle>
					<InputContent
						type="text"
						placeholder="ID"
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
				</InputBox>
				<InputBox>
					<InputTitle>비밀번호</InputTitle>
					<InputContent
						type="password"
						placeholder="PW"
						value={pw}
						onChange={(e) => setPw(e.target.value)}
					/>
				</InputBox>
				{isError && (
					<S.LoginError>아이디나 비밀번호가 맞지 않습니다.</S.LoginError>
				)}
				<S.LoginBtnBox>
					<S.LoginBtn onClick={handleLogin}>로그인</S.LoginBtn>
					<S.SignupBtn onClick={() => navigate("/signup")}>
						회원가입
					</S.SignupBtn>
				</S.LoginBtnBox>
			</S.SignupForm>
		</S.SignupWrapper>
	);
};

export default LoginPage;
