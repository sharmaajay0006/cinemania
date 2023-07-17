import { useEffect, useState } from 'react'
import './App.css'

import { fetchDataFromApi } from "./utils/Api"
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  useEffect(() => apiTesting(), []);


  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((response) => {
      console.log(response);
      dispatch(getApiConfiguration(response));
    })
  };

  return <div className='App'>App
    {url?.total_pages}
  </div>

}

export default App
