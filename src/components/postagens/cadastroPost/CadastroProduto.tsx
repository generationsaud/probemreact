import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, IconButton } from "@material-ui/core"
import './CadastroProduto.css';
import {Link, useNavigate, useParams } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../service/service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { PhotoCamera } from '@material-ui/icons';


function CadastroProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            nome: ''
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        email: '',
        contato: '',
        foto: '',
        categoria: null
    })

    useEffect(() => { 
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            });
        } else {
            post(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            });
        }
        back()
     

    }
    function back() {
        navigate('/doacao')
    }

    
   
    

    
    
        

    return (
    
        <Container maxWidth="xs" className="topo card-color tamanhodocard">
            <Typography className='cadastro' variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar doação</Typography>
            <form onSubmit={onSubmit}>
                
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth  className='margin-input'/>
                <TextField value={produto.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="email" label="E-mail" variant="outlined" name="email" margin="normal" fullWidth className='margin-input'/>
                <TextField value={produto.contato} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="contato" label="Localização" variant="outlined" name="contato" margin="normal" fullWidth className='margin-input'/>
                <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="Foto" name="foto" variant="outlined" margin="normal" fullWidth className='margin-input'/>
                

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.nome}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para a doação</FormHelperText>
                    
                    <Button type="submit" variant="contained" className='btn-cadastro'>
                        Finalizar
                    </Button>
                    
                    
                </FormControl>
            </form>
        </Container>
 
    )
}
export default CadastroProduto;