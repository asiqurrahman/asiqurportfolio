import styled from 'styled-components'

export const StyledContact = styled.div `
    margin: 30px;

    .formcontent {
        width: fit-content;
        padding: 20px;
        border-radius: 20px;
        background-color: #141A25;
        box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .contactname {
        display: flex;
    }

    input {
        border-radius: 10px;
        height: 50px;
        width: 200px;
        padding-left: 5px;
        font-weight: bold;
        font-size: 1em;
    }

    .form-group {
        margin: 10px;
    }

    .emailholder {
        width: 410px;
    }

    #email {
        width: 100%;
        height: 50px;

    }

    button {
        all: unset;
        background-color: #0FB2F2;
        font-size: 1.5em;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    textarea {
        resize: none;
        font-size: 1.5em;
        border-radius: 10px;
    }

`
