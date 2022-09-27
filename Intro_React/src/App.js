import React from "react";
import MyComponent from "./components/myComponent";
import Title from "./components/title";
import Wrapper from "./components/wrapper";
import Food from "./components/food";
//import Button from "./components/button"
import InputField from "./components/inputField";

const food = ['Pizza', 'Hamburger', 'Coke'];

// TASK 8
const handleClick = () => {
    console.log("Clicked");
};



const App = ({title}) => {
return (
<>
<MyComponent /> 
<Wrapper><Title title="Test" /></Wrapper>
<Food />


<button onClick={handleClick}>BUTTON</button>



</>
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

// TASK 7
//<Food />

// TASK 8
//<Button/>

// TASK 9
// <InputField/>

// TASK 11
// <Button/>   
// <InputField/>