import * as React from 'react';
import Button from '@mui/material/Button';
import style from './button.module.css'
export default function ButtonPage({children,disable,click}){
  return (
   
    // o hadlebutton ta como true sem ta clicado fazendo que ele fique desable
    //quando clicado fica false  

    <Button variant="contained"  onClick={click} disabled={disable} className={style.button} >
        {children}
    </Button>
  );
}