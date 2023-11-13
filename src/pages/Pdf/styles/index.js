import styled from "styled-components";

export const ButtonsBox = styled.div`
	display: flex;
`;

export const Button = styled.button`
	width: 100px;
	height: 100px;
`;

export const CurrentPage = styled.div``;

export const PdfWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	height: 100%;
`;

export const PdfViewWrapper = styled.div`
	width: 100%;
	margin: 30px auto;
`;

export const PdfListWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PdfView = styled.canvas`
	max-width: 1110px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	border-radius: 8px;
	background: var(--Text_White, #fff);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ThumbnailsBox = styled.div`
	width: 13%;
	border-right: 1px solid rgba(0, 0, 0, 0.3);
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const GenerateWrapper = styled.div`
	max-width: 1920px;
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 88px;
	border: 1px solid #e1e1e1;
	background: #fff;
	z-index: 1000;
	justify-content: flex-end;
	align-items: center;
	padding: 20px;

	.generate_footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 636px;
		height: 48px;
		margin-left: auto;
	}

	.probType {
		color: #525252;
		font-family: Noto Sans KR;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	.multiple {
		display: flex;
		flex-direction: row;
		width: 169px;
		height: 48px;
		align-items: center;
	}
	.currentPageNumber {
		margin-right: 30px;
		color: #525252;
		font-family: Noto Sans KR;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	.subjective {
		display: flex;
		flex-direction: row;
		width: 169px;
		height: 48px;
		align-items: center;
	}

	.number_select {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.number {
		width: 13px;
		margin-left: 30px;
		color: #909090;
		font-family: Helvetica;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.number_button {
		display: flex;
		flex-direction: column;
		margin-left: 22px;
	}
`;

export const GenerateBtn = styled.button`
	display: flex;
	width: 240px;
	height: 48px;
	padding: 0px 16px;
	justify-content: center;
	align-items: center;
	border-radius: 44px;
	background: ${({ isSelected }) => (isSelected ? "#312E81" : "#e1e1e1")};
	color: ${({ isSelected }) => (isSelected ? "#fff" : "#acacac")};
	cursor: ${({ isLoading }) => (isLoading ? "progress" : "pointer")};
`;

export const Spinner = styled.img`
	width: 75px;
`;
