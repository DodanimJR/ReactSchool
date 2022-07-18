import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const FacultyList = (props) => {
    console.log("Lista de Facultades:", props.list);
    return(
        props.list && props.list.map((el, i) => 
    
          
            <Card key={i} style={{margin: 8}}  className="Dodi" raised>
        
                <CardContent>
                <Typography variant='h4' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {el.abreviacion}
                </Typography>
                <Typography variant='h5' sx={{ mb: 1.5 }} color="text.secondary">
                    {el.nombre}
                </Typography>
                <Typography variant="body2">
                    Decano: {el.nombre_decano}
                </Typography>
                </CardContent>

            </Card>      
      )
      );
    

}

export default FacultyList;