// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode]=useState('light')
  return (
    <>
    <Navbar mode={mode} />
    <TextForm heading='Text Form'/>

    </>
  );
}

export default App;
