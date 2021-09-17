import React from  'react';
// import { render } from 'react-dom';
import Controls from '../components/resty/Controls';
import Header from '../components/resty/Header';

const RestyContainer = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Button Clicked from RustyContainer');
    };

    return(
        <>
        <Header />
        <h1>RustyContainer</h1>
        <Controls queryHandler={handleSubmit} />
        </>
    ) 
}

export default RestyContainer;
