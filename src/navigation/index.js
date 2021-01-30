import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core'
import logo from '../imageFiles/Elements/AH_LOGO-03.svg';

export default function Navigation(){
  return (
    <div className="navigation">
      <Grid container >
        <Grid item md={4} >
          <img src={logo} alt="shabe" width={300} />
        </Grid>
        <Grid item md={8} >
          <List className="list-item">
            <ListItem>HOME</ListItem>
            <ListItem>ABOUT US</ListItem>
            <ListItem>RECIPES</ListItem>
            <ListItem>PRODUCTS</ListItem>
            <ListItem>CONTACT</ListItem>
          </List>
        </Grid>
      </Grid>
    </div>

  )
}
