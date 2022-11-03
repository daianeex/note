import { async } from "@firebase/util";
import React from "react";
import Auth from "../../lib/auth";
import Button from "../../components/button";
import { googleLogar, userLogin } from "../../lib/auth"
import Input from "../../components/input";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({onReceiveGoogle}) => {
//const navigate = useNavigate()

    const actionLoginGoogle = async (e) => {
        e.preventDefault();
        googleLogar()
        .then(() => {
            alert("Entrou");
        })
        .catch((error) => {
            alert("Error");
        })
    }

    const actionLogin = async (e) => {
        e.preventDefault();
        userLogin()
        .then(() => {
            alert("Entrou");
        })
        .catch((error) => {
            alert("Error");
        })
    }
    
    return (
        <main className='headerLogin'>
        <h1>Entrar na sua conta</h1>
        <Input id="email" name="email" required="required" type="email" placeholder="E-mail"/> <br />
        <Input id="password" name="password" required="required" type="password" placeholder="Senha"/>
        <Button onClick={actionLogin}>Entrar</Button>
        <p>Esqueceu sua senha?</p>
        <Button onClick={actionLoginGoogle}>Google</Button>
        <p>Não tem conta? <a href="/register" /></p>
        
    </main>
    )
    }