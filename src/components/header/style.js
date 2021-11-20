import styled from "styled-components";

export const Container = styled.header`
    width:100%
`
export const Menu = styled.section`
    height:12vh; 
    width:100%;
    background-color:#000;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    position:fixed;
    top:0;
    z-index:10;
`
export const LogoContainer = styled.div`
    width:20%;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width:50%;
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
& p:hover {
    color: #e8ca11;
    transition: all 0.3s ease 0s;
    animation: 5s ease 0s 1 normal none running fdBcwW;
} 
p{
    cursor:pointer;
}
`
export const Navbtn = styled.button`
    width: 10vw;
    height: 6vh;
    font-size:1.1vw;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    z-index: 0;
    background: black;
    overflow: hidden;
    border: 2px solid darkgoldenrod;
    color: #fff;

    &:hover{
        color: #0E0D12;
    }
    &:hover:after {
        height: 100%;
    }
    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        transition: all 0.5s ease;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        background: darkgoldenrod;
    }
`
export const HeaderIntro = styled.section`
    height:100vh;
    margin-top:12vh;
    background-size:cover;
    background-position:center;
    display:flex;
    align-items:center;
    justify-content:start;
`
export const TextIntro = styled.div`
    width:40%;
    height:50%;
    font-weight:400;
    margin-left:6%;
    margin-top:5%;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    animation: 2s slide-right 1s forwards;
        transform:translateX(-120%);
        @keyframes slide-right {
            to {
              transform:translateX(0);
            }
        }
    h1{
        width:90%;
        font-size:3.2vw;
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
        color:#fff;
        font-size:1.2vw;
        margin-bottom:7vh;
        text-shadow:1px 2px black;
    }
    button{
        width:40%;
        padding:1vh 1vw;
        font-size:1.6vw;
        color: #000;
        background-color:#8B5937;
        border:transparent solid;
        border-radius:10px;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;

        &:hover{
            color: #fff;
            background-color:darkgoldenrod;
            transition: all 0.4s ease 0s;
            animation: 5s ease 0s 1 normal none running;
            transform:scale(1.05);
            cursor:pointer;
        }
        &:hover:after {
            height: 100%;
        }
        &:after {
            content: "";
            position: absolute;
            z-index: -1;
            transition: all 0.5s ease;
            left: 0;
            bottom: 0;
            height: 0;
            width: 100%;
            background: darkgoldenrod;
        }
    }
`
