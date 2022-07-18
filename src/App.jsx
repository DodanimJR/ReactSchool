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
import Header from './header';

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/faculties' element={<Faculties/>}></Route>
          <Route exact path='/faculties/:idFacultad' element={<Faculty/>} />
          <Route exact path='/students' element={<Students/>}></Route>
          <Route exact path='students/:idEstudiante' element={<Student/>} />
          <Route exact path='/assignments' element={<Assignments/>}></Route>
          <Route exact path='/assignments/:idMateria' element={<Assignment/>} />
          <Route exact path='/teachers' element={<Teachers/>}></Route>
          <Route exact path='/teachers/:idProfesor' element={<Teacher/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
