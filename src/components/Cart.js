import React from 'react';
import './Cart.css';
import {FaTruck} from "react-icons/fa";



function Cart() {
    return (
        <>
            <section className="cart_section">
                <p>Your Cart</p>
                <div className="cart_item">
                    <div className='cart_img_div'>
                        <img src={require('../assets/white-tshirt.jpg')} alt="" />
                        <div className="item_details">
                            <p>T-Shirts</p>
                            <p>Summer Vibes</p>
                            <p>#261311</p>
                        </div>
                    </div>
                    <h4 className='item_price'>$89.99</h4>
                </div>
                <div className="cart_item">
                    <div className='cart_img_div'>
                        <img src={require('../assets/black-tshirt.jpg')} alt="" />
                        <div className="item_details">
                            <p>Basic slim</p>
                            <p>Fit Tshirt</p>
                            <p>#261312</p>
                        </div>
                    </div>
                    <h4 className='item_price'>$69.99</h4>
                </div>
                <div className="total_price">
                    <p>Total Cost</p>
                    <h3>$159.98</h3>
                </div>
                <div className="offer_div">
                    <p><FaTruck/></p>
                    <div>
                        <p>You are <strong>$30.02</strong>  away <br/> from free shipping!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart