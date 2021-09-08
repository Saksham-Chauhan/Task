import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Nav from './Nav';
import Side from './Side'

function App() {
  
  return (
    <>
      <div className='container-fluid row main'>
          <Nav/>
          <Side/>  
      </div>
    </>
  );
}

export default App;
