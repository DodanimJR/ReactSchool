

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  typography:{
    fontFamily: [
      'Jua',
      'sans-serif',
    ].join(','),
  },
});



const StudentList = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    console.log("Lista de estudiantes:", props.list);
    // for(const estudiante of props.list){
    //     console.log("estudiante:", estudiante.nombre);
    // }
    return(
        props.list && props.list.map((el, i) => 
            <ThemeProvider theme={theme}>
                <Card key={i}  style={{margin: 8}}  className="Dodi" raised>
                <CardContent>
                <Typography variant='h2' sx={{ fontSize: 25,fontWeight: 1000 }} color="text.secondary" gutterBottom>
                    {el.nombre}
                </Typography>
                <Typography variant='h5' sx={{ mb: 1.5 }} color="text.secondary">
                    {el.facultad.nombre}
                </Typography>
                </CardContent>
            </Card>
            </ThemeProvider>
      )
      );
}

export default StudentList;