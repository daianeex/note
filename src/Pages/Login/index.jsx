import { async } from "@firebase/util";
import React from "react";
import Auth from "../../lib/auth";
import Button from "../../components/button";
import { googleLogar } from "../../lib/auth"
// eslint-disable-next-line import/no-anonymous-default-export
export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Auth.googleLogar();

        if(result){
            alert("Entrou");
        }else{
            alert("Error");
        }
    }
    return (
    <>
        <h1>Entrar na sua conta</h1>
        <input id="email" name="email" required="required" type="email" placeholder="E-mail"/> 
        <input id="password" name="password" required="required" type="password" placeholder="Senha"/>
        <p>Não tem conta? Criar</p>
        <Button onClick={googleLogar}>Logar</Button>
    </>
    )
    }