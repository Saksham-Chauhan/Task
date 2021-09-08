import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import one from './img/one.jpg';
import two from './img/two.png';
import three from './img/three.jfif';
import four from './img/four.png';

const Box = () => {
    return(
        <>
            <div className='row col-lg-12 col-md-12 col-12 mx-5'>
                <div className='col-lg-2 col-md-2 col-6 boxes m-2 rounded-3 shadow'><img className='img-fluid my-1 rounded mx-auto d-block' src={one} alt="one" /></div>
                <div className='col-lg-2 col-md-2 col-6 boxes m-2 rounded-3 shadow'><img className='img-fluid my-1 mx-auto d-block rounded' src={two} alt="two" /></div>
                <div className='col-lg-2 col-md-2 col-6 boxes m-2 rounded-3 shadow'><img className='img-fluid my-1 mx-auto d-block rounded' src={three} alt="three" /></div>
                <div className='col-lg-2 col-md-2 col-6 boxes m-2 rounded-3 shadow'><img className='img-fluid my-1 mx-auto d-block rounded' src={four} alt="four" /></div>
                <div className='col-lg-2 col-md-2 col-6 boxes m-2 rounded-3 shadow'><img className='img-fluid my-1 mx-auto d-block rounded' src={three} alt="five" /></div>
            </div> 
        </>
    );
}

export default Box;