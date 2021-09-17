import React from 'react';

const Controls = ({ queryHandler }) => {
    return(
        <>
        <form onSubmit={queryHandler}>
            <input type="text" placeholder="Search Here"></input>
            <button>GO!</button>
        </form>
        </>
    );
}

export default Controls;