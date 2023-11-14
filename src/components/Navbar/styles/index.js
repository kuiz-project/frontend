import styled from "styled-components";

export const NavbarWrapper = styled.div`
	width: 100%;
	height: 100%;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
	padding: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1000;
	.userProfile {
		width: 41px;
		height: 41px;
	}
	.navBarLeftBox {
		max-width: 1440px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.navBtnWrapper {
			@media screen and (max-width: 1200px) {
				display: none;
			}
			margin-right: auto;
			margin-left: 50px;
			display: flex;
			gap: 8px;
		}
		.navBarRightBox {
			display: flex;
			height: 42px;
			.fa-bars {
				display: none;
				font-size: 40px;
				cursor: pointer;
				padding-right: 15px;
				@media screen and (max-width: 1200px) {
					display: block;
				}
			}

			.loginBtn {
				@media screen and (max-width: 1200px) {
					display: none;
				}
				display: block;
				height: 42px;
				display: flex;
				padding: 16px 24px;
				align-items: center;
				border-radius: 8px;
				border: 1px solid #c9d2fa;
				color: #000;
				font-size: 14px;
			}
			img {
				cursor: pointer;
			}
		}
	}
`;

export const NavBarItem = styled.button`
	padding: 16px 24px 16px 23px;
	justify-content: center;
	align-items: center;
	gap: 12px;
	font-size: 16px;
	color: ${({ isSelected }) => (isSelected ? "#3830a3" : "#a3a3a3")};
	&:hover {
		color: #3730a3;
	}
`;

export const AppWrap = styled.div`
	@media screen and (min-width: 1200px) {
		display: none;
	}
	text-align: center;
	position: relative;
`;

// modal

export const ModalWrap = styled.div`
	width: 200px;
	border-radius: 16px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	border: 1px solid #d1d6db;
	background-color: #f9fafb;
	position: absolute;
	top: 57px;
	left: -200px;
`;

export const Contents = styled.div`
	padding-top: 23px;
	padding-bottom: 13px;
	display: flex;
	gap: 16px;
	flex-direction: column;
	p {
		font-size: 16px;
		color: #000;
		letter-spacing: -0.02em;
		font-family: Pretendard;
		text-align: center;
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		letter-spacing: -0.02em;
	}
	.modalButton {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 40px;
	font-size: 16px;
	padding: 8px 12px;
	color: #191f28;
	letter-spacing: -0.02em;
	&:hover {
		background-color: #f2f4f6;
	}
`;
