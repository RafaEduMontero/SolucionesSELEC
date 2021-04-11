const TOKEN = 'access_token=APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410'
const mercadoPago = {
    preference: `https://api.mercadopago.com/checkout/preferences?${TOKEN}`,
    payment: (paymentId) =>{
        const url = `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410`
        return url
    }
}

export default mercadoPago;