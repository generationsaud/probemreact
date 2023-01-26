import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './NavMob.css';

function NavMob() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
            progress: undefined,
        });
        navigate('/login')
    }

    return(
        <ul>
             <p className="center"><Link to="/home" className="none">Home</Link></p>  
             <p className="center"><Link to="/sobre" className="none">Sobre nós</Link></p>
             <p className="center"><Link to="/doacoes" className="none">Doações</Link></p>
             <p className="center"><Link to="/contato" className="none">Contato</Link></p>
             <p className="center"><Link to="/login" className="none">Login</Link></p>
             <p onClick={goLogout} className="center"><Link to="/login" className="none">Logout</Link></p>
        </ul>
        );
}

export default NavMob;
