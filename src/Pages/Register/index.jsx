import React from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { createUser } from "../../lib/auth";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const actionRegister = async (e) => {
        e.preventDefault();
        createUser()
        .then(() => {
            alert("Registrou");
        })
        .catch((error) => {
            alert("Error");
        })
    }

    return (
    <>
       <h1>Crie sua conta</h1>
        <Input type="text" placeholder="Nome completo" name="name" max="225"/> <br />
        <Input id="email" name="email" required="required" type="email" placeholder="E-mail"/> <br />
        <Input id="password" name="password" required="required" type="password" placeholder="Senha"/>
        <Button onClick={actionRegister}>Register</Button>
        <p>Esqueceu sua senha?</p>
        <p>Não tem conta? Criar</p>

    </>
    )
    }