import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';




const Student = ()=>{
    const [data, setData] = useState(null);
    const [carrera,setCarrera] = useState(null);
    let {idEstudiante} = useParams();
    
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
            fetchData(`https://schoolapijunior.herokuapp.com/estudiante/${idEstudiante}`, setData);
            console.log("data:",data);
        }else{
          console.log("data:",data);
          fetchData(`https://schoolapijunior.herokuapp.com/facultad/${data.facultadId}`, setCarrera);
        }
        
    },[data]);

    useEffect(()=>{
      console.log("carrera:",carrera);
      
    },[carrera]);
    return(
        <div>

            <h1>Student</h1>
            {data!==null && <div>
              <h2>{data.nombre}</h2>
              
            </div> }
        
        </div>
    );
}
export default Student;