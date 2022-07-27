import React from 'react';
import { Container, AppBar, Grid, Grow, Typography } from '@mui/material'
import memories from "./images/memories.png"
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import makeStyles  from "./style.js"

function App() {
  const classes = makeStyles();
  return (
    <Container maxWidth={"lg"}>
      <AppBar position={"static"} color={"inherit"} className={classes.appBar} style={{flexDirection:"row"}}>
          <Typography variant={"h2"} align={"center"} className={classes.heading}>
              Memories
          </Typography>
          <img src={memories} alt={"memories"} height={60} width={60} className={classes.image}/>
      </AppBar>
      <Grow in>
        <Container>
            <Grid container justifyContent={"space-between"} alignItems={"stretch"} spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form/>
                </Grid>
            </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
