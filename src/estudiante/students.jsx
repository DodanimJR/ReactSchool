import axios from 'axios';
import StudentList from './studentList';
import { useState, useEffect } from 'react';

const Students = ()=>{
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
            fetchData('https://schoolapijunior.herokuapp.com/estudiante', setData);
            console.log("data:",data);
        }
        console.log("data:",data);
    },[data]);
    return(
        <div>

            <h1>Estudiantes</h1>
            {data!==null && <StudentList list={data}/>}
        
        </div>
    );
}
export default Students;