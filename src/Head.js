import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import user from './img/user.jfif';

const Head = () =>{
    return(
        <>
            <div className='row col-lg-12 col-md-12 col-12 serch'>
                <div className='d-flex flex-row'>
                    <i class="fa fa-search mt-4" aria-hidden="true"></i>
                    <input className='w-25 m-3 d-inline' type="search" placeholder="Search for something..."/>
                    <div className='ms-auto'>
                        <i className="fa fa-bell fs-3 color-secondary m-3" aria-hidden="true"></i>
                        <img className='rounded-circle mb-2' src={user} alt="user" ></img>
                        <h6 className='d-inline float-end mx-2 mt-3'>User name</h6>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Head;