import React, {Component} from "react"
import {Link} from "react-router-dom"
import FormikForm from "./Form/Form"

let fondo = require ("../images/header2.jpg")

class Header2 extends Component {
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
                                    <h2 style={{color:"white"}} className="uk-text-bold"> ¡Estudia desde cualquier lugar! </h2>

                                    <h3 style={{color:"white"}}> Minimiza tus costos y tiempos de traslados</h3>

                                    <p style={{color:"white"}}>
                                    CIISA cuenta con un <strong style={{color:"green"}}>Entorno Virtual de Aprendizaje </strong>, 
                                    interactivo y responsivo para realizar tus clases con el apoyo de docentes capacitados.

                                    </p>


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

export default Header2
