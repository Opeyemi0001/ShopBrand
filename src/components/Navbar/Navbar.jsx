import React, { useState } from 'react'
import './Navbar.css'
import Basket from '../../assets/Homepage/basket.png'
import identity from '../../assets/Homepage/Identity.png'
import selectArrow from '../../assets/Homepage/selectArrow.png'

const Navbar = () => {

    const [menu,setMenu] = useState ("shop");

    return (
        <div className='navbar'>
            <h1 className='logo' >SHOP.CO</h1>
            <div className='navbar-menu'>
                <ul className='menu-list'>
                    <li onClick={()=>setMenu("shop")} className={menu==="shop"?"active":""} >Shop</li>
                    <li onClick={()=>setMenu("on-sale")} className={menu==="on-sale"?"active":""} >On sale</li>
                    <li onClick={()=>setMenu("new-arrivals")} className={menu==="new-arrivals"?"active":""} >New Arrivals</li>
                    <li onClick={()=>setMenu("brands")} className={menu==="brands"?"active":""} >Brands</li>
                </ul>
                {/* <img className='select-menu' src={selectArrow} alt=""  */}
            </div>


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