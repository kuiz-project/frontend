import { styled } from "styled-components";

export const LoginTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	max-width: 440px;
	width: 100%;
	height: 142px;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
`;

export const LoginTitle = styled.span`
	color: #494949;
	font-size: 24px;
	font-family: "Noto Sans KR_Bold";
`;

export const LoginForm = styled.div`
	display: flex;
	max-width: 440px;
	width: 100%;
	padding: 80px 50px 65px 50px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 32px;
	border-radius: 12px;
	background: var(--Text_White, #fff);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const LoginBtnBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
	width: 90%;
`;

export const LoginBtn = styled.button`
	margin-top: 40px;
	display: flex;
	height: 48px;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-left: -30px;
	border-radius: 44px;
	background: var(--Main, #312e81);
	color: var(--Text_White, #fff);
	font-family: "Noto Sans KR_Bold";
	font-size: 16px;
`;

export const SignupBtn = styled.button`
	display: flex;
	margin-left: -30px;
	width: 100%;
	height: 48px;
	justify-content: center;
	align-items: center;
	background: var(--Main, #fff);
	color: var(--Text_White, #312e81);
	font-family: "Noto Sans KR_Bold";
	font-size: 16px;
	border-radius: 44px;
	border: 1px solid var(--Main, #312e81);
`;
export const SignupWrapper = styled.div`
	max-width: 440px;
	width: 100%;
	height: 80%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	text-align: center;
`;
export const SignupForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: flex-end;
	padding: 35px 57px;
	border-radius: 12px;
	background: var(--Text_White, #fff);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const LoginError = styled.span`
	display: flex;
	width: 100%;
	justify-content: flex-start;
	font-size: 15px;
	color: tomato;
`;
