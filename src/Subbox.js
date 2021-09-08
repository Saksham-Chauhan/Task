import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import main from './img/main.png';
import sub from './img/submain.png';

const Subbox = () => {
    return (
        <>
            <div className='row m-1'>
                <div className='m-1 col-lg-6 col-md-6 col-10 rounded-3 mx-auto shadow mainimg'>
                    <h3 className='text-center'>User Overview</h3><hr />
                    <img className=' mx-auto  d-block img-fluid' src={main} alt="main" />
                </div>
                <div className='col-lg-5 col-md-5 col-10 rounded-3 mx-auto shadow subimg'>
                    <h3 className='text-center'>Users by device</h3><hr />
                    <img className='img-fluid mx-auto d-block' src={sub} alt="sub" />
                </div>
            </div>
        </>
    );
}

export default Subbox;