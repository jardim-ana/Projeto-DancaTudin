var medidaModel = require("../models/medidaModel");

function listarAulasPorAluno(req, res) {
    var idAluno = req.params.idAluno;

    medidaModel.listarAulasPorAluno(idAluno)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma aula encontrada.");
            }
        })
        .catch(erro => {
            console.log("Erro ao listar aulas:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarAulasPorEscola(req, res) {
    var idEscola = req.params.idEscola;

    medidaModel.listarAulasPorEscola(idEscola)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma aula encontrada.");
            }
        })
        .catch(erro => {
            console.log("Erro ao listar aulas:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarAulasPorAluno,
    listarAulasPorEscola
};