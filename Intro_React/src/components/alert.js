// import hook to use
import {useState} from "react"

const Alert = () => {
    
// ready hook use, default value set
const [value, setValue] = useState("Initial Value")

    const handleClick = () => {
        console.log(value);
    };    
    
    const handleChange = (e) => {

        // updates value with user input
        setValue(e.target.value);

        //send the data to button here? so when content changes

        console.log("change");
        //console.log(value)
    };

        return (
            <>
            <button onClick={handleClick}>BUTTON</button>
            <input type="text" onChange={handleChange} value={value}/>
            </>
        );
};
    
export default Alert;
