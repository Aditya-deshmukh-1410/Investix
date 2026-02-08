import React from 'react';

function Eductaion() {
    return (  
        <div className='container mt-5'>

            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg'/>
                </div>
           
                <div className='col-6'> 
                    <h1 className='mb-4 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market eductaion book in the world covering everything from basics to advanced trading </p>
                    <a href=""  style={{textDecoration:"none"}}>
                            Versity
                            <i class="fa-solid fa-arrow-right-long ms-2"></i>
                        </a>

                    <p className='mt-5'>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=""  style={{textDecoration:"none"}}>
                            Trading Q&A
                            <i class="fa-solid fa-arrow-right-long ms-2"></i>
                        </a>    
                </div>
            </div>
        </div>
    );
}

export default Eductaion;