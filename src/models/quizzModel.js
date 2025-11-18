const db = require('../database');

const salvarPreferencias = (estilo, nivel) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO preferencias (estilo, nivel) VALUES (?, ?)`;
        db.execute(query, [estilo, nivel], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = { salvarPreferencias };
