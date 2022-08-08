import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
    <>
        <h1>Entrar na sua conta</h1>
        <input id="email" name="email" required="required" type="email" placeholder="E-mail"/> 
        <input id="password" name="password" required="required" type="password" placeholder="Senha"/>
    </>
    )
    }