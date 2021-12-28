import styled from "styled-components";

export const StyledProjects = styled.div `
    margin: 30px;

    .title {
        width: fit-content;
        background: whitesmoke;
        border-radius: 10px;
        color: black;
        padding: 10px;
        border-right: 1px solid green;
    }

    .projectcontainer {
        margin-top: 50px;
    }

    .project {
        display: flex;
        background-color: whitesmoke;
        border-radius: 20px;
        background-color: #141A25;
        color: whitesmoke;
        overflow: hidden;
        max-width: 1400px;
        margin-bottom: 60px;
        box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
    }

    .project img {
        width: 300px;
        height: 190px;
        border-radius: 20px;
    }

    .item {
        padding: 20px;
    }

    .description {
        width: 350px;
    }

    h2 {
        margin-bottom: 10px;
    }

    .sources {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .live {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-size: 2em;
        border-radius: 10px;
        background-color: #89CFF0;
        color: #141A25;
        margin: 10px;
        cursor: pointer;
    }

    .git {
        background-color: #f5f5f5;
    }
`
