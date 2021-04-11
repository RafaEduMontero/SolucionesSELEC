const preferences = {
    external_reference: 'ABC',
        notification_url: "https://hookb.in/MqX2LBNdeBSBKK6OLzyd",
        items: [
          {
            title: 'Presupuesto instalación Eléctrica',
            unit_price: 300,
            quantity: 1,
            description: ''
          }
        ],
        back_urls: {
            success: `http://localhost:3000/presupuesto`,
            // "failure": "http://www.tu-sitio/failure",
            // "pending": "http://www.tu-sitio/pending"
        },
        "auto_return": "approved",
        payer: {
            email: '',
            firts_name: '',
            phone: {
                number: ''
            }
        }
}

export default preferences;