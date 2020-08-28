import React, { useState, useEffect, useRef } from "react"

const PayPal = (props) => {
    const [sdk, setSdk] = useState(false);

    //Paypal state
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState();
    let paypalRef = useRef(null);

    //Product details
    const product = {
        price: props.price,
        description: props.description
    }

    //PAYPAL BUTTON RENDER
    const renderPP = () => {
        setSdk(true)
        window.paypal.Buttons({
            style:{
              shape: 'rect',
              color: 'blue',
              layout: 'vertical',
              label: 'pay',
            },
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      value: product.price,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log(order);
            },
            onError: err => {
              setError(err);
              console.log(error);
            }
          }).render(paypalRef.current);
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=ARNwFZO38KRqPl2p7j0cukKqALHdgqQtTkXnbeHQ28pktddnhXY0IAY9Fp9EWXt4pKZ_SMDzXcfDmv2g&currency=GBP";
        script.async = true;
        script.onload = () => renderPP();
        document.body.appendChild(script);
    })

    return (
        <>
            {sdk && 
                paidFor === false ? <div ref={paypalRef}></div> :
                    <div>paid for </div>
            }
        </>
    )
}

export default PayPal