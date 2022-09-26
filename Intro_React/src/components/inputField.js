// TASK 9

const InputField = () => {
    const handleChange = () => {
        console.log("change");
    };
return (
    <>
    <input type="text" onChange={handleChange}/>
    </>
);
};

export default InputField;