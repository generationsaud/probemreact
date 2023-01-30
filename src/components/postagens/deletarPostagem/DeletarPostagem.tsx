import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css'
import {useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../service/service';


function DeletarProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [post, setPosts] = useState<Produto>()

    useEffect(() => {
        if (token == "") {
          toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produto/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/doacoes')
            deleteId(`/produto/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Doação deletada com sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
          }
        
          function nao() {
            navigate('/doacoes')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined"  >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Com esta ação você apagará todos os dados da doação: <b>"{post?.nome}"</b>. Dejesa continuar mesmo assim?
              </Typography>
              <Typography color="textSecondary" >
              
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" ml={1.0} mb={2} className='align-center'>
              
              <Box>
              <Button  onClick={nao} variant="contained" size='large' color="secondary" className='nao'>
                Não
              </Button>
              </Box>
              <Box mx={2} >
              <Button onClick={sim} variant="contained" className="sim" size='large' color="primary" >
                Sim
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProduto;