var database = require("../database/config");

function autenticar(email, senha) {
    var instrucao = `SELECT * FROM alunos WHERE email = '${email}' AND senha = '${senha}';`;
    return database.executar(instrucao);
}


function cadastrar(nome, email, senha, estilo, nivel) {
    var instrucao = `
        INSERT INTO alunos (nome, email, senha, estilo, nivel) 
        VALUES ('${nome}', '${email}', '${senha}', '${estilo}', '${nivel}');
    `;
    return database.executar(instrucao);
}

function marcarQuizFeito(idAluno) {
    var instrucaoSql = `UPDATE alunos SET quiz = 'sim' WHERE idalunos = ${idAluno};`;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    marcarQuizFeito
};
