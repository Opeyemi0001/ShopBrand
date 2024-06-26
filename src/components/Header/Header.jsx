import React from 'react'
import './Header.css'
import Bigstar from '../../assets/Homepage/Bigstar.png'
import SmallStar from '../../assets/Homepage/SmallStar.png'
import BoyGirl from '../../assets/Homepage/BoyGirl.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-bigstar'>
                <img src={Bigstar} alt="" />
            </div>
            <img className='smallstar' src={SmallStar} alt="" />
            <div className="header-contents">
                <h2>FIND CLOTHES <br />THAT MATCHES <br />YOUR STYLE</h2>
                <p className='header-contents-p'>Browse through our diverse range of meticulously crafted garments, designed <br />to bring out your individuality and cater to your sense of style.</p>
                <button>Shop Now</button>
                <div className="header-figures">
                    <div className='column-one'>
                        <div className='first-figure'>
                            <p className='figure'>200+</p>
                            <p className='header-contents-p'>International Brands</p>
                        </div>
                        <hr />
                        <div className='second-figure'>
                            <p className='figure'>2,000+</p>
                            <p className='header-contents-p'>High-Quality Products</p>
                        </div>
                    </div>
                    <hr className='second-hr' />
                    <div className='column-two'>
                        <div className='third-figure'>
                            <p className='figure'>30,000+</p>
                            <p className='header-contents-p'> Happy Customers</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header