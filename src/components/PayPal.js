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
              color: 'white',
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
              //console.log(order);
              setPaidFor(true)

            },
            onError: err => {
              setError(err);
              console.log(error);
            }
          }).render(paypalRef.current);
    }

    useEffect(() => {
      if (sdk === false) {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AQ7S1K9k_fTVm-hxtjumIIoZXi3cxwiiEuMbhjj8ls8XmzBbE6KlX6ghFbyKI8QiRXKq1ym46q2xCQNR&currency=EUR";
        script.async = true;
        script.onload = () => renderPP();
        document.body.appendChild(script);
      }
    })

    return (
        <>
            {sdk && 
                paidFor === false ? <div ref={paypalRef}></div> :
                    <div>
                        <h4>Thank you for buying YWIB!</h4>
                        <p>An email confirming your order has been sent.</p>
                        <p>If you have any questions do get in touch!</p>
                    </div>
            }
        </>
    )
}

export default PayPal