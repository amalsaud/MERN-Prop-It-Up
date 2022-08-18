import './App.css';

import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className='App'>
    <PersonCard lName={"Doe"} fName={"Jane"} age={45} hairColor={"Black"}/>
    <PersonCard lName={"Smith"} fName={"John"} age={88} hairColor={"Brown"}/>
    <PersonCard lName={"Fillmore"} fName={"Millard"} age={50} hairColor={"Brown"}/>
    <PersonCard lName={"Smith"} fName={"Marie"} age={62} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
