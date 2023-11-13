import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles/index";
import OutSideClick from "../../utils/OutSideClick";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState, loginModalState, userNameState } from "../../recoil/atom";

const NavbarModal = ({ handleLogout, isModalOpen, toggleModal }) => {
	const navigate = useNavigate();
	const [username, setUsername] = useRecoilState(userNameState);
	const [isLoginState, setIsLoginState] = useRecoilState(LoginState);
	console.log(isLoginState);
	const modalRef = useRef(null);
	const handleClose = () => {};
	OutSideClick(modalRef, handleClose);

	return (
		<S.AppWrap ref={modalRef}>
			{isModalOpen && (
				<S.ModalWrap>
					<S.Contents>
						{isLoginState ? (
							<>
								<div>
									<p>안녕하세요.</p>
									<p>{username}님!</p>
								</div>
								<div className="modalButton">
									<S.Button
										onClick={(e) => {
											toggleModal();
											handleLogout();
										}}
									>
										로그아웃
									</S.Button>
									<S.Button
										onClick={(e) => {
											toggleModal();
											navigate("/upload");
										}}
									>
										문제 생성
									</S.Button>
									<S.Button
										onClick={(e) => {
											toggleModal();
											navigate("/mytest");
										}}
									>
										나의 시험지
									</S.Button>
								</div>
							</>
						) : (
							<div className="modalButton">
								<S.Button
									onClick={(e) => {
										toggleModal();
										navigate("/login");
									}}
								>
									로그인
								</S.Button>
							</div>
						)}
					</S.Contents>
				</S.ModalWrap>
			)}
		</S.AppWrap>
	);
};

export default NavbarModal;
