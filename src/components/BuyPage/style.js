import styled from "styled-components";

export const Container = styled.section`
    margin-top:12vh;
`
export const Description = styled.section`
    padding: 8vh 2vw;
    .info{
        width:100%;
        display:flex;
        justify-content:space-around;
        align-items:start;
    }
    .images{
        width: 45%;
        img{
            width:100%;
            margin-bottom:2vh;
        }
    }
    .text{
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:start;
    }
    h1{
        margin-bottom: 7vh;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
    h2{
        margin-top: 7vh;
        font-size: 2rem;
        text-shadow: 0px 0px 5px #B8860C;
    }
    h3{
        margin-top: 2vh;
        margin-bottom: 3vh;
        font-size: 1.8rem;
        font-weight: lighter;
        color: #5C703B;
    }
    p{
        margin-bottom: 3vh;
        text-align: justify;
        font-size: 1.1rem;
        font-family: 'Roboto', sans-serif;
    }
    b{
        font-weight: bolder;
        font-size: 1.2rem;
        color:#B8860C;
    }
    .form{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        margin-top:6vh;
    }
    input{
        width:70%;
        height:7vh;
        border-radius:12px;
        border: 3px solid rgb(184, 134, 12);
        padding:0.5vh 1vw;
        margin-bottom:2vh;
        margin-top:2vh;
        font-size: 1rem;
        background-color: #000;
        cursor: text;
    }
    button{
        width:50%;
        border-radius:8px;
        border: #000;
        background-color: #5C7030;
        font-size: 1.2rem;
        padding:1.5vh 1vw;
        cursor:pointer;
    }
    .description{
        margin-top:6vh;
    }
`