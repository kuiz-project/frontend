import * as S from "./styles/index";

const ErrorModal = ({ leaveModal }) => {
	return (
		<S.ModalBox>
			<S.ModalWrapper>
				<span className="leaveModalTitle">오류가 발생했습니다.</span>
				<div className="leaveModalButtonWrapper">
					<button className="cancleBtn" onClick={leaveModal}>
						확인
					</button>
				</div>
			</S.ModalWrapper>
		</S.ModalBox>
	);
};

export default ErrorModal;
