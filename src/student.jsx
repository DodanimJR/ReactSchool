import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';




const Student = ()=>{
    const [data, setData] = useState(null);
    let {idEstudiante} = useParams();
    
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
            fetchData(`https://schoolapijunior.herokuapp.com/estudiante/${idEstudiante}`, setData);
            console.log("data:",data);
        }
        console.log("data:",data);
    },[data]);
    return(
        <div>

            <h1>Student</h1>
            {data!==null && <div>
              <h1>{data.abreviacion}</h1>
              <h2>{data.nombre}</h2>

            </div> }
        
        </div>
    );
}
export default Student;