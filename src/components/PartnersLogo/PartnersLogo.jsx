import React from 'react'
import './PartnersLogo.css'
import versace from '../../assets/Homepage/Group.png'
import gucci from '../../assets/Homepage/gucci-logo-1 1.png'
import zara from '../../assets/Homepage/zara-logo-1 1.png'
import prada from '../../assets/Homepage/prada-logo-1 1.png'
import calvinklein from '../../assets/Homepage/Group-1.png'

const PartnersLogo = () => {
    return (
        <div className='partnerslogo' id='partnerslogo' >
            <div className='column-one'>
                <img src={versace} alt="" />
                <img src={gucci} alt="" />
                <img src={zara} alt="" />
            </div>
            <div className='partnerslogo-column-two'>
                <img className='prada' src={prada} alt="" />
                <img className='calvinklein' src={calvinklein} alt="" />
            </div>


        </div>
    )
}

export default PartnersLogo