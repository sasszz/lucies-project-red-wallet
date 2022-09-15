const express = require('express');
const pirateRouter = express.Router();
const { getAllPirates, getOnePirate, insertPirate, updatePirate, deletePirate } = require('../controllers/pirate.controller')

pirateRouter.route('/')
    .get(getAllPirates)
    .post(insertPirate);

pirateRouter.route('/:id')
    .get(getOnePirate)
    .put(updatePirate)
    .delete(deletePirate);

module.exports = pirateRouter;