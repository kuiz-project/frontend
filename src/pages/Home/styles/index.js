import styled from "styled-components";

export const HomeWrapper = styled.div`
	background: #e7ecf8;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const HomeTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 64px;
`;

export const HomeTitleText = styled.span`
	color: #000;
	font-family: "Noto Sans KR_Bold";
	font-size: 64px;
	line-height: 26px; /* 40.625% */
`;

export const HomeTitleText2 = styled.span`
	color: #000;
	font-family: "Noto Sans KR_Medium";
	font-size: 48px;
	line-height: 26px;
`;

export const HomeImg = styled.div`
	width: 500px;
	height: 500px;
	background: yellow;
`;
