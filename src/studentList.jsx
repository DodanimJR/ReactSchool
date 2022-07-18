
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



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
            <Card key={i} style={{margin: 8}}  className="Dodi" raised>
                <CardContent>
                <Typography variant='h4' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {el.nombre}
                </Typography>
                <Typography variant='h5' sx={{ mb: 1.5 }} color="text.secondary">
                    {el.facultad.nombre}
                </Typography>
                </CardContent>
                <CardActions>           
                <ExpandMoreIcon 
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                ></ExpandMoreIcon> 
                

                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>{el.facultad.abreviacion}-{el.facultad.nombre}</Typography>
                    </CardContent>
                </Collapse>
                
                    
                

            </Card>      
      )
      );
}

export default StudentList;