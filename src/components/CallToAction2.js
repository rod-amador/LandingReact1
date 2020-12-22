import React, {Component} from "react"
import {Link} from "react-router-dom"

class CallToAction2 extends Component {
    state= {}
    render(){

        return (
            <div style={{backgroundColor:"#28A745"}}
                className="uk-padding"
            >
                
                <button className="uk-button uk-button-large">
                <Link to={"/"} style={{color:"#28A745"}}   >   <strong> Más Información » »    </strong>          </Link>     
                    
                </button>


            </div>
        )}}

export default CallToAction2