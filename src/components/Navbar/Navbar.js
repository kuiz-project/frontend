import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/Ellipse 2.svg";
import login from "../../assets/images/loginbutton.svg";
import * as S from "./styles/index";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../../recoil/atom";
import { logoutPostAPI } from "../../apis/API";

const Navbar = () => {
	const navigate = useNavigate();

	// 로그인 상태

	const [isLoginState, setIsLoginState] = useRecoilState(LoginState);

	// Nav바 상태
	const [navItem, setNavItem] = useState([
		{
			name: "문제 생성",
			isSelected: false,
		},
		{
			name: "나의 시험지",
			isSelected: false,
		},
	]);

	const handleNavItem = (index) => {
		if (isLoginState) {
			const newNavItem = [...navItem].map((item, idx) => {
				if (index === idx) {
					return { ...item, isSelected: true };
				} else {
					return { ...item, isSelected: false };
				}
			});
			setNavItem(newNavItem);
			switch (index) {
				case 0:
					navigate("/upload");
					break;
				case 1:
					navigate("/mytest");
					break;
				default:
					break;
			}
		} else {
			console.log("로그인 필요");
		}
	};

	return (
		<S.NavbarWrapper>
			<section className="navBarLeftBox">
				<button
					onClick={() => {
						const newNavItem = [...navItem].map((item, idx) => {
							return { ...item, isSelected: false };
						});
						setNavItem(newNavItem);
						navigate("/");
					}}
				>
					<img src={logo} alt="로고 이미지" />
				</button>
				<div className="navBtnWrapper">
					{navItem.map((item, idx) => {
						return (
							<S.NavBarItem
								onClick={() => handleNavItem(idx)}
								isSelected={item.isSelected}
							>
								{item.name}
							</S.NavBarItem>
						);
					})}
				</div>
				<section className="navBarRightBox">
					{isLoginState ? (
						<>
							<button
								src={login}
								className="loginBtn"
								onClick={async () => {
									const res = await logoutPostAPI.post();
									// 로그아웃 완료
									if (res.status === 200) {
										setIsLoginState(false);
										navigate("/");
									}
								}}
							>
								로그아웃
							</button>
							<img src={user} className="userProfile" alt="유저 로고 이미지" />
						</>
					) : (
						<button
							src={login}
							className="loginBtn"
							onClick={() => {
								navigate("/login");
							}}
						>
							로그인
						</button>
					)}
				</section>
			</section>
		</S.NavbarWrapper>
	);
};

export default Navbar;
