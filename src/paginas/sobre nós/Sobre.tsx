import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./Sobre.css"


function Sobre(){
    return(
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <div className="h1">
                    <h1>O ProBem</h1>
                    </div>
                    <p className="p">Enxergando a dificuldade ao acesso à itens hospitalares duráveis, criamos o ProBem; uma plataforma capaz viabilizar democraticamente esses itens, através do que consideramos algo muito importante: o afeto de pessoas!</p>
                </Grid>
                <Grid item xs={6} >
                    <img className="img1" src="https://s3-alpha-sig.figma.com/img/d4db/14e8/b7df6bde4bd1dda51d3efff430cf4f4f?Expires=1672012800&Signature=fp6ScgBoUwKr-7h8RRdOHeQIlqNlzrKVz8bZD22CEVMQGRJoS~JktnVl0l-CtiOLwajWLRIVP1vnIW4nXxfABagDfVqLIOaZC9Q-DnrOscVjc-0QyqaKVvW2mwslDAqbfeOY6STRufCPOiM0k1w8SE94iUOJe55CrJZY1RcsrRADbuDrPXbk38Nbd1Wd0cqcvRaA7HH7Cyxf~9GxWQ0mL5mCKOERHXglFA2902dprBiifwWYr9Q-I-~joR4ux-YrAmPCM32uUGAwUTxNnESrMrb9fgJG36XW~rzxXN2LnfoyPQ2vqPu0xR3JhmarAHpjU7bPV~PmbvoaCWBe1IyWSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" width="1000px" />
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;