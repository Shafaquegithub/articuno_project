import React from 'react';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt, FaTruck, FaArrowLeft } from "react-icons/fa";


import './Navbar.css'
function Navbar() {
    
    return (
        <>
            <section className="nav_sec">
                <div className="logo_div">
                    <img src={require('../assets/logo.png')} alt="" />
                    <p><span>E-</span>Shop</p>
                </div>
                <div className="nav_center_div">
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                </div>
                <div className="nav_icon_div">
                    <p><AiOutlineSearch /></p>
                    <p><AiOutlineShoppingCart /></p>
                    <p><FaUserAlt /></p>
                </div>
            </section>
            <section className="below_nav_sec">
                <div>
                    <p>Shopping and Payment</p>
                </div>
                <div>
                    <p><AiOutlineShoppingCart /></p>
                    <p><FaTruck /></p>
                </div>
            </section>


        </>
    )
}

export default Navbar