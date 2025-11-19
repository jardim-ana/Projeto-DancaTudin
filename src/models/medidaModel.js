var database = require("../database/config");

function listarAulasPorAluno(idAluno) {
    var sql = `
        SELECT 
            a.idaula,
            a.data,
            a.diaSemana,
            a.horario,
            e.nome AS escola
        FROM aula a
        JOIN escola e ON a.idescola = e.idescola
        JOIN alunos_has_escola rel ON rel.idescola = e.idescola
        WHERE rel.idalunos = ${idAluno}
        ORDER BY a.data DESC;
    `;

    console.log("Executando SQL: \n" + sql);
    return database.executar(sql);
}

function listarAulasPorEscola(idEscola) {
    var sql = `
        SELECT 
            idaula,
            data,
            diaSemana,
            horario
        FROM aula
        WHERE idescola = ${idEscola}
        ORDER BY data DESC;
    `;

    console.log("Executando SQL: \n" + sql);
    return database.executar(sql);
}

module.exports = {
    listarAulasPorAluno,
    listarAulasPorEscola
};