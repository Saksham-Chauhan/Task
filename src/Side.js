import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Head from './Head';
import Headings from './Headings'
import Box from './Box';
import Subbox from './Subbox'

const Side = () => {
    return (
        <>
            <div className='border col-xl-10 col-lg-10 col-md-10 col-12 submain'>
                <Head />
                <Headings />
                <Box />
                <Subbox />
            </div>
        </>
    );
}
export default Side;