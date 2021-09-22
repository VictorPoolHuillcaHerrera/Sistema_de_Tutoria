import {Container, FormControl,InputLabel,Input,Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const themes = createTheme({
  typography: {
    fontFamily: 'Georama', 
  },
});

const useStyles = makeStyles((theme) => ({  
  table: {
    minWidth: 700,
  },
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  name:{
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },
  as:
  {
    position: 'relative',
    margin: '#fff',
  },
  mainGrid: {
    flex : 1,
  },
  main:{
    margin: '15% 0',
  },
  containers:{
    backgroundColor: '#fff',
    marginTop: '40px',
  },
  titulo:{
    backgroundColor: '#99CCFF',
    paddingBottom: theme.spacing(10),
    paddingTop: theme.spacing(4),
    justifyContent: 'center',
    textAlign:'center',
  },
  containerdatos:{
    display: "flex",
    backgroundColor: 'rgba(255,255,255,0.4)',
    justifyContent: "center",
    borderRadius: "2%",
  },
  imagen:{
    margin: theme.spacing(3),
    marginTop: theme.spacing(5),
    height:'200px',
  },
  Button:{
    margin: theme.spacing(2),
    width: '340px',
    height:'50px',
  },
  on:
  {
   //backgroundImage: 'url(https://reporteobligado.com/fot/fotos-de-la-unsaac-11.jpeg)',
   backgroundImage: 'url(https://4.bp.blogspot.com/-iAw9ww1NFck/WVn2vgjiPBI/AAAAAAAAO9A/IEqGcdUWJ8gf8JInNExDCAD87jH3p7oHwCLcBGAs/w1200-h630-p-k-no-nu/019357-resultados-unsaac-primera-opcion-2012-13-noviembre-universidad-nacional-san.jpg)',
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
   justifyContent: "center",
   display: "flex",
   height:'100%',
   width: '100%',
   position: 'absolute',
  },
  overlay:
  {
    backgroundColor: 'rgba(0,0,0,0.4)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: "center",
    display: "flex",
    height:'100%',
    width: '100%',
    position: 'absolute',
  }
}));

const HomeMenu = () => {
  const classes = useStyles();
  
  return(
    <div className={classes.on} >
    <div className={classes.overlay}>
    <Container maxWidth="lg"  className={classes.main}>
        <Grid container spacing={1} className={classes.containerdatos}>
        <ThemeProvider theme={themes}>
            <Grid item xs={4}  align="center">
            <img className={classes.imagen}  src="https://i.pinimg.com/originals/a2/f1/93/a2f193a8cdcb070052fc9780443d8384.png" />
            <Button color="primary" variant="contained" className={classes.Button} href='../loginDocente'> Ingreso como docente</Button>
            </Grid>
            <Grid item xs={4}  align="center">
             <img className={classes.imagen} src="https://w7.pngwing.com/pngs/446/984/png-transparent-computer-icons-student-school-pupil-girl-students-hat-head-cartoon.png" />

            <Button  color="primary" variant="contained" className={classes.Button} href='../loginAlumno' > Ingreso como alumno</Button>
            </Grid>
            <Grid item xs={4}  align="center">
             <img className={classes.imagen} src="https://w7.pngwing.com/pngs/37/134/png-transparent-computer-icons-student-tutor-mentorship-student-text-people-logo.png" />
            <Button color="primary" variant="contained"  className={classes.Button} href='../login' > Ingreso como coordinador</Button>
            </Grid>
        </ThemeProvider>
        </Grid>
    </Container>
    </div>
    </div>
   )
};

export default HomeMenu;
