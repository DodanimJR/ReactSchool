import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FacultyList from './facultyList';



const Faculties = ()=>{
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        const fetchData = async (url, hook) => {
            try{
              const result = await axios.get(url);
              hook(result.data);
            } catch (err){
              console.error(err);
            }
          }
        if(!data){
            fetchData('https://schoolapijunior.herokuapp.com/facultad', setData);
            console.log("data:",data);
        }
        console.log("data:",data);
    },[data]);
    return(
        <div>

            <h1>Faculties</h1>
            {data!==null && <FacultyList list={data}/>}
        
        </div>
    );
}
export default Faculties;