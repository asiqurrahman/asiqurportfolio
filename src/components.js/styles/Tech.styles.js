import styled from "styled-components";

export const StyledTec = styled.div `
    margin: 30px;

    .titlecontinar {
        display: flex;
        justify-content: space-between	;
    }

    .title {
        width: fit-content;
        background: whitesmoke;
        border-radius: 10px;
        color: black;
        padding: 10px;
        border-right: 1px solid green;
    }

    .techcontainer {
        margin-top: 50px;
    }

    .tech {
        display: flex;
        padding: 10px;
        background-color: #141A25;
        color: whitesmoke;
        border: 1px solid #61DBFB;
        border-radius: 20px;
        align-items: center;
        margin-bottom: 50px;
    }

    .tech img {
        height: 100px;
        width: 100px;
    }

    .techtext {
        padding-left: 50px;
    }

    .javascript {
        border: 1px solid #F0DB4F;
    }

    .html {
        border: 1px solid #F06529;
    }

    .css {
        border: 1px solid #2965f1;
    }

    .next {
        border: 1px solid black;
    }

    .nextimage {
        background-color: white;
        border-radius: 60px;
        padding: 3px;
    }

    .python {
        border-left: 1px solid #4B8BBE;
        border-top: 1px solid #4B8BBE;
        border-right: 1px solid #FFD43B;
        border-bottom: 1px solid #FFD43B;
    }

    .django {
        border: 1px solid #014421;
    }

    .drf {
        border: 1px solid #850505
    }

    .aws {
        border: 1px solid #FF0000;
    }

    .drfimage {
        background-color: white;
        border-radius: 5px;
    }

    .postgres {
        border: 1px solid #0064a5;
    }

    .heroku {
        border: 1px solid #430098;
    }

    .github {
        border: 1px solid white;
    }

    .gitimage {
        background-color: white;
        width: fit-content;
        border-radius: 80px;
    }
`
