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
    height:100vh;
    display: flex;
    align-items:start;
    justify-content:center;
    background-size:cover;
    background-position:50%;
`