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
        text-shadow:1px 1px 5px darkgoldenrod;
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
            box-shadow: 0 0 10px #5C703B;
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
    
`
export const Content = styled.div`
    width:100%;
    height:100%;
    padding-left:10%;
    display: flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    background-image:linear-gradient(to right, #CDCDCD, transparent);

        animation: 2s slide-right 1s forwards;
        transform:translateX(-120%);
        @keyframes slide-right {
            to {
              transform:translateX(0);
            }
        }
    ul{
        list-style:square;
        list-style-image:linear-gradient(to right, #5C703B, darkgoldenrod, goldenrod);
    }
    h2{
        font-size:3.2vw;
        margin-bottom:3vh;
        color: darkgoldenrod;
        text-shadow:2px 2px 2px black;
    }
    p{
        color:#333;
        font-size:1.2vw;
        font-weight:600;
        font-family: 'Roboto', sans-serif;
        margin-bottom:5vh;
        text-shadow:1.5px 2px 15px #555;
        text-transform:uppercase;
    }
    li{
        color:#444;
        font-size:1.5vw;
        text-shadow:1px 2px 5px gray;
        margin-left:1vw;
        margin-bottom:0.3vh;
    }

`
export const VidContainer = styled.section`
    width:100%;
    height:95vh;
    font-size:2.7vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:5vh;
    h2{
        color:#5C703B;
        text-shadow:1px 2px 5px rgba(184, 131, 79, 0.2);
        border-bottom:2px solid #333;
    }
`
export const BoxCard = styled.div`
    width:90%;
    height:70%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-top:5vh;
`
export const VidContent = styled.div`
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    background-color:rgba(184, 131, 79, 0.2);
    padding:2vh;
    border-radius:5px;
`
export const Video = styled.div`
    width:100%;
    height:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    background-color:black;
    img{
        cursor:pointer;
    }
    &:hover{
        transform:scale(1.01);
        transition: all 0.7s ease-in-out;
        border-radius:20px;
    }
`
export const Name = styled.div`
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-top:3px solid #000;
    padding-top:2vh;
    h3{
        font-size:2vw;
        font-weight:300;
        text-shadow:1px 1px 5px #222;
    }
`