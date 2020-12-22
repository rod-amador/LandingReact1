import React, {Component} from "react"

class Lista extends Component {
    state= {}
    render(){

        return (
           <div className="uk-text-center">
               <h3 style={{color:"green"}}> ¡En un mundo que cambió, entrénate en tecnología y evoluciona a lo digital!</h3>

               <section className="uk-text-center">

                   <article className="uk-flex uk-flex-center">

                        <ul className="uk-list-muted uk-text-justify">

                            <li className="uk-margin-top uk-margin-bottom">Matrícula Proceso 100% online                           </li>
                            <li className="uk-margin-top uk-margin-bottom">Experiencia exitosa en educación online desde 2017      </li>
                            <li className="uk-margin-top uk-margin-bottom">Acceso a Biblioteca virtual y apoyo tecnológico         </li>
                            <li className="uk-margin-top uk-margin-bottom">Metología innovadora y apoyo tecnológico                </li>
                            <li className="uk-margin-top uk-margin-bottom">Desarrollo de actividades extraprogramáticas virtuales  </li>
                            <li className="uk-margin-top uk-margin-bottom">Certificaciones y Convenios con la Industria            </li>
                            <li className="uk-margin-top uk-margin-bottom">Docentes que trabajan en el ecosistema tecnológico      </li>
                        </ul>
                    </article>
               </section>

           </div>
        )}}

export default Lista