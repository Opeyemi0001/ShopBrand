import React from 'react'
import './PartnersLogo.css'
import versace from '../../assets/Homepage/Group.png'
import gucci from '../../assets/Homepage/gucci-logo-1 1.png'
import zara from '../../assets/Homepage/zara-logo-1 1.png'
import prada from '../../assets/Homepage/prada-logo-1 1.png'
import calvinklein from '../../assets/Homepage/Group-1.png'

const PartnersLogo = () => {
    return (
        <div className='partnerslogo'id='partnerslogo' >
                <img src={versace} alt="" />
                <img src={gucci} alt="" />
                <img src={zara} alt="" />
                <img src={prada} alt="" />
                <img src={calvinklein} alt="" />

        </div>
    )
}

export default PartnersLogo