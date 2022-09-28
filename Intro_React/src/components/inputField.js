// TASK 9 + 10

// import hook to use
import {useState} from "react"

const InputField = () => {

    // ready hook use, default value set
    const [value, setValue] = useState("Initial Value")

    const handleChange = (e) => {

        // updates value with user input
        setValue(e.target.value);

        //send the data to button here? so when content changes

        console.log("change");
        //console.log(value)
    };
return (
    // added "value={state}" to input field to make it controlled
    <>
    <input type="text" onChange={handleChange} value={value}/>
    </>
);
};

export default InputField;