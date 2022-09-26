// TASK 7

 const food = ['Pizza', 'Hamburger', 'Coke'];

export default function Food() {
   
    return (

        <ul>
        {food.map(food=> <li key={food}>{food}</li>)} 
        </ul>
 
);
};