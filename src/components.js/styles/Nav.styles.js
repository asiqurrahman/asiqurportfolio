import styled from 'styled-components'

export const StyledNav = styled.div `
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #141A25;
    overflow-x: hidden;
    padding-top: 20px;
    
    
    nav {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    nav p:after {
        transition: all ease-in-out .2s;
        background: none repeat scroll 0 0 #B026FF;
        content: "";
        display: block;
        height: 4px;
        width: 0;
    }
    nav p:hover:after {
        width: 100%;
    }

    p {
        padding-left: 10px;
        color: whitesmoke;
        margin-top: 40px;
        font-size: 1.3em;
        width: fit-content;
        cursor: pointer;
    }
    
    .navsocials {
        justify-content: flex-end;
        color: white;
        padding-top: 10px;
        border-top: 1px solid #344454;
    }

    .navsocials h2 {
        text-align: center;
    }

    .socialicons {
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
        margin-top: 20px;
    }

    .icon {
        background-color: whitesmoke;
        padding: 3px;
        border-radius: 10px;
        color: black;
    }

`

