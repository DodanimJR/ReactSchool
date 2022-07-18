import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Faculties from './faculties';
import Faculty from './faculty';
import Students from './students';
import Student from './student';
import Assignments from './assignments'; 
import Assignment from './assignment';
import Teachers from './teachers';
import Teacher from './teacher';

import Home from './home';

import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";



function App() {

  return (
    <div>
      {/* <nav>  
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faculty">Faculty</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/assignment">Assignment</Link>
          </li>
          <li>
            <Link to="/teacher">Teacher</Link>
          </li>
        </ul>
      </nav> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/pinga/hpta' element={<Home />}></Route>
          <Route exact path='/faculty' element={<Faculties/>}></Route>
          <Route exact path='/faculty/:idFacultad' element={<Faculty/>} />
          <Route exact path='/student' element={<Students/>}>
            <Route exact path=':idEstudiante' element={<Student/>} />
          </Route>
          <Route exact path='/assignment' element={<Assignments/>}>
            <Route exact path=':idMateria' element={<Assignment/>} />
          </Route>
          <Route exact path='/teacher' element={<Teachers/>}>
            <Route exact path=':idProfesor' element={<Teacher/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
