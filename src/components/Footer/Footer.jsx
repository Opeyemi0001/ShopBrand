import React from 'react'
import './Footer.css'
import twitterIcon from '../../assets/Homepage/1.png'
import facebookIcon from '../../assets/Homepage/2.png'
import instagramIcon from '../../assets/Homepage/3.png'
import githubIcon from '../../assets/Homepage/4.png'
import mastercard from '../../assets/Homepage/Badge-1.png'
import paypal from '../../assets/Homepage/Badge-2.png'
import applepay from '../../assets/Homepage/Badge-3.png'
import gpay from '../../assets/Homepage/Badge-4.png'
import visa from '../../assets/Homepage/Badge.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-shop">
                <h1>SHOP.CO</h1>
                <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className="social-logo">
                    <img src={twitterIcon} alt="" />
                    <img src={facebookIcon} alt="" />
                    <img src={instagramIcon} alt="" />
                    <img src={githubIcon} alt="" />
                </div>
            </div>
            <div className="footer-content-company">
                <h3>COMPANY</h3>
                <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Works</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="footer-content-help">
            <h3>HELP</h3>
                <ul>
                    <li>Customer Support</li>
                    <li>Delivery Details</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-faq">
                <h3>FAQ</h3>
                <ul>
                    <li>Account</li>
                    <li>Manage Deliveries</li>
                    <li>Order</li>
                    <li>Payment</li>
                </ul>
            </div>
            <div className="footer-content-resources">
                <h3>RESOURCES</h3>
                <ul>
                    <li>Free eBooks</li>
                    <li>Development Tutorial</li>
                    <li>How to-Blog</li>
                    <li>Youtube PlayList</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="copyright">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="atmlogo">
                <img src={visa} alt="" />
                <img src={mastercard} alt="" />
                <img src={paypal} alt="" />
                <img src={applepay} alt="" />
                <img src={gpay} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer