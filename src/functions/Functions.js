import Axios from 'axios';
import mercadoPago from '../paths/MercadoPago';
import * as emailjs from 'emailjs-com';

const functions = {
    armarDatosEmail : (datos,data) =>{
        const datos1 = {...datos,
            items:[{
                title: 'Presupuesto instalación Eléctrica',
                unit_price: 300,
                quantity: 1,
                description: data.presupuesto
            }],
            payer:{
                email: data.email,
                firts_name: data.nombre,
                phone:{
                    number: data.telefono
                }
            }
        };
        return datos1;
    },
    enviarPresupuesto: (datos1) =>{
        console.log(mercadoPago.preference)
        Axios.post(mercadoPago.preference,datos1).then(res =>{
            window.location.href = `${res.data.init_point}`
        }
        ).catch(e => {
            console.log(e)
        })
    },
    obtenerIdPago: () =>{
        const querystring = window.location.search;
        const params = new URLSearchParams(querystring);
        const paymentId = params.get('payment_id');
        return paymentId;
    },
    sendMail: (paymentId,history) =>{
        Axios.get(mercadoPago.payment(paymentId)).then(res =>{
            const {payer,additional_info} = res.data;
            const {items} = additional_info;
            const {first_name,phone,email} = payer;
            const cliente = {
                nombre: first_name,
                email: email,
                telefono: phone.number,
                presupuesto: items[0].description
            }
            if (res.data.status === 'approved') {
                emailjs.send('service_7if0784', 'template_g235k3m', cliente, 'user_UruR9nFNkkkXSRvAD2kYZ')
                    .then(() => {
                        alert("Presupuesto enviado conéxito");
                        window.location.href = "/";
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }else{
                alert('Pago no aprovado')
            }
        })
    }
}

export default functions;