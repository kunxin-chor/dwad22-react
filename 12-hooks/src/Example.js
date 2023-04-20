import {useState} from 'react'

function Example() {
 // by right, previously, function-based components cannot have state
 // but with hooks we can achieve that
 // we can use the `useState` hook to create a state variable
 // `useState` returns an array with two elements
 // element 0 -- is a variable that represent the state
 // element 1 -- is a function that can be used to change the state variable
 const [name, setName] = useState("Jon Snow");
 const [age, setAge] = useState(1);
 
 return (<div>
    <p>Hello {name}, you are {age} years old</p>
    <button onClick={()=>{
      // the setName allows us to modify the value in the state
      setName("Snoopy");
      setAge(7);
    }}>Change Name</button>
    </div>)

}

export default Example;