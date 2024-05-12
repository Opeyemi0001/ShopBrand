import React from 'react'
 import './Home.css'
 import Header from '../../components/Header/Header'
 import PartnersLogo from '../../components/PartnersLogo/PartnersLogo'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import TopSelling from '../../components/TopSelling/TopSelling'
import BrowseByStyle from '../../components/BrowserByStyle/BrowseByStyle'
import HappyCustomer from '../../components/HappyCustomer/HappyCustomer'
import Subcribe from '../../components/Subcribe/Subcribe'

 const Home = () => {
   return (
     <div>
        <Header/>
        <PartnersLogo/>
        <NewArrivals/>
        <TopSelling/>
        <BrowseByStyle/>
        <HappyCustomer />
        <Subcribe />
        
     </div>
   )
 }

 export default Home