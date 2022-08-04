import React from 'react';
import './BottomBar.css';
import { FaArrowLeft } from "react-icons/fa";


function BottomBar() {
    return (
        <>
            <section className="bottombar_sec">
                <div className="back_div">
                    <p><FaArrowLeft style={{fontSize:"20px"}}/></p> 
                    <p>Back</p>
                </div>
                <div className="continue_div">
                    <button>CONTINUE SHOPPING</button>
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </section>
        </>
    )
}

export default BottomBar