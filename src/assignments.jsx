import axios from 'axios';



const Assignments = ()=>{
    const fecthData = async ()=>{
        const miData= await axios.get('https://schoolapijunior.herokuapp.com/materia');
        if (miData.status === 200) {
        console.log(miData.data);
        
        }
    }
    fecthData();
    return(
        <div>

            <h1>Assignment</h1>
        
        </div>
    );
}
export default Assignments;