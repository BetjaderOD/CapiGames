const { query } = require ("../../../utils/mysql");

const findAll = async () => {
    const sql = "SELECT * FROM games";
    return await query(sql, []);
};

module.exports = {
    findAll,
};