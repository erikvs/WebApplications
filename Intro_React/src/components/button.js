// TASK 8

const Button = () => {
    const handleClick = () => {
        console.log("Clicked");
    };
return (
    <>
    <button onClick={handleClick}>BUTTON</button>
    </>
);
};

export default Button;