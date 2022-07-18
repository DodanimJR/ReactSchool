import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const TeacherList = (props) => {
    console.log("Lista de Profesores:", props.list);
    return(
        props.list && props.list.map((el, i) => 
    
          
            <Card key={i} style={{margin: 8}}  className="Dodi" raised>
        
                <CardContent>
                <Typography variant='h4' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {el.nombre}
                </Typography>
                <Typography variant='h5' sx={{ mb: 1.5 }} color="text.secondary">
                    {el.apellido}
                </Typography>
                </CardContent>

            </Card>      
      )
      );
    

}

export default TeacherList;