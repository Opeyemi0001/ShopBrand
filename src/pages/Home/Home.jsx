import React from 'react'
 import './Home.css'
 import Header from '../../components/Header/Header'
 import PartnersLogo from '../../components/PartnersLogo/PartnersLogo'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import TopSelling from '../../components/TopSelling/TopSelling'

 const Home = () => {
   return (
     <div>
        <Header/>
        <PartnersLogo/>
        <NewArrivals/>
        <TopSelling/>
     </div>
   )
 }

 export default Home