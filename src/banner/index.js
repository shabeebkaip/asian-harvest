import React from 'react';
import { Grid } from '@material-ui/core';
import leafs from  '../imageFiles/Elements/BANNER_DESIGN/AH_BANNER_LEAVES.png';
import gradient from '../imageFiles/Elements/BANNER_DESIGN/AH_BANNER_GRADIENT_CIRCLE.png';
export default function Banner(){
  return (
    <Grid container>
      <Grid item md={6}>
        <h1 style={{fontSize:'100px'}} >
        REAL CASHEWS
        <span style={{fontWeight:'900'}} >
          &nbsp; ARE NOT MADE.
        </span>
        </h1>
      </Grid>
      <Grid item md={6} style={{position:'relative'}}>
      <img src={gradient} alt="gradient"  style={{position:'relative', width:'1240px', right:'26vw',top:'-50vh' }} />
      <img src={leafs} alt="gradient"  style={{position:'relative', width:'1240px', position:'absolute', top:'1px' }} />


      </Grid>
    </Grid>
  )
}
