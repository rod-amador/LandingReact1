import React, {Component} from "react"
import {Link} from "react-router-dom"
import FormikForm from "./Form/Form"

let fondo = require ("../images/header1.jpg")
let acreditacion =    require("../images/acreditacion.png")

class Header extends Component {
    state= {}
    render(){

        return (

                <main className="uk-flex uk-flex-center uk-flex-middle uk-flex-row 
                                 uk-height-viewport uk-background-cover 
                                 uk-background-primary uk-background-blend-multiply" 
                                 
                style={{backgroundImage:`url(${fondo})` }}>

                <div className="uk-child-width-1-2@s uk-clearfix " uk-grid="true">

                        <section>  
                            <div className="uk-margin-large-left uk-margin-large-right">
                                    <h2 style={{color:"white"}} className="uk-text-bold"> ¡Estudia en CIISA una de nuestras carreras Online o Presencial! </h2>
                                    <h3 style={{color:"white"}}> (Modalidad Flex, contingencia Covid)</h3>
                                    <h4 style={{color:"white"}} className="uk-text-bold"> Institución Acreditada: 
                                            <span>  <img src={acreditacion} alt="Acreditación" />     </span> </h4>

                                    <div className="uk-text-left uk-margin-large-left">
                                        <ul className="uk-list" style={{color:"white"}}>
                                            <li> <span uk-icon="icon: triangle-up"> </span> 45 años de Experiencia                          </li>
                                            <li> <span uk-icon="icon: triangle-up"> </span> Docentes que trabajan en el mundo tecnológico   </li>
                                            <li> <span uk-icon="icon: triangle-up"> </span> Especialistas en educación tecnológica          </li>
                                        </ul>
                                    </div>

                                    <button className="uk-button uk-align-center" style={{backgroundColor:"green"}}>
                                        <Link to={"/"} style={{color:"white"}}   >   Postula aquí » »            </Link>                   
                                    </button>
                            </div>
                        </section>

                        
                        <section className="">
                           <FormikForm/>

                        </section>
                </div>
                       

              </main>
        )}}

export default Header
