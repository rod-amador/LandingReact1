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
<<<<<<< HEAD
                        <button className="uk-margin-left uk-margin-right uk-button uk-margin-top" style={{backgroundColor:"green", color:"white"}}>
=======
                        <button className="uk-margin-left uk-margin-right uk-margin-top uk-button" style={{backgroundColor:"green", color:"white"}}>
>>>>>>> b87915ca915dbe87ae9be9115bbba33d25444b52
                            Inicio       
                        </button>
                    </Link>   
                  

                    <Link to={"/beneficios"} style={{color:"white"}}   >  
<<<<<<< HEAD
                            <button className="uk-margin-left uk-margin-right uk-button uk-margin-top" style={{backgroundColor:"green", color:"white"}}>
=======
                            <button className="uk-margin-left uk-margin-right uk-margin-top uk-button" style={{backgroundColor:"green", color:"white"}}>
>>>>>>> b87915ca915dbe87ae9be9115bbba33d25444b52
                                Beneficios    
                            </button>
                    </Link> 
                    

                </div>
            </nav>
        )}}

export default Navbar