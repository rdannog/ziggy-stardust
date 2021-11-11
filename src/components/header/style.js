import styled from "styled-components";

export const Container = styled.header`
    width:100%
`
export const Menu = styled.section`
    height:15vh; 
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`
export const LogoContainer = styled.div`
    width:20%;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width:60%;
        cursor:pointer;
    }
    
`
export const Navigation = styled.div`
    width:45%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
export const NavItem = styled.a`
font-size:1.3vw;
&:hover {
    color: #e8ca11;
    transition: all 0.3s ease 0s;
    animation: 5s ease 0s 1 normal none running fdBcwW;
} 
`
export const HeaderIntro = styled.section`
    height:95vh;
    background-size:cover;
    background-position:center;
`
export const TextIntro = styled.div`
    width:40%;
    height:100%;
    font-weight:400;
    margin-left:6%;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    h1{
        width:80%;
        font-size:3vw;
        margin-bottom:1.5vh;
        color: darkgoldenrod;
        text-shadow:3px 2px black;
    }
    h2{
        font-size:1.5vw;
        font-family: 'Roboto', sans-serif;
        margin-bottom:2vh;
        text-shadow:3px 2px black;
    }
    p{
        font-size:1.2vw;
        margin-bottom:7vh;
        text-shadow:3px 2px black;
    }
    button{
        width:25%;
        height:7%;
        font-size:1.5vw;
        color: #000;
        background-color:#8B5937;
        border:transparent solid;
        border-radius:10px;
        &:hover {
            color: #fff;
            background-color:darkgoldenrod;
            transition: all 0.4s ease 0s;
            animation: 5s ease 0s 1 normal none running fdBcwW;
            transform:scale(1.05);
            cursor:pointer;
        } 
    }
`