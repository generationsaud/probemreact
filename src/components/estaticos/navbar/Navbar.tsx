import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './Navbar.css'

function Navbar(){

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


    return (
        <>
            {/* <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=10, minimum-scale=1.0"></meta> */}
            <nav className="navbar">

                <div>
                    <a href="/home"><img className="tm padding" src="logoprobem.png" alt="logo" /></a>
                </div>
                <div className="center menu-section on">
                    <Link to='/navmob'>
                        <div className="menu-toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </Link>
                    <div className="btn">
                        <Link to="/home"><button className="btn btn-design">Home</button></Link>
                    </div>
                    <div className="btn">
                        <Link to="/sobre"><button className="btn btn-design">Sobre</button></Link>
                    </div>
                    <div className="btn">
                        <Link to="/doacoes"><button className="btn btn-design">Doações</button></Link>
                    </div>
                    <div className="btn">
                        <Link to="/contato"><button className=" btn btn-design">Contato</button></Link>
                    </div>
                    <div className="btn">
                        <Link to="/login"><button className="btn btn-design">Login</button></Link>
                    </div>
                    <div className="btn" onClick={goLogout}>
                        <Link to="/"><button className=" btn btn-design">Logout</button></Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;