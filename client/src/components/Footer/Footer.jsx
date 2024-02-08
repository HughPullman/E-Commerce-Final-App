import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accesories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Don't judge each day by the harvest you reap but by the seeds 
                        that you plant.
                         -Robert Louis Stevenson<br/>
                         The future belongs to those who believe in the beauty of their 
                         dreams. 
                         -Eleanor Roosevelt<br/>
                         Do not go where the path may lead, go instead where there is 
                         no path and leave a trail. 
                         -Ralph Waldo Emerson<br/></span>
                </div>
                <div className="item">
                <h1>Contact</h1>
                    <span>Don't judge each day by the harvest you reap but by the seeds 
                        that you plant.
                         -Robert Louis Stevenson<br/>
                         The future belongs to those who believe in the beauty of their 
                         dreams. 
                         -Eleanor Roosevelt<br/>
                         Do not go where the path may lead, go instead where there is 
                         no path and leave a trail. 
                         -Ralph Waldo Emerson</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className='logo'>HUGHSTORE</span>
                    <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src='/hughstore/img/payment.png' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Footer