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

module.exports = {
    listarAulasPorAluno,
    listarAulasPorEscola,
    buscarKPIs,
    distribuicaoZonas,
    distribuicaoNiveis
};
