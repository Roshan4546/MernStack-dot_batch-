import { useState } from 'react';
import './App.css'

function App() {

  // const [FirstName, setFirstname] = useState("");
  // const [LastName, setLastname] = useState("");
  // function changFirstHandler(e) {
  //   // console.log("First Name")
  //   // console.log(e.target.value);
  //   setFirstname(e.target.value);
  // }
  // function changLastHandler(e) {
  //   // console.log("last name")
  //   // console.log(e.target.value);
  //   setLastname(e.target.value);
  // }

  const [formdata, setformdata] = useState(
    // to control multiple data we use object type

    { firstname: "", lastname: "", comments: "", checkbox: true, mode: '', favcar: "" }
  );
  // console.log(formdata.firstname);
  console.log(formdata)
  function changeHandler(e) {
    const { name, value, checked, type } = e.target
    setformdata(prevformdata => {
      return {
        ...prevformdata,
        // [e.target.name]: e.target.value // in form we access some property we use [] .
        [e.target.name]: type === "checkbox" ? checked : value
      }
    });
  }

  function submithandler(e) {
    e.preventDefault();
    console.log("Finally printing the entire form data");
    console.log(formdata);
  }
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-900 text-white'>
      <form onSubmit={submithandler} className="flex flex-col gap-6 p-6 bg-gray-800 rounded-lg shadow-lg w-[400px]">

        <div className='flex flex-col gap-2'>
          <label htmlFor="text">Enter your email</label>
          <input
            type="text"
            placeholder="@gmail.com"
            onChange={changeHandler}
            className="bg-yellow-300 text-black px-4 py-2 rounded shadow w-full"
            name='firstname'
            value={formdata.firstname}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="text">Enter your full Name</label>
          <input
            type="text"
            placeholder="Username"
            onChange={changeHandler}
            className="bg-yellow-300 text-black px-4 py-2 rounded shadow w-full"
            name='lastname'
            value={formdata.lastname}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="comments">Comments</label>
          <textarea
            placeholder='Enter your comment'
            name="comments"
            value={formdata.comments}
            id="comments"
            onChange={changeHandler}
            className="bg-yellow-100 text-black p-3 rounded w-full h-24 resize-none"
          ></textarea>
        </div>

        <div className='flex items-center gap-2'>
          <input
            type="checkbox"
            onChange={changeHandler}
            id='checkbox'
            name='checkbox'
            checked={formdata.checkbox}
            className='w-5 h-5'
          />
          <label htmlFor="checkbox">Is visible?</label>
        </div>

        <fieldset className='border border-gray-600 p-4 rounded'>
          <legend className='px-2'>Mode:</legend>
          <div className='flex gap-4 mt-2'>
            <div className='flex items-center gap-1'>
              <input
                type="radio"
                onChange={changeHandler}
                name="mode"
                value="online-mode"
                id="online-mode"
                checked={formdata.mode === "online-mode"}
              />
              <label htmlFor="online-mode">Online Mode</label>
            </div>

            <div className='flex items-center gap-1'>
              <input
                type="radio"
                onChange={changeHandler}
                name="mode"
                value="offline-mode"
                id="offline-mode"
                checked={formdata.mode === "offline-mode"}
              />
              <label htmlFor="offline-mode">Offline Mode</label>
            </div>
          </div>
        </fieldset>

        <div className='flex flex-col gap-2'>
          <label htmlFor="favcar">Tell me your favourite car:</label>
          <select
            name="favcar"
            id="favcar"
            onChange={changeHandler}
            value={formdata.favcar}
            className='bg-yellow-200 text-black px-3 py-2 rounded'
          >
            <option value="scorpio">Scorpio</option>
            <option value="fortuner">Fortuner</option>
            <option value="Thar">Thar</option>
            <option value="defender">Defender</option>
            <option value="lengeder">Legender</option>
          </select>
        </div>

        <input
          type="submit"
          value='Submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded cursor-pointer transition'
        />
      </form>
    </div>
  )
}

export default App
