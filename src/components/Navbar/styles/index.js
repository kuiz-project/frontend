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
			margin-right: auto;
			margin-left: 50px;
			display: flex;
			gap: 8px;
		}
		.navBarRightBox {
			display: flex;
			gap: 10px;
			height: 42px;

			.loginBtn {
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
