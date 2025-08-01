# MernStack-dot_batch-
This is my react projects.
author - Patra

function App() {

  // const [text, setText] = useState('');
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

  //   useEffect(() => {
  //   console.log("Listener add.");
  // Add event listener here

  //   return () => {
  //     console.log("Listener delete.");
  // Clean up event listener here
  //   };
  // }, [text]); //dependency list.


  //   function changeHandler(event) {
  //     console.log(text);
  //     setText(event.target.value);
  //   }


  // return (
  //   <div className="App">
  //     <input type='text' onChange={changeHandler}></input>
  //   </div>
  // );



  // ! home work

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


<div className="App">
      <h1>Current Window Width: {windowWidth}px</h1>

      {windowWidth < 600 ? (
        <p>📱 You're in mobile view</p>
      ) : (
        <p>🖥️ You're in desktop view</p>
      )}
    </div>