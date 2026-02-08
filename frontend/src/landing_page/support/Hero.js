import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">

            {/* SAME container for alignment */}
            <div className="container">

                {/* Top bar */}
                <div className="row">
                    <div className="col-12">
                        <div id="supportWrapper">
                            <h4 className="mt-3">Support Portal</h4>
                            <h4 className="mt-3" style={{paddingRight:"300px"}}>Track Tickets</h4>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="row align-items-center heroContent">
                    <div className="col-md-6">
                        <h1 className="heroTitle">
                            Search for an answer or browse help topics to create a ticket
                        </h1>

                        <input
                            className="heroSearch"
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                        />

                        <div className="quickLinks">
                            <a href="">Track account opening</a>
                            <a href="">Track segment activation</a>
                            <a href="">Intraday margins</a>
                            <a href="">Kite user manual</a>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h5 className="featuredTitle" style={{fontSize:"20px"}}>Featured</h5>
                        <ol className="featuredList">
                            <li>
                                <a href="">Current Takeovers and Delisting – January 2024</a>
                            </li>
                            <li>
                                <a href="">Latest Intraday leverages – MIS & CO</a>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
