import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return(
        <>
            <div className='col-lg-2 col-md-2 col-12 '>
            <h4 className='text-center mt-3'>Dashboard</h4><hr />
            <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="text-secondary nav-link active" aria-current="page" href="/">
                    <i class="fa fa-pencil" aria-hidden="true"></i> Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-secondary nav-link" href="/">
                    <i class="fa fa-clipboard" aria-hidden="true"></i> Post</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-secondary nav-link" href="/">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> New Post</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-secondary nav-link" href="/">
                    <i class="fa fa-th" aria-hidden="true"></i> Form</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-secondary nav-link" href="/">
                    <i class="fa fa-table" aria-hidden="true"></i> Table</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-secondary nav-link" href="/">
                    <i class="fa fa-user" aria-hidden="true"></i> User</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-secondary nav-link" href="/">
                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Errors</a>
                  </li>
            </ul>
         </div>
        </>
    )
}
export default Nav;