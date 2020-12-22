import React, {Component} from "react"

let img1 =    require("../images/img1.svg")
let img2 =    require("../images/img2.svg")
let img3 =    require("../images/img3.svg")
let img4 =    require("../images/img4.svg")

class Planes extends Component {
    state= {}
    render(){

        return (
            <div className="uk-margin-top uk-margin-bottom">

               <h3>Planes formativos con niveles de certificación progresiva. </h3>

               <div className="uk-margin-large-left uk-margin-right">
               
                    <section className="
                    uk-child-width-1-4@s uk-child-width-1-2 uk-clearfix 
                    uk-margin-bottom
                    uk-flex uk-flex-between" 
                    uk-grid="true">

                    <div className="uk-card uk-card-default uk-card-body" 
                         style={{backgroundColor:"#D9DDDC"}}>

                        <article className="uk-margin-left uk-margin-right" >

                                <span>  <img src={img1} alt="_" />     </span>
                                <h3 className="uk-card-title uk-text-bold">90%</h3>
                                <p>de empleabilidad dentro del primer año de egreso*</p>
                        </article>

                    </div>

                    <div className="uk-card uk-card-default uk-card-body" 
                         style={{backgroundColor:"#D9DDDC"}}>

                        <article className="uk-margin-left uk-margin-right">

                                <span>  <img src={img2} alt="_" />     </span>
                                <h3 className="uk-card-title uk-text-bold">45</h3>
                                <p>Años de trayectoria en educación tecnológica</p>
                        </article>

                    </div>

                    <div className="uk-card uk-card-default uk-card-body" 
                         style={{backgroundColor:"#D9DDDC"}}>

                        <article className="uk-margin-left uk-margin-right">

                                <span>  <img src={img3} alt="_" />     </span>
                                <h3 className="uk-card-title uk-text-bold">Experiencia</h3>
                                <p>Experiencia exitosa en educación online desde el 2017</p>
                        </article>
                    </div>

                    <div className="uk-card uk-card-default uk-card-body" 
                         style={{backgroundColor:"#D9DDDC"}}>

                        <article className="uk-margin-left uk-margin-right">
                                <span>  <img src={img4} alt="_" />     </span>
                                <h3 className="uk-card-title uk-text-bold">+2.600</h3>
                                <p>Titulados confiaron en nosotros</p>
                        </article>
                    </div>

               </section>

               </div>

            </div>
        )}}

export default Planes