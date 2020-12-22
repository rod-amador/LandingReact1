import React, {Component} from "react"

import CallToAction1 from "./CallToAction1";
import CallToAction2 from "./CallToAction2";
import Footer from "./Footer";
import Header2 from "./Header2";
import Lista from "./Lista";
import Navbar from "./Navbar";
import Planes from "./Planes";


class Landing2 extends Component {
    state= {}
    render(){

        return (
            <div>
                
                <Navbar/>
                <Header2/>
                <CallToAction1/>
                <Lista/>
                <Planes/>
                <CallToAction2/>
                <Footer/>
               

            </div>
        )}}

export default Landing2