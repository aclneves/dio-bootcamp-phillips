interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'; 
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redireciona para a area de administracao
    }

    // redireciona para a area de usuario
}

