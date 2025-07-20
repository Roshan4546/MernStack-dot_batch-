
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState('');
  // const [name, setName] = useState('love');

  // variation-1 -> redering every time

  // useEffect(() => {
  //   console.log("ui render is done.");
  // })
  

  // variation 2 -> first render
  // ! due to react have strictmode so that when rendering it print two times.
  // ? to overcome delete strictmode tag.
  // useEffect(() => {
  //   console.log("ui rendering is done");
  // }, []);


  // variation-3 -> on first render + whenever depended.

  // useEffect(() => {
  //   console.log("change observed");
  // }, [name]);

  // variation-4 ->to handle unamounting of a component

  useEffect(() => {
  console.log("Listener add.");
  // Add event listener here

  return () => {
    console.log("Listener delete.");
    // Clean up event listener here
  };
}, [text]); //dependency list.


  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }
  

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
