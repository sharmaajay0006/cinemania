import { useEffect, useState } from 'react'
import './App.css'

import { fetchDataFromApi } from "./utils/Api"

function App() {
  useEffect(() => apiTesting(), []);


  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((response) => {
      console.log(response);
    })
  };

  return <div className='App'>Appfyfegfyegfhj</div>

}

export default App
