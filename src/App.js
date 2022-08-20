import './App.css';

import PersonCard from "./components/PersonCard"

function App() {
  var personList = [
    { lName: "Doe", fName: "Jane", age: 45, hairColor: "Black" },
    { lName: "Smith", fName: "John", age: 88, hairColor: "Brown" },
    { lName: "Fillmore", fName: "Millard", age: 50, hairColor: "Brown" },
    { lName: "Smith", fName: "Marie", age: 62, hairColor: "Brown" }
  ]
  return (
    <div className='App'>
      {personList.map(person => <PersonCard
        lName={person.lName}
        fName={person.fName}
        age={person.age}
        hairColor={person.hairColor}
      />
      )}
    </div>
  );
}

export default App;
