const express = require('express');
const router = express.Router();
const quizModel = require('../models/quizModel');

router.post('/salvar', (req, res) => {
    const { estilo, nivel } = req.body;

    if (!estilo || !nivel) {
        return res.status(400).json({ error: 'Estilo e Nível são obrigatórios.' });
    }

    quizModel.salvarPreferencias(estilo, nivel)
        .then(() => {
            res.status(200).json({ message: 'Preferências salvas com sucesso!' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erro ao salvar preferências.' });
        });
});

module.exports = router;




