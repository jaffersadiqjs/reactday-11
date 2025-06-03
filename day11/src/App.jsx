import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task2 from './Components/Task2'
import InputField from './Components/Task3'
import ComponentMounted from './Components/Task4'
import Task7 from '../../day10-task/src/Components/Task7'
import Task5 from './Components/Task5'
import ApiFetch from './Components/Task6'
import DataFetch from './Components/Task7'
import ConditionalFetch from './Components/Task8'
import Timer from './Components/Task9'
import ToggleVisibility from './Components/Task10'
import SearchFilter from './Components/Task11'
import FetchDataOnClick from './Components/Task12'
import LoadingState from './Components/Task13'
import Mini1 from './Components/Mini1'
import ToggleApiData from './Components/Mini3'
import Mini2 from './Components/Mini2'
import RandomQuoteGenerator from './Components/Mini4'

function App() {
 
  return (
    <>
    <Task2/>
    <InputField/>
    <ComponentMounted/>
    <Task5/>
    <ApiFetch/>
    <DataFetch/>
    <ConditionalFetch/>
    <Timer/>
    <ToggleVisibility/>
    <SearchFilter/>
    <FetchDataOnClick/>
    <LoadingState/>
    <Mini1/>
    <Mini2/>
    <ToggleApiData/>
    <RandomQuoteGenerator/>


    </>
  )
}

export default App
