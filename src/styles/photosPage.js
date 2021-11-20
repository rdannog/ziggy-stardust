import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  cursor:default;
  font-family: 'Bebas Neue', cursive;  
  scroll-behavior: smooth;
  color:#fff;
}
body{
  background-color:#000;
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: black; 
}
::-webkit-scrollbar-thumb {
  background: #B8834F; 
}
::-webkit-scrollbar-thumb:hover {
  background: darkgoldenrod; 
}
}
a{
  text-decoration:none;
  cursor:pointer;
}
button:hover{
  transition:0.7s ease-in;
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
export const Copyright = styled.section`
    width:100%;
    height:7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top:1px solid white;
    p{
        font-weight:100;
        font-size:1vw;
    }
`
export const References = styled.section`
    width:100%;
    height:7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5C703B;
    p{
        font-weight:100;
        font-size:0.7vw;
        font-family: 'Roboto', sans-serif;
    }
`