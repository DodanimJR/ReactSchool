import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Faculty from './faculty';
import Student from './student';
import Assignment from './assignment'; 
import Teacher from './teacher';
import Home from './home';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {

  return (
    <Router>
    <div>
      <nav>
        
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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='faculty' element={<Faculty/>}></Route>
        <Route path='student' element={<Student/>}></Route>
        <Route path='assignment' element={<Assignment/>}></Route>
        <Route path='teacher' element={<Teacher/>}></Route>

      </Routes>
    </div>
  </Router>
  );
}

export default App;
