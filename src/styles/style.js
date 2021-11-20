import styled from "styled-components";

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
&:hover {
    color: #e8ca11;
    transition: all 0.3s ease 0s;
    animation: 5s ease 0s 1 normal none running fdBcwW;
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
export const MainImg = styled.img`
    width:100%;
    border-radius:5px;
`
export const Main = styled.section`
margin-top:15vh;
width:100%;
display:flex;
flex-direction:column;
`
export const Title = styled.div`
    font-size:2vw;
    margin:7vh;
    display:flex;
    justify-content:center;
`
export const ImageContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto;
width:100%;
overflow:hidden;
div{
    margin:2vh 1vw;
}
`