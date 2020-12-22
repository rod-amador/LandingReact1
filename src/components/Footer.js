import React, {Component} from "react"

let acreditacion =    require("../images/acreditacion.png")

class Footer extends Component {
    state= {}
    render(){

        return (
            <div style={{backgroundColor:"#343A40", color:"white"}}
                 className="uk-padding uk-text-center">

                    <img src={acreditacion} alt="Acreditación" />  
               
                        <p>*Fuente de los datos: mifuturo.cl </p>
                        <p> <strong> ©2020 Derechos Reservados - CIISA Términos de uso | Aviso de privacidad </strong>  </p>
               
            </div>
        )}}

export default Footer