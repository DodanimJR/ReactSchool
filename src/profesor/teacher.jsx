import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';





const Teacher = ()=>{
    const [data, setData] = useState(null);
    let {idProfesor} = useParams();
    
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
            fetchData(`https://schoolapijunior.herokuapp.com/profesor/${idProfesor}`, setData);
            
        }else{
          console.log("data changed:",data);
        }
        
    },[data]);
    return(
        <div>

            <h1>Teacher</h1>
            {data!==null && <div>
              <h2>{data.nombre} {data.apellido}</h2>
              

            </div> }
        
        </div>
    );
}
export default Teacher;