import MyComponent from "./components/myComponent";
import Title from "./components/title";
import Wrapper from "./components/wrapper";

const App = ({title}) => {
return (
//<MyComponent /> 
//<Title title="Test" /> 
<Wrapper><Title title="Test" /></Wrapper>
);
};

export default App;


