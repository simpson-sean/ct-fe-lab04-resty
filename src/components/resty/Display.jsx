import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import '../../css/json-response.css';

export default function Display({ response }) {
    return (
       <section aria-label="response" className="json-response">
           <ReactJson src={response} />
       </section>        
    )
};

Display.propTypes = {
    response: PropTypes.object || PropTypes.array,
};





