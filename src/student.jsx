import axios from 'axios';

const Student = ()=>{
    const fecthData = async ()=>{
        const miData= await axios.get('https://schoolapijunior.herokuapp.com/estudiante');
        if (miData.status === 200) {
        console.log(miData.data);
        
        }
    }
    fecthData();
    return(
        <div>
            <h1>Student</h1>
            
        </div>
    );
}
export default Student;