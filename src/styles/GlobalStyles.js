import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { fonts } from "../assets/fonts/fonts";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${fonts}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        font-family: "Noto Sans KR_Regular", 'sans-serif';
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    html{
        width:100%;
        height:100%;
    }
    body{
        width:100%;
        height:100%;
        line-height: 1;
        margin-bottom: 100px;
	overflow-x: hidden;
    overflow-y:hidden
    }
    ol, ul{
        list-style: none;
    }
    button {
        padding:0;
        margin:0;
        border: 0;
          font-family: "Noto Sans KR_Regular", 'sans-serif';
        background: transparent;
        cursor: pointer;
        border:none;
        outline:none;
:focus{
 outline: none;
    border: none;
}
    }
    input{
              border:none;
        outline:none;
        :focus{
 outline: none;
    border: none;
}
    }
    img{
        max-width:100%;
    }

`;

export default GlobalStyles;
