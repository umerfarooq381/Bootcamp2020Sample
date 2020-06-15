import React from 'react';

import Meals from './Meals.js';
import SweetDishes from './SweetDishes.js';
import Beverages from './Beverages.js';

function CompleteMenu(props){

    return (
        <div>
            <Meals FirstDish={props.FirstDish} SecondDish={props.SecondDish} ThirdDish={props.ThirdDish} />
            <SweetDishes SweetDish1={props.SweetDish1} SweetDish2={props.SweetDish2} />
            <Beverages Beverage1={props.Beverage1} Beverage2={props.Beverage2}  Beverage3={props.Beverage3} />
        </div>
    );
}

export default CompleteMenu;