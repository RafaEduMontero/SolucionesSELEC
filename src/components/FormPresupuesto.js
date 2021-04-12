import React, { useState,useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import preferences from '../preferences/Preferences';
import functions from '../functions/Functions';
import FormularioPresupuesto from '../atomics/FormularioPresupuesto';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FormPresupuesto = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const history = useHistory();
    const [datos] = useState(preferences);
    const {armarDatosEmail,enviarPresupuesto,sendMail} = functions;

    const pagarPresupuesto = (data) =>{
        console.log(data)
        const datos1 = armarDatosEmail(datos,data);
        enviarPresupuesto(datos1)
    }
    useEffect(() => {
        const querystring = window.location.search;
        const params = new URLSearchParams(querystring);
        const paymentId = params.get('payment_id');
        if(paymentId){
            console.log(params.get('payment_id'));
            sendMail(paymentId,history)
        }
    }, [])
    useEffect(() => {
        Aos.init();
    }, []) 
    return (
        <div className="container form" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1500">
            <h1>Presupuesto</h1>   
            <form className="container">
                <FormularioPresupuesto register={register} errors={errors}/>
            </form>
            <button onClick={handleSubmit(pagarPresupuesto)} className="btn gren">Presupuesto</button>
        </div>
    )
}

export default FormPresupuesto
