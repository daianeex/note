/*import { useNavigate } from "react-router";
import Button from "../../components/button";
import { userLogin } from "../../lib/auth";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    function Logar() {
        const navigate = useNavigate()
        const login = async (e) => {
            e.preventDefault();
            userLogin()
                .then((data) => {
                    navigate("/login");
                })
                .catch((error) => {
                    return (error)
                })
        }
    }
    return (
        <>
            <h1>Bem-vindo ao Notes!</h1>
            <main className="mainLogin">
                <p>Ajudaremos você a criar novos hábitos,
                    fazer anotações e transformar sua vida</p>

                <Button className="btnHome" onClick={Logar}>Entrar</Button>
            </main>
        </>            
    )
}*/