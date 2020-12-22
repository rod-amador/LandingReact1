import React, {Component} from "react"

let carrera1 =    require("../images/carrera1.png")
let carrera2 =    require("../images/carrera2.png")

let carrera4 =    require("../images/carrera4.png")
let carrera5 =    require("../images/carrera5.png")

let carrera7 =    require("../images/carrera7.png")
let carrera8 =    require("../images/carrera8.png")

let carrera10 =    require("../images/carrera10.png")
let carrera11 =    require("../images/carrera11.png")
let carrera12 =    require("../images/carrera12.png")
let carrera13 =    require("../images/carrera13.png")

class Carreras extends Component {
    state= {}
    render(){

        return (
            <div className="uk-margin-top">
               <h3 style={{color:"green"}}> Elige una de nuestras carreras</h3>

               <div className="uk-margin-large-left uk-margin-right">
               
                    <section className="
                    uk-child-width-1-3@s uk-child-width-1-2 uk-clearfix 
                    uk-margin-bottom
                    uk-flex uk-flex-between" 
                    uk-grid="true">


                        <article>
                                <span>  <img src={carrera1} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Ingeniería en Informática
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera2} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Técnico en Programación y Análisis de Sistema
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera1} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Admisión Especial a Ingeniería e Informática
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera4} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Ingeniería en Conectividad y Redes
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera5} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Técnico en Conectividad y Redes
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera4} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Admisión Especial a Ingeniería en Conectividad y Redes
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera7} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Ingeniería en Ciberseguridad
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera8} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Técnico en Ciberseguridad
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera7} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Admisión Especial a Ingeniería en Ciberseguridad
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera10} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                               Técnico en Automatización y Control Industrial
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera11} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Técnico en Control Industrial
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera12} alt="_" />     </span>
                                <p className="uk-margin-large-left uk-margin-large-right">
                                Admisión Especial a Ingeniería en Automatización y Control Industrial
                                </p>
                        </article>

                        <article>
                                <span>  <img src={carrera13} alt="_" />     </span>
                                <p>
                                 Ingeniería en Automatización y Control Industrial
                                </p>
                        </article>

                       




                    </section>

           </div>









            </div>
        )}}

export default Carreras