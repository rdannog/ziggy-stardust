import styled from "styled-components";

export const Container = styled.div`
    
    
`
export const BandContainer = styled.section`
    height:90vh;
    display: flex;
    align-items:center;
    justify-content:center;
    
`
export const MemberContainer = styled.div`
    width: 17vw;
    height:80%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1vh 2.5vw;
`
export const Memberimg = styled.div`
    width:100%;
    height:45%;
    background-size:cover;
    background-position:center;
    border-radius:10px;
    &:hover{
        transform:scale(1.05);
        transition: all 0.7s ease-in-out;
    }
`
export const MemberInfo = styled.div`    
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    h3{
        font-size:1.7vw;
        font-weight:400;
        margin:3vh 0;
        text-shadow:1px 1px darkgoldenrod;
    }
    button{
        width: 12vw;
        height: 8vh;
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
        border: 2px solid #5C703B;
        color: #fff;

        &:hover{
            color: #000;
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
            background: #5C703B;
        }
    } 
`
export const TracksContainer = styled.section`
    height:90vh;
    display: flex;
    align-items:center;
    justify-content:start;
    background-size:cover;
    background-position:20% 20%;
    div{
        width:100%;
        height:100%;
        padding-left:6%;
        display: flex;
        flex-direction:column;
        align-items:start;
        justify-content:center;
        background-image:linear-gradient(to right, #CDCDCD, transparent);
    }
    ul{
        list-style:none;
    }
    h2{
        font-size:3.2vw;
        margin-bottom:3vh;
        color: darkgoldenrod;
        text-shadow:3px 2px 2px black;
    }
    p{
        color:#000;
        font-size:1.4vw;
        font-weight:900;
        font-family: 'Roboto', sans-serif;
        margin-bottom:5vh;
        text-shadow:1.5px 2px 5px gray;
        text-transform:uppercase;
    }
    li{
        color:#fff;
        font-size:1.5vw;
        text-shadow:1px 2px 5px black;
        margin-left:1vw;
        margin-bottom:0.3vh;
    }
`