import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AssignmentList from './assignmentList';



const Assignments = ()=>{
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
            fetchData('https://schoolapijunior.herokuapp.com/materia', setData);
            console.log("data:",data);
        }
        console.log("data:",data);
    },[data]);
    return(
        <div>

            <h1>assignments</h1>
            {data!==null && <AssignmentList list={data}/>}
        
        </div>
    );
}
export default Assignments;