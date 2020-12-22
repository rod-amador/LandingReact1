import React, {Component} from "react"

class Cuadro extends Component {
    state= {}
    render(){

        return (
            <div className="
            uk-child-width-1-4@s uk-child-width-1-2 uk-clearfix 
            uk-margin-bottom
            uk-flex uk-flex-between" 
            uk-grid="true">

                <section>
                    
                    <div 
                        className="uk-margin-large-left uk-margin-large-right uk-margin-top"
                            style={{
                            backgroundImage: "linear-gradient(90deg, rgba(23,162,184,1) 0%, rgba(89,71,189,1) 40%, rgba(112,44,139,1) 100%)",
                            color:"white",
                            border: "solid",
                            borderRadius:"10px",
                           
                            }}>
                         <p style={{paddingLeft:"8px", paddingRight:"8px", paddingTop:"10px"}} >
                                Modalidades que se adaptan a tus necesidades
                        </p>
                    </div>
                   
                </section>

                <section className="">
                    <div 
                        className="uk-margin-large-left uk-margin-large-right uk-margin-top"
                            style={{
                            backgroundImage: "linear-gradient(90deg, rgba(23,162,184,1) 0%, rgba(89,71,189,1) 40%, rgba(112,44,139,1) 100%)",
                            color:"white",
                            border: "solid",
                            borderRadius:"10px"
                            }}>
                         <p style={{paddingLeft:"8px", paddingRight:"8px", paddingTop:"10px"}} >
                            90% de empleabilidad en el 1er año de egreso*
                         </p>
                    </div>
                </section>

                <section>
                    <div 
                        className="uk-margin-large-left uk-margin-large-right uk-margin-top"
                            style={{
                            backgroundImage: "linear-gradient(90deg, rgba(23,162,184,1) 0%, rgba(89,71,189,1) 40%, rgba(112,44,139,1) 100%)",
                            color:"white",
                            border: "solid",
                            borderRadius:"10px"
                            }}>
                         <p style={{paddingLeft:"8px", paddingRight:"8px", paddingTop:"10px"}} >
                            +2.600 titulados que confiaron nosotros
                         </p>
                    </div>
                </section>

                <section>
                    <div 
                        className="uk-margin-large-left uk-margin-large-right uk-margin-top"
                            style={{
                            backgroundImage: "linear-gradient(90deg, rgba(23,162,184,1) 0%, rgba(89,71,189,1) 40%, rgba(112,44,139,1) 100%)",
                            color:"white",
                            border: "solid",
                            borderRadius:"10px"
                            }}>
                         <p style={{paddingLeft:"8px", paddingRight:"8px", paddingTop:"10px"}} >
                            Certificaciones y convenios con la industria
                         </p>
                    </div>
                </section>

            </div>
               
        )}}

export default Cuadro
