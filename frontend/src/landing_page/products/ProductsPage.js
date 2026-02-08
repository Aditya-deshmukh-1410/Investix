
import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
    return ( 

        <>
            <Hero/>
            <LeftSection 
                imageURL="media/images/kite.png" 
                productName="Kite" 
                productDescription="Our ultra-fast flagship trading platform with streaming market data , advance charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
                tryDemo="" 
                learnMore="" 
                googlePlay="" 
                appStore="" 
            />

            <RightSection

                imageURL="media/images/console.png" 
                productName="Console" 
                productDescription="Console is Investix’s central dashboard for tracking your investments, trades, and portfolio performance. Get detailed insights, reports, and tax statements to help you understand and manage your investments better.." 
                tryDemo="" 
                learnMore="" 
            
            />

            <LeftSection 
                imageURL="media/images/coin.png" 
                productName="Coin" 
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                tryDemo="" 
                learnMore="" 
                googlePlay="" 
                appStore="" 
            />

             <RightSection

                imageURL="media/images/kiteconnect.png" 
                productName="Kite Connect API" 
                productDescription="Kite Connect API allows developers and traders to build fully automated trading systems and custom applications on top of Investix’s infrastructure. It provides access to live market data, historical data, order placement, and account information through a secure and reliable API." 
                tryDemo="" 
                learnMore="" 
            
            />

            <LeftSection 
                imageURL="media/images/varsity.png" 
                productName="Varsity mobile" 
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Connect is broken down into bite-size cards to help you learn on the go." 
                tryDemo="" 
                learnMore="" 
                googlePlay="" 
                appStore="" 
            />

            <p className='text-center mt-5 mb-5'>
                Want to know more about our technology stack? Check out the Investix.tech blog.
             </p>
        
            <Universe/>
            
        </>
        
     );
}

export default ProductsPage;