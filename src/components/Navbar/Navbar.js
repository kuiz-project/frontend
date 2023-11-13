import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import login from "../../assets/images/loginbutton.svg";
import * as S from "./styles/index";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState, loginModalState } from "../../recoil/atom";
import { logoutPostAPI } from "../../apis/API";
import NavbarModal from "./NavbarModal";

const Navbar = () => {
	const navigate = useNavigate();
	// 로그인 상태

	const [isLoginState, setIsLoginState] = useRecoilState(LoginState);
	const [isLoginModal, setIsLoginModal] = useState(false);

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

	const toggleModal = () => {
		setIsLoginModal(!isLoginModal);
	};

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

	const handleLogout = async () => {
		const res = await logoutPostAPI.post();
		// 로그아웃 완료
		if (res.status === 200) {
			setIsLoginState(false);
			navigate("/");
		}
		localStorage.clear();
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
							<i class="fa-solid fa-bars" onClick={toggleModal}></i>
							<button
								src={login}
								className="loginBtn"
								onClick={() => {
									handleLogout();
								}}
							>
								로그아웃
							</button>

							<NavbarModal
								handleLogout={handleLogout}
								isModalOpen={isLoginModal}
								toggleModal={toggleModal}
							/>
						</>
					) : (
						<>
							<i class="fa-solid fa-bars" onClick={toggleModal}></i>
							<button
								src={login}
								className="loginBtn"
								onClick={() => {
									navigate("/login");
								}}
							>
								로그인
							</button>
							<NavbarModal
								handleLogout={handleLogout}
								isModalOpen={isLoginModal}
								toggleModal={toggleModal}
							/>
						</>
					)}
				</section>
			</section>
		</S.NavbarWrapper>
	);
};

export default Navbar;
