import React from 'react';

function SweetDishes(props){
    return (
        <div>
            <h3>Today Beverages:</h3>
            <p>{props.SweetDish1}</p>
            <p>{props.SweetDish2}</p>
        </div>
    );
}


export default SweetDishes;