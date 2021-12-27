import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.footer`
    border-top: 1px solid #e6e6e6;
    margin-top:10vh;
`
export const FooterBar = styled.section`
    width:100%;
    height:60vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 600px) {
        flex-direction: column;
        height: 150vh;
    }
`

export const Logo = styled.div`
    width:15%;
    height:40%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width:100%;
        cursor: pointer;
    }
    @media (max-width: 600px) {
        width:50%;
    }
`
export const Contact = styled.div`
    width:65%;
    height:40%;
    display: flex;
    justify-content: space-around;
    align-items: start;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
`
export const BandMembers = styled.div`
    h2{
        margin-bottom:3vh;
        color:#B8860B;
        text-shadow: 0px 0px 5px #333;
    }
`
export const BandMember = styled.div`
    p{
        width:fit-content;
        margin-bottom:1vh;
        font-size:1.2vw;
        &:hover{
            color:#5C703B;
            cursor: pointer;
        }
    }
    @media (max-width: 600px) {
        p{  
            width:100%;
            text-align:center;
            font-size:4vw;
        }
    }
`
export const SocialMedia = styled.div`
    h2{
        margin-bottom:3vh;
        color:#B8860B;
        text-shadow: 0px 0px 5px #333;
    }
`
export const SocialMediaItem = styled.div`
    display: flex;
    flex-direction:column;
    a{
        width:fit-content;
        margin-bottom:1vh;
        font-size:1.2vw;
        &:hover{
            color:#5C703B;
            cursor: pointer;
        }
    }
    @media (max-width: 600px) {
        a{  
            width:100%;
            text-align:center;
            font-size:4vw;
        }
    }
`
export const Show = styled.div`
    h2{
        margin-bottom:3vh;
        color:#B8860B;
        text-shadow: 0px 0px 5px #333;
        @media (max-width: 600px) {
            display:none;
        }
    }
`
export const Date = styled.div`
    p{
        width:fit-content;
        margin-bottom:1vh;
        font-size:1.2vw;
    }
    @media (max-width: 600px) {
        display:none;
    }
`
export const Links = styled.div`
    h2{
        margin-bottom:3vh;
        color:#B8860B;
        text-shadow: 0px 0px 5px #333;
    }
`
export const LinkList = styled.nav`
    
`
export const LinkItem = styled.ul`
display: flex;
flex-direction:column;
a{
    width:fit-content;
    margin-bottom:1vh;
    font-size:1.2vw;
    &:hover{
        color:#5C703B;
        cursor: pointer;
    }
}
@media (max-width: 600px) {
        a{  
            width:100%;
            text-align:center;
            font-size:4vw;
        }
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
        @media (max-width: 600px) {
            font-size:3vw;
        }
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
        @media (max-width: 600px) {
            font-size:2vw;
        }
    }
`
export const NavItem = styled(Link)`
font-size:1.3vw;
& p:hover {
    color: #e8ca11;
    transition: all 0.3s ease 0s;
    animation: 5s ease 0s 1 normal none running;
} 
p{
    cursor:pointer;
}
`