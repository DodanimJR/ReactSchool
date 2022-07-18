import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';




const Materia = ()=>{
    const [data, setData] = useState(null);
    let {idMateria} = useParams();
    
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
            fetchData(`https://schoolapijunior.herokuapp.com/materia/${idMateria}`, setData);
            console.log("data:",data);
        }
        console.log("data:",data);
    },[data]);
    return(
        <div>

            <h1>Materia</h1>
            {data!==null && <div>
              <h2>{data.nombre}</h2>

            </div> }
        
        </div>
    );
}
export default Materia;