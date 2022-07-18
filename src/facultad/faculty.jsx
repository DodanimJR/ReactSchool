import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';

import StudentListForFaculty from '../estudiante/studentListForFaculty';



const Faculty = ()=>{
    const [data, setData] = useState(null);
    let {idFacultad} = useParams();
    console.log("Entramos a FACULTAD INDIV");
    console.log("idFacultad:",idFacultad);
    
    useEffect(()=>{
        const fetchData = async (url, hook) => {
            try{
              const result = await axios.get(url);
              hook(result.data["response"]);
            } catch (err){
              console.error(err);
            }
          }
        if(!data){
            fetchData(`https://schoolapijunior.herokuapp.com/facultad/${idFacultad}`, setData);
            //console.log("data:",data);
        }else{
          console.log("data:",data);
        }

    },[data]);
    return(
        <div>
            <h1>Faculty</h1>
            {data!==null &&<div>
              <h1>{data.abreviacion}</h1>
              <h2>{data.nombre}</h2>
              <h3>Decano: {data.nombre_decano}</h3>
              <div className='alumnosymaterias'>
                <div>
                  <h4>Alumnos:</h4>
                  <StudentListForFaculty list={data["estudiantes"]}/>
                </div>
                <div>
                  <h4>Materias:</h4>
                </div>
              </div>
            </div>}
        
        </div>
    );
}
export default Faculty;