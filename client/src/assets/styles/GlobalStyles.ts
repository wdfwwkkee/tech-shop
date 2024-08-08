import { color } from "./../colors/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Jost", sans-serif;
        font-weight: 400;
        font-size: 20px;
        padding: 0;
        margin: 0;
        color : ${color.black};
        box-sizing: border-box;
    }


    body {
        background : ${color.white}
    }

    a {
        text-decoration: none;
        color : ${color.black};
    }

    button {
        cursor: pointer;
    }
    input,
    img {
        width: 100%;
    }

    

    input {
        border : none;
        padding : 15px;
        border-radius : 8px;
        background : ${color.field};
        &::placeholder {
            color : ${color.dark_gray};
        }
        
    }

    ol,
    ul,
    li {
        list-style: none;
    }

    .wrapper {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .Toastify__toast {
        background : #121212c4;

    }

    .Toastify__toast-body {
        div {
            text-align : center;
            color : white!important;
        }
    }
    .Toastify__close-button  {
        display : none;
    }




`;
