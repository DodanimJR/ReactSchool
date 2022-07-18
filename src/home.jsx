import React,{useState,useEffect} from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import axios from 'axios';

const Home = () => {
    const [students,setStudents] = useState(null);
    const [carreras,setCarreras] = useState([]);
    const [cantStudents,setCantStudents] = useState([]);
    const [dodi,setDodi] = useState([]);
    const pruebaData=[
        {x:1,y:1},
        {x:2,y:2},
        {x:3,y:3},
        {x:4,y:4},
        {x:5,y:5},
        {x:6,y:6},
        {x:7,y:7},
        {x:8,y:8},
        {x:9,y:9},
    ]
    useEffect(()=>{
        const fetchData = async (url, hook) => {
            try{
              const result = await axios.get(url);
              hook(result.data);
            } catch (err){
              console.error(err);
            }
          }
        if(!students){
            fetchData('https://schoolapijunior.herokuapp.com/estudiante', setStudents);
            
        }else{
            console.log("data:",students);
            let studentIngenieria = 0;
            let studentAdministracion = 0;
            let tempArray = [];
            for(const student of students){
                
                
                if(!carreras.includes(student.facultad.nombre)){
                    setCarreras([...carreras,student.facultad.nombre]);
                }
                if(student.facultad.nombre==='Ingenieria'){
                    studentIngenieria+=1;
                }
                if(student.facultad.nombre==='Administracion'){
                    studentAdministracion+=1;
                }
                
                console.log(carreras);

            }
            setDodi([
                {'carrera':'Ingenieria','cantidad':studentIngenieria},
                {'carrera':'Administracion','cantidad':studentAdministracion}
            ]);
            tempArray.push(studentIngenieria);
            tempArray.push(studentAdministracion);
            setCantStudents(tempArray);
            
        }
        
    },[students]);
    return (
        <div className='Main'>
        <div className='title'>
            <h1>Bienvenido</h1>
            <h2>Sistema para conocer datos de tu Universidad</h2>
        </div>
        <div className="body">
            <VictoryChart domainPadding={45}>
                <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={carreras.length}
            tickFormat={carreras!==null && carreras}
            />
            <VictoryAxis
            dependentAxis
            tickValues={cantStudents!==null && cantStudents}
        />
                <VictoryBar data={dodi!==null&&dodi} x='carrera' y='cantidad'/>
            </VictoryChart>
        </div>

        </div>
    );
}
export default Home;