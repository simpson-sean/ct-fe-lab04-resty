import React from 'react';
import PropTypes from 'prop-types';
import '../../css/controls.css';

const Controls = ({ url, userJson, onChange, onSubmit }) => {
    return(
        <>
        <form onSubmit={onSubmit} data-testid="controls">
            <input className="api-input" type="text" placeholder="Enter URL" aria-label="input-url" name="url" value={url} onChange={onChange} />
            <div className="methods">

                <input type="radio" id="get" name="method" aria-label="method" value="GET" onChange={onChange} />
                <label htmlFor="get">GET</label>
                
                <input type="radio" id="post" name="method" aria-label="method" value="POST" onChange={onChange} />
                <label htmlFor="post">POST</label>
                
                <input type="radio" id="put" name="method" aria-label="method" value="PUT" onChange={onChange} />
                <label htmlFor="put">PUT</label>
                
                <input type="radio" id="patch" name="method" aria-label="method" value="PATCH" onChange={onChange} />
                <label htmlFor="patch">PATCH</label>
                
                <input type="radio" id="delete" name="method" aria-label="method" value="DELETE" onChange={onChange} />
                <label htmlFor="delete">DELETE</label>
                <button aria-label="go-button" onClick={onSubmit}>GO!</button>
            
            </div>
            <textarea
                placeholder="All your JSON are belong to us"
                rows="10"
                cols="50"
                name="raw-body"
                name="userJson"
                value={userJson}
                onChange={onChange}
            ></textarea>
        </form>
        </>
    );
}

Controls.propTypes = {
    url: PropTypes.string.isRequired, 
    userJson: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Controls;