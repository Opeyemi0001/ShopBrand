import React from 'react'
import './Navbar.css'
import Basket from '../../Homepage/basket.png'
import identity from '../../Homepage/Identity.png'
import selectArrow from '../../Homepage/selectArrow.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className='logo' >SHOP.CO</h1>
            
            <ul className='navbar-menu'>
                <li>Shop</li>
                <li>On sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
                <img src={selectArrow} alt="" />
            </ul>
            
            <div className='navbar-right'>
                <div className='search-bar'>
                    <input type="text" className='basketIcon' placeholder='Search for product..' />
                </div>
                <img src={Basket} alt="" />
                <img src={identity} alt="" />
            </div>


        </div>
    )
}

export default Navbar