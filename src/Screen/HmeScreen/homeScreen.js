import React from 'react'
import './homeScreen.css'
import HomeDetails from './HomeDetails/homeDetails';
import HomeBanner from './HomeBanner/homeBanner';
import Footer from '../../Component/Footer/footer';

const HomeScreen = () => {
    return (
        <div className='homwScreen'>
            
            <HomeBanner />
            <HomeDetails/>
            <Footer />
        </div>
    )
}

export default HomeScreen;