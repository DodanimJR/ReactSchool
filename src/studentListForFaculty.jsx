import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const StudentListForFaculty = (props) => {

    return(
        props.list && props.list.map((el, i) => 
            <Card key={i} style={{margin: 8}}  className="Dodi" raised>
                <CardContent>
                <Typography variant='h4' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {el.nombre}
                </Typography>
                </CardContent>
            </Card>      
      )
      );
}




export default StudentListForFaculty;