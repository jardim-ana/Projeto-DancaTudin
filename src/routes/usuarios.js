var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/aluno/:idAluno/marcar-quiz", function(req, res){
    usuarioController.marcarQuizFeito(req, res);
});

router.get("/aluno/:idAluno/atualizar-nivel", function(req, res){
    usuarioController.atualizarNivel(req, res);
});

module.exports = router;
