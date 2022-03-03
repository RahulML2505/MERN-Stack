const express = require('express');
const router = express.Router();
const { users } = require('../../../src/api/users');


/***
 * @route GET/POST /api/goals/
 * @access Private
 */
router.route('/')
    .get(users.get)
    .post(users.post);

/***
 * @route GET/PUT/DELETE /api/goals/:id
 * @access Private
 */
router.route('/:id')
    .get(users.get_one);

router.route('/me')
    .get(users.get_me)
    .put(users.put)
    .delete(users.delete);

module.exports = router;
