import React from "react";
import MyComponent from "./components/myComponent";
import Title from "./components/title";
import Wrapper from "./components/wrapper";
import Food from "./components/food";

// import hook to use
import {useState} from "react"

const food = ['Pizza', 'Hamburger', 'Coke'];
//const [value, setValue] = useState('Initial Value')


const App = ({title}) => {
// ready hook use, default value set
const [value, setValue] = useState('Initial Value')

// TASK 8
const handleClick = () => {
    console.log("Clicked");
};

    // TASK 9 + 10
const handleChange = (e) => {
    // updates value with user input
    setValue(e.target.value);
    console.log("change");
};
    
return (
<>
<MyComponent /> 
<Wrapper><Title title="Test" /></Wrapper>
<Food />


<button onClick={handleClick}>BUTTON</button>
<input type="text" onChange={handleChange} value={value} />


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
//<button onClick={handleClick}>BUTTON</button>

// TASK 9
// <input type="text" onChange={handleChange} />

