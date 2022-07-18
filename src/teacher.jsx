import axios from 'axios';



const Teacher = ()=>{
    const fecthData = async ()=>{
        const miData= await axios.get('https://schoolapijunior.herokuapp.com/profesor');
        if (miData.status === 200) {
        console.log(miData.data);
        
        }
    }
    fecthData();
    return(
        <div>

            <h1>Teacher</h1>
        
        </div>
    );
}
export default Teacher;