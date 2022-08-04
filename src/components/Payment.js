import React from 'react';
import './Payment.css'

function Payment() {
    return (
        <>
            <section className="payment_sec">
                <p>Payment Method</p>
                <div className="payment_div">
                    <div className="payment_img_div">
                        <img src={require('../assets/paypal.jpg')} alt="" />
                    </div>
                    <div className="payment_img_div">
                        <img src={require('../assets/visa.jpg')} alt="" />
                    </div><div className="payment_img_div">
                        <img src={require('../assets/master-card.jpg')} alt="" />
                    </div>
                    <div className="payment_img_div">
                        <img src={require('../assets/maestro.png')} alt="" />
                    </div>
                    <div className="payment_img_div">
                        <img src={require('../assets/discover.jpg')} alt="" />
                    </div>
                    <div className="payment_img_div">
                        <img src={require('../assets/ideal.jpg')} alt="" />
                    </div>
                </div>
                <p>Delivery Method</p>
                <div className="delivery_div">
                    <div className="delivery_img_div">
                        <img src={require('../assets/InPost_Logo.jpg')} alt="" />
                        <p>$15.00</p>
                    </div>
                    <div className="delivery_img_div">
                        <img src={require('../assets/dpd.jpg')} alt="" />
                        <p>$20.00</p>
                    </div>
                    <div className="delivery_img_div">
                        <img src={require('../assets/dhl.jpg')} alt="" />
                        <p>$12.00</p>
                    </div>
                    <div className="delivery_img_div">
                        <img src={require('../assets/fadex.jpg')} alt="" />
                        <p>$10.00</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Payment