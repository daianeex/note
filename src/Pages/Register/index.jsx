import React from "react";
import Input from "../../components/input";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
    <>
       <h1>Crie sua conta</h1>
        <Input type="text" placeholder="Nome completo" name="name" max="225"/> <br />
        <Input id="email" name="email" required="required" type="email" placeholder="E-mail"/> <br />
        <Input id="password" name="password" required="required" type="password" placeholder="Senha"/>
        <p>Esqueceu sua senha?</p>
        <p>Não tem conta? Criar</p>

    </>
    )
    }