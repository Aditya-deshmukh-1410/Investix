import React from 'react';
import { useNavigate } from "react-router-dom";


function Universe() {
  const navigate = useNavigate();
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        <h1>The Investix Universe</h1>
        <p> Extend your trading and investment experience even further with our partner platforms</p>
        
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" alt='img' />
          <p className='text-small text-muted'>
            Thematic investment platform
          </p>
        </div>

         <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" className="universe-logo" />
          <p className='text-small text-muted'>
            Algo & strategy platform
          </p>
        </div>

         <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" className="universe-logo" />
          <p className='text-small text-muted'>
            Open trading platform
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" className="universe-logo"/>
          <p className='text-small text-muted'>
            Passive funds for long-term investing.
          </p>
        </div>

         <div className="col-4 p-3">
          <img src="media/images/goldenpiLogo.png" className="universe-logo"/>
          <p className='text-small text-muted'>
            Access curated bond investments.
          </p>
        </div>

         <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" className="universe-logo" />
          <p className='text-small text-muted'>
            Simple, unbiased insurance advice.
          </p>
        </div>

      </div>

        <button 
            className="p-2 btn btn-primary fs-5 mb-5 d-block"
            style={{ width: "20%", margin: "0 auto" }}
            onClick={() => navigate("/signup")}
        >
             Signup Now
        </button>

    </div>
     );
}

export default Universe;