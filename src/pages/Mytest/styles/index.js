import styled from "styled-components";

export const MytestWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    overflow: auto;
    overflow-y: scroll;
    /* 스크롤 가능하도록 설정 */
    &::-webkit-scrollbar {
      display: none;  /* Chrome, Safari, Edge의 스크롤바를 숨김 */
  }

  -ms-overflow-style: none;  /* IE, Edge에서 스크롤바를 숨김 */
  scrollbar-width: none;  /* Firefox에서 스크롤바를 숨김 */
    }

    .mytest_left {
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      margin-bottom:150px;
    }

    .left_header {
      margin-top:50px;
      padding-left:11%;
      display: flex;
      flex-direction: column;
      
    }

    .left_header_top {
      margin-bottom: 32px;
      color: var(--Main, #312e81);
      font-family: Noto Sans KR;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .left_header_bottom {
      color: #000;
      font-family: Noto Sans KR;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .left_body {
      width: 80%;
      height: 50%;
      display: flex;
      flex-direction: column;
      
    }

    .left_body_header {
      margin-top: 68px;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 44px;
      border-radius: 12px;
      background: var(--Main, #312e81);
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
      color: var(--Text_White, #fff);
      font-family: Noto Sans KR;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      align-items: center;
    }

    .left_body_body {
      display: flex;
      flex-direction: column;
      
    }

    .left_body_contents {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 60px;
      color: #424242;
      font-family: Noto Sans KR;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-bottom: 1px solid #dad7d7;
      align-items: center;
      cursor: pointer;

    }

    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
      width: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .h1 {
      margin-left: 30px;
    }

    .b1,
    .b2,
    .b3,
    .b4,
    .b5,
    .b6 {
      width: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align:center;
      font-size:14px;
    }

    .b1 {
      margin-left: 30px;
    }
    .left_body_footer {
      margin-top: 50px;
      margin-bottom: 81px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      
    }
    .resbutton {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      margin-right: 20px;
      margin-top:20px;
      cursor: pointer;
    }
    .nresbutton {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      margin-right: 20px;
      margin-top:20px;
      cursor: default;
    }
    .left_body_footer_lists {
      margin-left: 10px;
      margin-right: 5px;
      display: flex;
      flex-direction: row;
    }
    .left_body_footer_list {
      display: flex;
      flex-direction: row;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      margin-top: 3px;
      fill: var(--Main, #312e81);
      margin-right: 5px;
      font-family: Noto Sans KR;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      cursor: pointer;
    }
    .button {
      margin-top: 3px;
      cursor: pointer;
    }
    
    .mytest_footer{
      width:100%;
      height:92px;
      bottom:0px;
      position:fixed;
      border-top: 1px solid #E1E1E1;
          max-width: 1920px;
background: #FFF;

/* header */
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    }
    @media (max-width: 768px) {
      // 768px 이하일 때 적용할 스타일을 여기에 작성

      // 예시: 높이 변경
    
      .left_header_bottom {
        color: #000;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width:272px;
        height:35px;
        margin-bottom:62px;
      }
      .left_body_contents {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 60px;
        color: #424242;
        font-family: Noto Sans KR;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-bottom: 1px solid #dad7d7;
        align-items: center;
        cursor: pointer;
      }
      
    }
  `;
