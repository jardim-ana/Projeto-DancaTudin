var database = require("../database/config");

function listarAulasPorAluno(idAluno) {
    var sql = `
        SELECT 
            a.idaula,
            a.diaSemana,
            a.horario,
            e.nome AS escola
        FROM aula a
        JOIN escola e ON a.idescola = e.idescola
        JOIN alunos_has_escola rel ON rel.idescola = e.idescola
        WHERE rel.idalunos = ${idAluno};
    `;
    return database.executar(sql);
}

function listarAulasPorEscola(idEscola) {
    var sql = `
        SELECT 
            a.idaula,
            a.diaSemana,
            a.horario,
            e.nome AS escola
        FROM aula a
        JOIN escola e ON a.idescola = e.idescola
        WHERE a.idescola = ${idEscola};
    `;
    return database.executar(sql);
}

function buscarKPIs(idAluno) {
    var sql = `
        SELECT 
            (SELECT COUNT(*) FROM alunos a2 
             WHERE a2.nivel = a.nivel) AS pessoasMesmoNivel,
            a.nivel AS nivelAtual,
            4 AS semanasRestantes
        FROM alunos a
        WHERE a.idalunos = ${idAluno};
    `;
    return database.executar(sql);
}

function distribuicaoZonas(idAluno) {
    var sql = `
        SELECT 
            en.bairro AS zona,
            ROUND(COUNT(*) * 100 / (
                SELECT COUNT(*) 
                FROM alunos_has_escola 
                WHERE idalunos = ${idAluno}
            ), 2) AS percentual
        FROM alunos_has_escola rel
        JOIN escola e ON e.idescola = rel.idescola
        JOIN endereco en ON en.idendereco = e.endereco_idendereco
        WHERE rel.idalunos = ${idAluno}
        GROUP BY en.bairro;
    `;
    return database.executar(sql);
}



function distribuicaoNiveis() {
    var sql = `
        SELECT 
            nivel,
            COUNT(*) AS quantidade
        FROM alunos
        GROUP BY nivel;
    `;
    return database.executar(sql);
}

module.exports = {
    listarAulasPorAluno,
    listarAulasPorEscola,
    buscarKPIs,
    distribuicaoZonas,
    distribuicaoNiveis
};
