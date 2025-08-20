import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
import "./App.css"

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-12 bg-gradient-dots relative py-20">
      
      {/* Header */}
      <h1 className="w-[90%] md:w-[70%] bg-white text-blue-600 font-bold text-3xl rounded-lg shadow-lg py-4 text-center">
        Random GIFs
      </h1>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full px-6">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
