import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify/dist/core";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './Navbar.css'

function Navbar() {
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }


    return (
        <>
            <div className="container border">
                <div className="center">
                    <a href="/home"><img className="tm" src="https://s3-alpha-sig.figma.com/img/744c/c21f/2309757b9f043d9e9fa9745b85809000?Expires=1672012800&Signature=hyVfLG~sC9EskVh80KB7RbxIZXeiYvTrCTmkHjlEmghAkpc4kKwaeLeRyNF5MLDSDUSVdbAeACSZr~Pw6A0StscmTgVsMUwbxUuK6UeoV9yq7VoorchO9ISgnjo8iSyiFmem0jRErN5QrkQNjC2v6KbtFdAhUdbE47esqieSw9z5igDX9ybUHlS3xcb5E4kj0nh0aW~xec6k26GQcIZhMmnF8hVTK0r9vm6yobIJ6XScefa6Fh8zPKQGe-seglBKRawLZuirhGl5kQGc9zO903eWIVJyPgXqV-r0PD4DrchjqutIfC1eiFNbkiNxmhkM2wOcnhXqOq7JQDE2ryGayA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" /></a>
                </div>
                <div className="btn center margin">
                    <Link to="/home"><button className="btn btn-design">Home</button></Link>
                </div>
                <div className="btn center">
                    <Link to="/sobre"><button className="btn btn-design">Sobre</button></Link>
                </div>
                <div className="btn center">
                    <Link to="/doacoes"><button className="btn btn-design">Doações</button></Link>
                </div>
                <div className="btn center">
                    <Link to="/contato"><button className=" btn btn-design">Contato</button></Link>
                </div>
                <div className="btn center">
                    <Link to="/login"><button className="btn btn-design">Login</button></Link>
                </div>
                <div className="btn center margin2" onClick={goLogout}>
                    <Link to="/"><button className=" btn btn-design">Logout</button></Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;