var express = require("express");
var router = express.Router();
var medidaController = require("../controllers/medidaController");

router.get("/aulas/aluno/:idAluno", function (req, res) {
    medidaController.listarAulasPorAluno(req, res);
});

router.get("/aulas/escola/:idEscola", function (req, res) {
    medidaController.listarAulasPorEscola(req, res);
});

router.get("/kpis/:idAluno", function (req, res) {
    medidaController.buscarKPIs(req, res);
});

router.get("/distribuicao-zonas/:idAluno", function (req, res) {
    medidaController.distribuicaoZonas(req, res);
});

router.get("/distribuicao-niveis", function (req, res) {
    medidaController.distribuicaoNiveis(req, res);

});

router.get("/aulas-por-nivel/:idAluno", function(req, res) {
    medidaController.listarAulasPorNivel(req, res);
});

router.get("/aluno/:idAluno/atualizar-nivel", function(req, res) {
    medidaController.atualizarNivelAluno(req, res);
});

module.exports = router;
