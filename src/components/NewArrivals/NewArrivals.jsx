import React from 'react'
import './NewArrivals.css'
import shirtone from '../../assets/Homepage/Frame 32.png'
import shirttwo from '../../assets/Homepage/Frame 33.png'
import shirtthree from '../../assets/Homepage/Frame 34.png'
import shirtfour from '../../assets/Homepage/Frame 38.png'
import starone from '../../assets/Homepage/Frame 35.png'
import startwo from '../../assets/Homepage/Frame 39.png'
import starthree from '../../assets/Homepage/Frame 40.png'
import starfour from '../../assets/Homepage/Frame 41.png'
import twentypercent from '../../assets/Homepage/Frame 42.png'
import thirtypercent from '../../assets/Homepage/Frame 43.png'

const NewArrivals = () => {
    return (
        <div className='newarrivals' id='newarrivals'>
            <div className='newarrivals-contents'>
                <h1>NEW ARRIVALS</h1>
                <div className='newarrivals-clothes'>
                    <div className='newarrivals-clothesone'>
                        <img src={shirtone} alt="" />
                        <h4>T-shirt with Tape Details</h4>
                        <img src={starone} alt="" />
                        <h3>$120</h3>
                    </div>
                    <div className='newarrivals-clothestwo'>
                        <img src={shirttwo} alt="" />
                        <h4>Skinny Fit Jeans</h4>
                        <img src={startwo} alt="" />
                        <div className='amount-discount'>
                            <h3>$240</h3>
                            <h3 className='discount-price'>$260</h3>
                            <img src={twentypercent} alt="" />
                        </div>

                    </div>
                    <div className='newarrivals-clothesthree'>
                        <img src={shirtthree} alt="" />
                        <h4>Checkered Shirt</h4>
                        <img src={starthree} alt="" />
                        <h3>$180</h3>
                    </div>
                    <div className='newarrivals-clothesfour'>
                        <img src={shirtfour} alt="" />
                        <h4>Sleeve Striped T-shirt</h4>
                        <img src={starfour} alt="" />
                        <div className='amount-discount'>
                            <h3>$130</h3>
                            <h3 className='discount-price' >$160</h3>
                            <img src={thirtypercent} alt="" />
                        </div>
                    </div>
                </div>
                <button>View All</button>
                {/* <hr /> */}
            </div>
            {/* <hr /> */}
        </div>
        
        
    )
}

export default NewArrivals