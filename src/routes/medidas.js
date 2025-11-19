var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/aulas/aluno/:idAluno", function (req, res) {
    medidaController.listarAulasPorAluno(req, res);
});


router.get("/aulas/escola/:idEscola", function (req, res) {
    medidaController.listarAulasPorEscola(req, res);
});

module.exports = router;