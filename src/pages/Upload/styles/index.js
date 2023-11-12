import styled from "styled-components";

export const UploadWrapper = styled.div`
	width: 100%;
	section::-webkit-scrollbar {
		display: none;
	}
	display: flex;
	align-items: center;
	height: 75%;
`;

export const DirTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 220px;
	height: 32px;
	border-radius: 5px;
	background: ${({ isSelected }) => (isSelected ? "#312e81" : "#EDEDED")};
	padding: 11px;
	justify-content: space-between;
`;

export const DirName = styled.span`
	color: ${({ isSelected }) => (isSelected ? "#fff" : "#424242")};
	font-size: 14px;
	font-family: "Noto Sans KR_Medium";
`;

export const DirInput = styled.input`
	color: ${({ isSelected }) => (isSelected ? "#fff" : "#424242")};
	background: #ededed;
	font-size: 14px;
	width: 100%;
	font-family: "Noto Sans KR_Medium";
`;

export const DirLeft = styled.div`
	display: flex;
	gap: 8px;
`;
export const DirEditBtn = styled.button`
	font-size: 15px;
	white-space: nowrap;
	img {
		width: 20px;
		height: 20px;
	}
`;

export const SideBarWrapper = styled.section`
	position: fixed;
	top: 100px;
	z-index: 998;
	height: 100%;
	width: 234px;
	background-color: white;
	overflow: scroll;
	// webkit 렌더링 엔진에서 스크롤 바 숨기기
	&::-webkit-scrollbar {
		/* This is the magic bit for WebKit */
		display: none;
	}
`;

export const SideBarHeader = styled.section`
	display: flex;
	gap: 15px;
	border: 1px solid #ededed;
	background: var(--Text_White, #fff);
	width: 234px;
	justify-content: flex-end;
	align-items: center;
	padding: 13px;
	height: 40px;
	position: fixed;
	margin-top: -1px;
`;

export const SectionListBox = styled.section`
	margin-top: 35px;
	margin-bottom: 10px;
	padding: 10px 10px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const DirBox = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;
export const MainWrapper = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 234px;
`;
export const EditBtn = styled.button`
	color: #555;
	font-size: 16px;
	font-weight: 350;
	z-index: 10;
`;
export const CompleteBtn = styled.button`
	color: #555;
	font-size: 16px;
	font-weight: 350;
	z-index: 10;
`;
export const DeleteBtn = styled.button`
	color: #555;
	font-size: 16px;
	font-weight: 350;
	z-index: 10;
`;

export const AddBtn = styled.button`
	color: #555;
	font-size: 16px;
	font-weight: 350;
	z-index: 10;
`;

export const DirInner = styled.div`
	display: flex;
	gap: 8px;
	width: 100%;
	height: 100%;
	flex-direction: column;
`;

export const LectureUploadWrapper = styled.section`
	max-width: 712px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const SelectWrapper = styled.div`
	border-radius: 16px;
	width: 90%;
	height: 200px;
	background-color: white;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.12);
	display: flex;
	align-items: center;
	padding: 20px;
	overflow: scroll;
	justify-content: space-around;
	// webkit 렌더링 엔진에서 스크롤 바 숨기기
	&::-webkit-scrollbar {
		/* This is the magic bit for WebKit */
		display: none;
	}
`;

export const SelectTitle = styled.div`
	color: #000;
	font-family: Noto Sans KR_Medium;
	font-size: 20px;
`;

export const List = styled.span`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	width: 400px;
`;
//강의명 임시로 괜찮게 보이도록 마진 설정함
export const List2 = styled.span`
	margin-top: 600px;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	width: 400px;
`;
export const SelectItem = styled.button`
	height: 45px;
	padding: 16px 24px;
	border-radius: 8px;
	border: 1px solid #e1e1e1;
	font-weight: 700;
	color: ${({ isSelected }) => (isSelected ? "#3730A3" : "#A3A3A3")};
	font-size: 20px;

	display: flex;
	align-items: center;
`;

export const FileUploadWrapper = styled.div`
	max-width: 712px;
	width: 90%;
	height: 84px;
	border-radius: 16px;
	align-items: center;
	background: var(--Text_White, #fff);
	padding: 20px 74px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const UploadBox = styled.div`
	border-radius: 40px;
	border: 1px solid #312e81;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	width: 100%;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	position: relative;
	.hiddenInput {
		color: var(--Main_light, #3730a3);
		font-family: Noto Sans KR_Bold;
		font-size: 16px;
		display: none;
	}
	.customFileUpload {
		color: var(--Main_light, #3730a3);
		font-family: Noto Sans KR_Bold;
		font-size: 16px;
		cursor: pointer;
	}
`;

export const UploadCancelBtn = styled.button`
	img {
		width: 16px;
		height: 19px;
		position: absolute;
		top: 8px;
		right: 16px;
	}
`;

export const FileInput = styled.input`
	color: #424242;
	width: 90%;
	font-size: 14px;
	border: none;
	outline: none;
	background: none;
	padding: 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
`;

export const FileItemWrapper = styled.button`
	padding: 10px 10px 10px 34px;
	height: 32px;
	text-align: left;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 6px;
	background: ${({ isSelected }) => (isSelected ? `#e3e6f2` : `#fff`)};
`;

export const FileName = styled.span`
	color: #424242;
	font-size: 14px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
`;

export const FileEditBtn = styled.button`
	span {
		font-size: 9px;
	}
`;

export const Footer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 92px;
	border-top: 1px solid #e1e1e1;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
	position: fixed;
	bottom: 0;
	z-index: 10000;
	background-color: white;
`;
export const UploadBtn = styled.button`
	position: fixed;
	right: 64px;
	display: flex;
	width: 240px;
	height: 48px;
	padding: 0px 16px;
	justify-content: center;
	align-items: center;
	border-radius: 44px;
	background: ${({ pdfIsSelected }) => (pdfIsSelected ? "#312E81" : "#e1e1e1")};
	color: ${({ pdfIsSelected }) => (pdfIsSelected ? "#fff" : "#acacac")};
	cursor: ${({ isLoading }) => (isLoading ? "progress" : "pointer")};
	font-family: "Noto Sans KR_Bold";
	font-size: 16px;
`;
export const Spinner = styled.img`
	width: 75px;
`;
