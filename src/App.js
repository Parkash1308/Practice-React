
import './App.css';
import Apple from './componants/props/Apple';
import Bag from './componants/props/Bag';
import Person  from "./componants/props/passingObject";
import Pears from './componants/props/pears';

// import Fruits from './componants/props/PassingArray';

function App() {
 
  const PersonDetails={
    name:"Parkash",
    age: 21,
    address:"sukkur",
    education: "under-graduate"
  }// Object

  // const fruits = ['A', 'B', 'C', 'D'];

  
  return (
    <div className="App" >
    <Person {...PersonDetails}/>
    {/* <Fruits props={fruits}/> */}

    <Bag children={<Apple color="yellow" number ={10}/>}/>
    <Bag children= {<Pears friend="Parkash"/>}/>
 
    </div>
  );
}

export default App;
