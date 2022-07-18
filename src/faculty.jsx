import axios from 'axios';



const Faculty = ()=>{
    const fecthData = async ()=>{
        const miData= await axios.get('https://schoolapijunior.herokuapp.com/facultad');
        if (miData.status === 200) {
        console.log(miData.data);
        
        }
    }
    fecthData();
    return(
        <div>

            <h1>Faculty</h1>
        
        </div>
    );
}
export default Faculty;