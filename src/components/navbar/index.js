import React from 'react';
import { Nav, NavLink, NavIcon } from "./navbarelements";

function Navbar() {
    return (
        <>
            <Nav>

                <NavLink to="/">Pizza Eat</NavLink>
                <NavIcon>
                    <p className="login"> Login</p>



                </NavIcon>
                <p className="cart">Cart</p>

            </Nav>
        </>
    )
}

export default Navbar
