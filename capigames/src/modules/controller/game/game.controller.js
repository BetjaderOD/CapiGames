const { Response, Router } = require('express');
const { validateError } = require ("../../../utils/functions");
const { findAll } = require("./game.gateway");

const getAll = async (req, res = Response) => {
    try {
        const games = await findAll();
        res.status(200).json(games);

    }catch(error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
};

const gamesRouter = Router();

gamesRouter.get("/", [], getAll);

module.exports = {
    gamesRouter,
};