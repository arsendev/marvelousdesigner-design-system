import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    // css 초기값 정의
    ${reset};

    // 따로 스타일링
    a{
        text-decoration:none;
        color:inherit;
    }

    *{
        box-sizing:border-box;
    }
`;

export {GlobalStyle};