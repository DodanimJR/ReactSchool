import axios from 'axios';
import TeacherList from './teacherList';
import React, { useState, useEffect } from 'react';

const Teachers = ()=>{
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
            fetchData('https://schoolapijunior.herokuapp.com/profesor', setData);
            console.log("data:",data);
        }
        console.log("data:",data);
    },[data]);
    return(
        <div>

            <h1>Profesores</h1>
            {data!==null && <TeacherList list={data}/>}
        </div>
    );
}
export default Teachers;