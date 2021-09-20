import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view'

export default function Display({ response }) {
    return (
       <div aria-label="response">
           <ReactJson src={response} />
       </div>        
    )
};

Display.propTypes = {
    response: PropTypes.object || PropTypes.array,
};





