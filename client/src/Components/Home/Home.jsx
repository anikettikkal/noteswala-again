import React from "react";
import HomeLand from "../../Views/HomeView/HomeLand";
import Enhanced from "../../Views/HomeView/Enhanced";
import Contact from "../Contact/Contact";
import AboutUs from "../AboutUs/AboutUs";
import OurTeam from "../../Views/HomeView/OurTeam";

function Home(){
  return(
    <>
    
    <Enhanced />
    <HomeLand />
    <Contact />
    <AboutUs />
    <OurTeam />
    </>
  )
}

export default Home