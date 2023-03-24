import logo from './logo.svg';
import './App.css';
import  { Header } from './components/Header';
import Trending from './components/Trending';
import { Main } from './components/Main';
import { useEffect } from 'react';
import { MediumContextProvider } from './components/context/MediumContext';

function App() {

  const changeBack = ()=>{
    console.log(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener("scroll", changeBack)
  })

  return (
    <>
      <MediumContextProvider>
        <Header />
      </MediumContextProvider>
      {/* <Main /> */}
    </>
  );
}

export default App;
