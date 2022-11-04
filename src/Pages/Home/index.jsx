import { Link } from "react-router-dom";
//import Logo from "../Home";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <>
            <h1>Bem-vindo ao Notes!</h1>
            <main className="mainLogin">
                <p>Ajudaremos você a criar novos hábitos,
                    fazer anotações e transformar sua vida</p>
                    <Link to="/login">Entrar</Link>
                
                
            </main>
        </>            
    )
}