import React from "react"
import NavBar from "./NavBar"
import HeroSection from "./HeroSection"
import AppSection from "./AppSection"
import CardSection from  "./CardSection"
import FooterSection from "./FooterSection"

const App = () => {
    return(
        <div>
            <h1>Narendra Reddy</h1>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <FooterSection/>
        </div>
    );
};

export default App