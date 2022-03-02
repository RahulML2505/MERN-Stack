const express = require('express');
const router = express.Router();
const { goals } = require('../../../src/api/goals');


/***
 * @route GET/POST /api/goals/
 * @access Private
 */
router.route('/')
    .get(goals.get)
    .post(goals.post);

/***
 * @route GET/PUT/DELETE /api/goals/:id
 * @access Private
 */
router.route('/:id')
    .get(goals.get_one)
    .put(goals.put)
    .delete(goals.delete);

module.exports = router;
