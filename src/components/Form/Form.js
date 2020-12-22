import React from 'react';
import {Formik} from "formik" // Es una libreria de React que facilita el manejo de formularios
import * as Yup from "yup"    //libreria para validar el formulario 
import ErrorDialog from "./Error"


// VALIDACIONES --> las vamos a definir usando YUP como si fuera un SCHEMA de base de datos
    // deben coincidir con el schema


const validationSchema = Yup.object().shape(  {
    name: Yup.string()
    .min(1, "Escribe tu nombre y apellido")
    .max(30, "Necesita ser más corto")
    .required("Escribe nombre y apellido"),

    email: Yup.string()
    .email("Escribe tu correo")
    .required("Escribe un correo"),

    phone: Yup.string()
    .trim("")
    .required("Escribe tu teléfono")
    .matches(new RegExp('[0-9]'))
    .min(8),

    carrera: Yup.string()
    .required("Escoge una carrera"),

})

////////////FORMULARIO

export default function FormikForm (){
   
    return (
    <div 
    className= "uk-text-center uk-padding uk-margin-large-left uk-margin-bottom id"
            style={  {
                border: "solid 1px green",
                borderRadius: "10px",
                backgroundColor:  "white",
                width: "360px"

                    }}  
    >
        <h3 style={{color:"green"}} className="uk-text-bold">DANOS SÓLO 5 MINUTOS!
                <p>Siempre hay un siguiente nivel</p>
        </h3>
        

    <Formik
        //aqui estan los valores del formulario (Schemas)
       
        initialValues= { {name: "", email: "", phone:"", carrera: "", terminos:""  }}
        validationSchema={validationSchema}
        onSubmit= { (values, {setSubmitting, resetForm} )=>{
           setSubmitting(true)
           // usamos setTime out como si fuera un post a servidor para corroborar que se envía
           setTimeout(  ()=>{
               alert(JSON.stringify(values, null, 2));
               resetForm();
               setSubmitting(false)
           }, 500)
        }}
        >
            {
             ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}  )=>(
                <form onSubmit={handleSubmit}>
                   
                <div className="uk-text-center uk-margin-bottom uk-margin-top">
                    <label htmlFor="name">         </label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre y Apellido"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    style= {{width:"70%", height:"15px"}}
                    className={touched.name && errors.name ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"} 
                   />
                    <span   uk-icon="user"
                            className= "uk-margin-small-left"
                    ></span>

                    <ErrorDialog
                    touched={touched.name}
                    message={errors.name}
                    /> 
                </div>

                <div className="uk-text-center uk-margin-bottom uk-margin-top">
                    <label htmlFor="email">        </label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo Electrónico"   
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    style= {{width:"70%"}}
                    className={touched.email && errors.email ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"}
                    />

                    <span   uk-icon="mail"className= "uk-margin-small-left"></span>

                    <ErrorDialog
                    touched={touched.email}
                    message={errors.email}
                    /> 
                </div>

                <div className="uk-text-center uk-margin-bottom uk-margin-top">
                    <label htmlFor="phone">         </label>
                    <input 
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Teléfono"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    style= {{width:"70%"}}
                    className={touched.phone && errors.phone ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"}
                    />
                    <span   uk-icon="phone"
                            className= "uk-margin-small-left"
                    ></span>

                    <ErrorDialog
                    touched={touched.phone}
                    message={errors.phone}
                    /> 
                </div>

                <div className="uk-text-center uk-margin-bottom uk-margin-top">
                    <label htmlFor="carrera">    </label>
                    <select 
                        name="carrera"
                        value={values.carrera}
                        id="carrera"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style= {{width:"72%"}}
                        className={touched.carrera && errors.carrera ? 
                                    "uk-form-danger uk-text-secondary " : 
                                    "uk-form-success uk-text-secondary"}
                    >
                            <option                             label="Elige tu carrera"                                        />
                            <option value="Ingeniería"          label="Ingeniería en Informática"                               />
                            <option value="Técnico"             label="Técnico en Programación y Análisis de Sistema"           />
                            <option value="Admisión"            label="Admisión Especial a Ingeniería e Informática"            />
                            <option value="Ingeniería"          label="Ingeniería en Conectividad y Redes"                      />
                            <option value="Técnico"             label="Técnico en Conectividad y Redes"                         />
                            <option value="Admisión"            label="Admisión Especial a ingeniería en Conectividad y Redes"  />
                            <option value="Ingeniería"          label="Ingeniería en Ciberseguridad"                            />
                            <option value="Técnico"             label="Técnico en Ciberseguridad"                               />
                            <option value="Admisión"            label="Admisión Especial a Ingeniería en Ciberseguridad"        />
                            <option value="Ingeniería"          label="Ingeniería en Automatización y Control Industrial"       />
                            <option value="Técnico"             label="Técnico en Automatización y Control Industrial"          />
                            <option value="Técnico"             label="Técnico en Control Industrial"                           />
                            <option value="Admisión"            label="Admisión Especial a Ingeniería en Automatización y Control Industrial"       />
                         
                    </select>
                    <span   uk-icon="info"className= "uk-margin-small-left">   </span>

                    <ErrorDialog
                    touched={touched.carrera}
                    message={errors.carrera}
                    /> 
                </div>

                <div className="uk-text-center uk-margin-bottom uk-margin-top">
                    <label htmlFor="terminos">  Acepto términos y condiciones       </label>
                    <input 
                    type="checkbox"
                    name="terminos"
                    id="terminos"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.terminos}
                    style= {{width:"70%", height:"15px"}}
                    
                   />

                </div>

               
                <div className="uk-submit uk-text-center ">
                    <button 
                    
                        type="submit"
                        disabled={isSubmitting} // no se pueda apretar mientras se sube}
                        className="uk-button uk-margin-top uk-margin-bottom "
                        style={{backgroundColor:"green", color:"white"}}>      
                   
                         Mayor Información » »   
                         <span   uk-icon="pencil"className= "uk-margin-small-left"></span>     
                    
                    </button>
                </div>


                </form>
                )}
        
    </Formik>
    </div>

    
    )}
