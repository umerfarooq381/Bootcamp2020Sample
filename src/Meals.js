import React from 'react'


function Meals(props){
    return (
        <div>
            <h3>Today Meals:</h3>
            <p>{props.FirstDish}</p>
            <p>{props.SecondDish}</p>
            <p>{props.ThirdDish}</p>
        </div>
    );
}


export default Meals;