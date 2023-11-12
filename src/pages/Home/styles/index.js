import styled from "styled-components";

export const HomeWrapper = styled.div`
	background: #e7ecf8;

	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const HomeTitleBox = styled.div``;

export const HomeTitleText = styled.p`
	color: #000;
	font-family: "Noto Sans KR_Bold";
	font-size: 64px;
	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const HomeTitleText2 = styled.p`
	color: #000;
	font-family: "Noto Sans KR_Medium";
	font-size: 48px;
	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const HomeImg = styled.img`
	@media screen and (max-width: 1200px) {
		display: none;
	}
`;
