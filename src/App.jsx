import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Faculties from './facultad/faculties';
import Faculty from './facultad/faculty';
import Students from './estudiante/students';
import Student from './estudiante/student';
import Assignments from './materia/assignments'; 
import Assignment from './materia/assignment';
import Teachers from './profesor/teachers';
import Teacher from './profesor/teacher';

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
          <Route exact path='/student' element={<Students/>}></Route>
          <Route exact path='student/:idEstudiante' element={<Student/>} />
          <Route exact path='/assignment' element={<Assignments/>}></Route>
          <Route exact path='/assignment/:idMateria' element={<Assignment/>} />
          <Route exact path='/teacher' element={<Teachers/>}></Route>
          <Route exact path='/teacher/:idProfesor' element={<Teacher/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
