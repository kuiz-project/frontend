import { styled } from "styled-components";
export const SignupWrapper = styled.div`
  max-width: 440px;
  width: 100%;
  height: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  text-align: center;
`;

export const SignupTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
`;

export const SignupTitle = styled.span`
  color: var(--Main, #312e81);
  font-family: "Noto Sans KR_Bold";
  font-size: 32px;
`;

export const SignupSubTitle = styled.span`
  color: #000;
  font-size: 16px;
`;

export const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  padding: 35px 57px;
  border-radius: 12px;
  background: var(--Text_White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  width: 100%;
`;
export const InputTitle = styled.span`
  color: var(--Main, #312e81);
  font-family: "Noto Sans KR_Bold";
  font-size: 14px;
`;

export const InputContent = styled.input`
  border-radius: 4px;
  background: var(--Gray_3, #f9f9f9);
  height: 48px;
  width: 100%;
  padding: 18px 20px;
  &::-webkit-input-placeholder {
    color: #c8c8c8;
    font-family: "Noto Sans KR_Medium";
    font-size: 16px;
    line-height: 22px; /* 137.5% */
  }
`;

export const IdCheckBtn = styled.button`
  text-align: right;
  padding: 12px 16px;
  border-radius: 999px;
  width: 84px;
  background: var(--Gray_2, #f0f1f2);
  color: var(--Text_Black-1, #242424);
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.014px;
`;

export const SubmitBtn = styled.button`
  margin: 0 auto;
  display: flex;
  max-width: 260px;
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  background: var(--Main, #312e81);
  color: var(--Text_White, #fff);
  font-family: "Noto Sans KR_Bold";
  font-size: 16px;
`;

export const Warning = styled.span`
  color: red;
  font-size: 13px;
`;
