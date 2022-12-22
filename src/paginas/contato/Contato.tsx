import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Contato.css"

function Contato(){

    return( 
        
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={2} className='imagem4'>
        </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={12}>
                <Box padding={20}>
                    <form className="border45">
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Fale conosco!</Typography>
                        <TextField label='E-mail' variant='outlined' name='Email' margin='normal' fullWidth />
                        <TextField label='Telefone' variant='outlined' name='telefone' margin='normal' fullWidth />
                        <TextField label='Assunto' variant='outlined' name='assunto' margin='normal' fullWidth />
                        <TextField label='Mensagem' variant='outlined' name='mensagem' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Enviar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
        </>
          

    );
}

export default Contato;