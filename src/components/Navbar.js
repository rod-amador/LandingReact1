import React, {Component} from "react"
import {Link} from "react-router-dom"

let logo = require ("../images/logo.svg")

class Navbar extends Component {
    state= {}
    render(){

        return (
            <nav className="uk-navbar uk-margin-top uk-margin-bottom" uk-navbar="true">

                <div className="uk-margin-left uk-navbar-left">
                    <span>  <img src={logo} alt="Logo" />     </span>
                </div>

                <div className="uk-navbar-right uk-margin-right ">
                    
                    <Link to={"/"} style={{color:"white"}}   >       
                        <button className="uk-margin-left uk-margin-right uk-button uk-margin-top" style={{backgroundColor:"green", color:"white"}}>
                            Inicio       
                        </button>
                    </Link>   
                  

                    <Link to={"/beneficios"} style={{color:"white"}}   >  
                            <button className="uk-margin-left uk-margin-right uk-button uk-margin-top" style={{backgroundColor:"green", color:"white"}}>
                                Beneficios    
                            </button>
                    </Link> 
                    

                </div>
            </nav>
        )}}

export default Navbar