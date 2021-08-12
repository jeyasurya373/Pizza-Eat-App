import React from 'react';
import Navbar from '../navbar';
import { Herocontainer, HeroContent, HeroItems, HerosH1, HeroP, Herobtn } from "./heroelements";
function Hero() {
    return (
        <Herocontainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HerosH1>Are You Hungry ? Order Now </HerosH1>
                    <HeroP>Ready in 60sec</HeroP>
                    {/* //<Herobtn>User/Admin Log In</Herobtn> */}
                    <Herobtn>Place order</Herobtn>

                </HeroItems>
            </HeroContent>
        </Herocontainer>
    )
}

export default Hero
