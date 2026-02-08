import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount'

function PricingPage() {
    return ( 
        <>
            <Hero/>

           <div className=" pricing-page my-3">
                <div className='open-account'>
                    <OpenAccount />
                </div>
            </div>
            
            <Brokerage/>
        </>
     );
}

export default PricingPage;