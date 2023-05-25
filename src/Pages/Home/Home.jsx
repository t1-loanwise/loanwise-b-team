import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from './Hero/Hero'
import LoanwiseUsers from './LoanwiseUsers/LoanwiseUsers'
import LoanDefaulters from './LoanwiseImgText/LwImgTxt'
import Teamwork from './TeamWork/Teamwork'
import Revolutionising from './Revolutionising/Revolutionising'
import AmazingFeatures from './AmazingFeatures/AmazingFeatures'

const Home = () => {
    return (
        <div className='container'>
            <Header />
            <Hero />
            <Revolutionising />
            <AmazingFeatures />
            <Teamwork />
            <LoanDefaulters />
            <LoanwiseUsers />
            <Footer />
        </div>
    )
}

export default Home