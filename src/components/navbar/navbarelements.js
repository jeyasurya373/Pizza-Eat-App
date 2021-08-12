import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight:700;


p.cart{
    display:flex;
position:absolute;
top:1;
right:0;
    transform: translated (-175%, 100%);
    font-weight:bold;
    padding-top:5px;
    padding-right:5px;
    
    color:#fff;
    background:#e31837;

    &:hover{
        background:#ffc500;
        transition: 0.2s ease-out;
        cursor:pointer;
        color:#000;
    }
    
    
}
`;


export const NavLink = styled(Link)`
color:#fff;
font-size: 2rem;
display: flex;
align-iteam: centre;
text-decoration:none;
cursor: pointer;

@media screem amd(max - width: 400px){
    position: absolute;
    top: 10px;
    left: 25px;
}
`;

export const NavIcon = styled.div`
display:flex;
position:absolute;
top:1;
right:0;
cursor:pointer;
color:#fff;
padding-right:40px;


p.login{
    transform: translated (-175%, 100%);
    font-weight:bold;
    padding-top:5px;
    
    color:#fff;
    background: #e31837;
    

    &:hover{
        background:#ffc500;
        border-radius:30px
        transition: 0.2s ease-out;
        cursor:pointer;
        color:#000;
    }
    
    
}



`

// export const Bars = styled(FaPizzaSlice)`
// font-size:2rem;
// transform:translate(-50%, -15%);
// `
export const button = styled.p`
font-size:0.5rem;
padding: 1rem 4rem;
border : none;
background: #e31837;
color:#fff;
transition: 0.2s easse-out;

&:hover{
    background:#ffc500;
    transition: 0.2s ease-out;
    cursor:pointer;
    color:#000;
}

`