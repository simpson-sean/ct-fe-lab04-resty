import React from 'react';

const Controls = ({ queryHandler }) => {
    return(
        <>
        <form onSubmit={queryHandler}>
            <input type="text" placeholder="Enter URL"></input>
            <div>
                <input type="radio" id="get" name="method" value="GET"></input>
                <label htmlFor="get">GET</label>
                <input type="radio" id="post" name="method" value="POST"></input>
                <label htmlFor="post">POST</label>
                <input type="radio" id="put" name="method" value="PUT"></input>
                <label htmlFor="put">PUT</label>
                <input type="radio" id="patch" name="method" value="PATCH"></input>
                <label htmlFor="patch">PATCH</label>
                <input type="radio" id="delete" name="method" value="DELETE"></input>
                <label htmlFor="delete">DELETE</label>
                <button>GO!</button>
            </div>
            
        </form>
        </>
    );
}

export default Controls;