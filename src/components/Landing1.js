import React, {Component} from "react"

import CallToAction1 from "./CallToAction1";
import CallToAction2 from "./CallToAction2";
import Carreras from "./Carreras";
import Cuadro from "./Cuadros";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Planes from "./Planes";


class Landing1 extends Component {
    state= {}
    render(){

        return (
            <div>
                
                <Navbar/>
                <Header/>
                <Cuadro/>
                <CallToAction1/>
                <Carreras/>
                <Planes/>
                <CallToAction2/>
                <Footer/>


            </div>
        )}}

export default Landing1