import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from "./data";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      } catch (error) {
        toast.error("Something went wrong.");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Filter
        filterData={filterData}
        selectedCategory={category}
        setSelectedCategory={setCategory}
      />
      <Cards
        courses={courses}
        selectedCategory={category}
        loading={loading}
      />
    </div>
  );
}

export default App;
