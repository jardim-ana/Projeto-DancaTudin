var medidaModel = require("../models/medidaModel");

function listarAulasPorAluno(req, res) {
    var idAluno = req.params.idAluno;
    medidaModel.listarAulasPorAluno(idAluno)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));
}

function listarAulasPorEscola(req, res) {
    var idEscola = req.params.idEscola;
    medidaModel.listarAulasPorEscola(idEscola)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));
}

function buscarKPIs(req, res) {
    var idAluno = req.params.idAluno;
    medidaModel.buscarKPIs(idAluno)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));
}

function distribuicaoZonas(req, res) {
    var idAluno = req.params.idAluno;
    medidaModel.distribuicaoZonas(idAluno)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));
}

function distribuicaoNiveis(req, res) {
    medidaModel.distribuicaoNiveis()
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));




}

function listarAulasPorNivel(req, res) {
    const idAluno = req.params.idAluno;

    if (!idAluno) {
        return res.status(400).json({ erro: "ID do aluno não informado" });
    }

    medidaModel.listarAulasPorNivel(idAluno)
        .then(dados => {
            res.json(dados || []); // sempre retorna um array
        })
        .catch(erro => {
            console.error("Erro ao listar aulas por nível:", erro);
            res.status(500).json({ erro: "Erro ao listar aulas por nível" });
        });
}


module.exports = {
    listarAulasPorAluno,
    listarAulasPorEscola,
    listarAulasPorNivel,
    buscarKPIs,
    distribuicaoZonas,
    distribuicaoNiveis
};