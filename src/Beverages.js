import React from 'react';


function Beverages(props){
    return (
        <div>
            <h3>Today Beverages:</h3>
            <p>{props.Beverage1}</p>
            <p>{props.Beverage2}</p>
            <p>{props.Beverage3}</p>
        </div>
    );
}

export default Beverages;