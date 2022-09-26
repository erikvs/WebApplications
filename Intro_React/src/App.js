import MyComponent from "./components/myComponent";
import Title from "./components/title";
import Wrapper from "./components/wrapper";
import React from "react";
import Food from "./components/food";

const food = ['Pizza', 'Hamburger', 'Coke'];


const App = ({title}) => {
return (

<Food /> 
);
};

export default App;


// TASK 1
//<MyComponent /> 

// TASK 4
//<Wrapper><Title title="Test" /></Wrapper>

// TASK 6
/* <>
<ul>
{food.map(food => <li>{food}</li>)} 
</ul>
</> */