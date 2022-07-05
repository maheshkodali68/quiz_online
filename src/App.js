import React from 'react';
import Exam from './Exam';
import Start from './Start';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Start/>} />
        <Route path='/Exam' element={<Exam/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
