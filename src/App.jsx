import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import { fetchDataFromApi } from "./utils/Api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import Header from './Components/Header/Header';
import Footer from './Components/footer/Footer';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import SearchResult from './pages/search result page/SearchResult';


function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  useEffect(() => fetchApiConfig(), []);


  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    })
  };

  return (<BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:mediaType/:id' element={<Details />} />
      <Route path='/search/:query' element={<SearchResult />} />
      <Route path='/explore/:mediaType' element={<Explore />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />

  </BrowserRouter>)

}

export default App
