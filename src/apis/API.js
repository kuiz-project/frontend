import axios from "axios";
const BASE_URL = "https://3.39.190.225:8443";
/**
 * 사용자 관리
 */

// 회원가입
export const userPostAPI = axios.create({
  method: "post",
  baseURL: `${BASE_URL}/api/user/signup`,
  withCredentials: true,
});

// 아이디 중복 확인({userid})
export const IdCheckGetAPI = axios.create({
  baseURL: `${BASE_URL}/api/user/findId`,
  withCredentials: true,
});

// 로그인
export const loginPostAPI = axios.create({
  method: "post",
  baseURL: `${BASE_URL}/api/user/login`,
  withCredentials: true,
});

// 로그아웃
export const logoutPostAPI = axios.create({
  method: "post",
  baseURL: `${BASE_URL}/api/user/logout`,
  withCredentials: true,
});

// 비밀번호 변경
export const userpwChangePostAPI = axios.create({
  method: "post",
  baseURL: `${BASE_URL}/api/user/change-password`,
  withCredentials: true,
});

/* 폴더 */

// 폴더 생성
export const createfolderPostAPI = axios.create({
  method: "post",
  baseURL: `${BASE_URL}/api/folder/create`,
  withCredentials: true,
});

// 폴더 조회
export const myfolderAPI = axios.create({
  baseURL: `${BASE_URL}/api/folder/my-folders`,
  withCredentials: true,
});

// 폴더 이름 변경(수정)
export const updatefoldernameAPI = axios.create({
  method: "patch",
  baseURL: `${BASE_URL}/api/folder/update-name`,
  withCredentials: true,
});

// 폴더 삭제
export const deletefoldernameAPI = axios.create({
  method: "delete",
  baseURL: `${BASE_URL}/api/folder/delete`,
  withCredentials: true,
});

/* PDF */

// PDF 업로드
export const uploadpdfAPI = axios.create({
  method: "post",
  baseURL: `${BASE_URL}/api/pdf/upload`,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// PDF 삭제
export const deletepdfAPI = axios.create({
  method: "delete",
  baseURL: `${BASE_URL}/api/pdf`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// 사용자가 업로드한 pdf 조회
export const mypdfAPI = axios.create({
  baseURL: `${BASE_URL}/api/pdf/my-pdfs`,
  withCredentials: true,
});

// pdf 이름 변경
export const updatepdfAPI = axios.create({
  method: "patch",
  baseURL: `${BASE_URL}/api/pdf/update-name`,
  withCredentials: true,
});

// pdf url 얻기(주소뒤에 pdfid 붙여서 보내기)
export const pdfurlAPI = axios.create({
  baseURL: `${BASE_URL}/api/pdf/getpdfurl`,
  withCredentials: true,
});

export const pdfsubjectAPI = axios.create({
  baseURL: `${BASE_URL}/api/pdf/subjects`,
  withCredentials: true,
});

/* TEST */

// Test 생성
export const testAPI = axios.create({
  methode: "post",
  baseURL: `${BASE_URL}/api/test/create`,
  withCredentials: true,
});

// Test 정답 빼고
export const testnoansnwerAPI = axios.create({
  baseURL: `${BASE_URL}/api/test/test/gettest`,
  withCredentials: true,
});

// Test 정답 포함
export const testanswerAPI = axios.create({
  baseURL: `${BASE_URL}/api/test/test/getanswer`,
  withCredentials: true,
});

// Test 목록 받기
export const testlistAPI = axios.create({
  baseURL: `${BASE_URL}/api/test/test/my-tests`,
  withCredentials: true,
});

// Test 채점
export const testcheckAPI = axios.create({
  methode: "post",
  baseURL: `${BASE_URL}/api/test/scoretest`,
  withCredentials: true,
});
