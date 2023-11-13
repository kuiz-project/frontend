import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// recoil-persist 설정
const { persistAtom } = recoilPersist();

// 로그인 상태를 관리할 atom
export const LoginState = atom({
	key: "LoginState", // 고유한 key 값
	default: false, // 기본값 설정
	effects_UNSTABLE: [persistAtom], // persistAtom effect를 추가하여 상태를 지속
});

export const currentFileState = atom({
	key: "currentFileState", // 고유한 key 값
	default: "", // 기본값 설정
	effects_UNSTABLE: [persistAtom], // persistAtom effect를 추가하여 상태를 지속
});

export const userNameState = atom({
	key: "userNameState",
	default: "",
	effects_UNSTABLE: [persistAtom], // persistAtom effect를 추가하여 상태를 지속
});
