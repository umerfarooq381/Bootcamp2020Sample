import React from 'react';

import './App.css';

import CompleteMenu from './CompleteMenu';


function App() {
  return (
    <div className="App">
      <CompleteMenu FirstDish="Biryani" SecondDish="Qorma" ThirdDish="Bhindi" SweetDish1="Kheer" SweetDish2="Zarda" Beverage1="Soft Drink" Beverage2="Chae"  Beverage3="Coffee" />
    </div>
  );
}

export default App;
