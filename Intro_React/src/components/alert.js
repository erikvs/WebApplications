// import hook to use
import {useState} from "react"

const Alert = ({setInputValue}) => {
    
// ready hook use, default value set
const [value, setValue] = useState("Initial Value")

    const handleClick = () => {
        console.log(value);
    };    
    
    const handleChange = (e) => {

        // updates value with user input
        setValue(e.target.value);

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
