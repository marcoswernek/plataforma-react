import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useNavigate, useParams } from "react-router-dom";

export function EditaUsuario() {

    // useParams é uma função que retorna um objeto.
    // Este objeto contêm os parametros passados pela rota
    let params = useParams();
    let id = params.id;

    let usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // retorna valor booleano que satisfaza a pesquisa
    });

    //useNavigate é uma funçao q retorna uma funçao
    //A funçao de retorno tem capacidade de navegar entre as rotas da aplicaçao
    let navigate = useNavigate();

    function editar() {
    //captura as informaçao do formulario
    //validar os dados de entrada
    //modificar as info no banco de dados     
        navigate("/usuarios")
    }

    return (
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button onClick={editar} variant="dark">Editar</Button>
        </div>
    )
}