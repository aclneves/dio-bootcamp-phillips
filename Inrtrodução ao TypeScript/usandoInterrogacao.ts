interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redireciona(usuario: IUsuario) {
    if (usuario.cargo) {
        //redireciona(usuario.cargo);
    }

    //redireciona para a area do usuario
}