import * as S from "./styles/index";
import onboarding from "../../assets/images/onboarding.png";
const Home = () => {
	return (
		<S.HomeWrapper>
			<S.HomeTitleBox>
				<S.HomeTitleText>당신의 스터디메이트, KUIZ</S.HomeTitleText>
				<S.HomeTitleText2>매 학기 시험공부 걱정하지 마세요</S.HomeTitleText2>
			</S.HomeTitleBox>
			<S.HomeImg src={onboarding} alt="학습 이미지"></S.HomeImg>
		</S.HomeWrapper>
	);
};

export default Home;
