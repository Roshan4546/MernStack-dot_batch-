import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from "./data";
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => { // ! Api fetching 
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data); // Set the state
        console.log(data);
      } catch (error) {
        toast.error("Something went wrong.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
