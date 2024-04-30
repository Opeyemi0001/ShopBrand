import React from 'react'
import './NewArrivals.css'
import shirtone from '../../assets/Homepage/frame 32.png'
import shirttwo from '../../assets/Homepage/frame 33.png'
import shirtthree from '../../assets/Homepage/frame 34.png'
import shirtfour from '../../assets/Homepage/frame 38.png'
import starone from '../../assets/Homepage/frame 35.png'
import startwo from '../../assets/Homepage/frame 39.png'
import starthree from '../../assets/Homepage/frame 40.png'
import shirtfour from '../../assets/Homepage/frame 41.png'

const NewArrivals = () => {
  return (
    <div className='newarrivals'>
        <div className='newarrivals-contents'>
            <h2>NEW ARRIVALS</h2>
            <div className='newarrivals-clothes'>
                <div className='newarrivals-clothesone'>
                    <img src={shirtone} alt="" />
                    <p>T-shirt with Tape Details</p>
                    <img src={starone} alt="" />
                    <p>$120</p>
                </div>
                <div className='newarrivals-clothestwo'>
                <img src={shirttwo} alt="" />
                    <p>Skinny Fit Jeans</p>
                    <img src={startwo} alt="" />
                    <p>$120</p
                </div>
                <div className='newarrivals-clothesthree'></div>
                <div className='newarrivals-clothesfour'></div>
            </div>
            <button>View All</button>
        </div>
    </div>
  )
}

export default NewArrivals