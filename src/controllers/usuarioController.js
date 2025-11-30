var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email) return res.status(400).send("Seu email está undefined!");
    if (!senha) return res.status(400).send("Sua senha está undefined!");

    usuarioModel.autenticar(email, senha)
        .then(resultado => {
            if (resultado.length === 1) {
                res.json({
                    id: resultado[0].idalunos,
                    email: resultado[0].email,
                    nome: resultado[0].nome,
                    senha: resultado[0].senha,
                    quiz: resultado[0].quiz
                });
            } else if (resultado.length === 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var { nomeServer, emailServer, senhaServer, estiloServer, nivelServer } = req.body;

    if (!nomeServer || !emailServer || !senhaServer || !estiloServer || !nivelServer)
        return res.status(400).send("Campos obrigatórios não preenchidos!");

    usuarioModel.cadastrar(nomeServer, emailServer, senhaServer, estiloServer, nivelServer)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function marcarQuizFeito(req, res) {
    var idAluno = req.params.idAluno;
    if (!idAluno) return res.status(400).send("ID do aluno não informado");

    usuarioModel.marcarQuizFeito(idAluno)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar,
    marcarQuizFeito
};
