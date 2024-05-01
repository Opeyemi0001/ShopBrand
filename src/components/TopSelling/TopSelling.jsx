import React from 'react'
import './TopSelling.css'
import shirtone from '../../assets/Homepage/Frame 32-1.png'
import shirttwo from '../../assets/Homepage/Frame 33-1.png'
import shirtthree from '../../assets/Homepage/Frame 34-1.png'
import shirtfour from '../../assets/Homepage/Frame 38-1.png'
import starone from '../../assets/Homepage/Frame 35-1.png'
import startwo from '../../assets/Homepage/Frame 39-1.png'
import starthree from '../../assets/Homepage/Frame 40-1.png'
import starfour from '../../assets/Homepage/Frame 41-1.png'
import thirtypercent from '../../assets/Homepage/Frame 43.png'

const TopSelling = () => {
  return (
    <div className='topselling'>
            <div className='topselling-contents'>
                <h1>TOP SELLING</h1>
                <div className='topselling-clothes'>
                    <div className='topselling-clothesone'>
                        <img src={shirtone} alt="" />
                        <h4>Vertical Striped Shirt</h4>
                        <img src={starone} alt="" />
                        <div className='amount-discount'>
                            <h3>$212</h3>
                            <h3 className='discount-price'>$232</h3>
                            <img src={thirtypercent} alt="" />
                        </div>
                    </div>

                    <div className='topselling-clothestwo'>
                        <img src={shirttwo} alt="" />
                        <h4>Courage Graphic T-shirt</h4>
                        <img src={startwo} alt="" />
                        <h3>$145</h3>
                    </div>

                    <div className='topselling-clothesthree'>
                        <img src={shirtthree} alt="" />
                        <h4>Loose Fit Bermuda Shorts</h4>
                        <img src={starthree} alt="" />
                        <h3>$80</h3>
                    </div>

                    <div className='topselling-clothesfour'>
                        <img src={shirtfour} alt="" />
                        <h4>Faded Skinny Jeans</h4>
                        <img src={starfour} alt="" />
                        <h3>$210</h3>
                    </div>

                </div>
                <button>View All</button>
            </div>
            {/* <hr /> */}
        </div>
  )
}

export default TopSelling