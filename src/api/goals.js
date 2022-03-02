const asyncHandler = require('express-async-handler');

const goals = {

    /***
     * Get Goals
     * @route GET /api/goals/
     * @access Private
     */
    get: asyncHandler(async (req, res) => {
        res.status(200).json({ message: "Get goles" });
    }),

    /***
     * Get Goal
     * @route GET /api/goals/:id
     * @access Private
     */
    get_one: asyncHandler(async (req, res) => {
        const { id } = req.params;
        res.status(200).json({ message: `Get gole: ${id}` });
    }),

    /***
     * Post Goal
     * @route POST /api/goals/
     * @access Private
     */
    post: asyncHandler(async (req, res) => {
        res.status(201).json({ message: "Get goles" });
    }),

    /***
     * Put Goal
     * @route PUT /api/goals/
     * @access Private
     */
    put: asyncHandler(async (req, res) => {
        const { id } = req.params;
        if (!req.body.text) {
            res.status(422);
            throw new Error('Please add a text field');
        }
        res.status(202).json({ message: `Put gole: ${id}` });
    }),

    /***
     * Delete Goal
     * @route DELETE /api/goals/
     * @access Private
     */
    delete: asyncHandler(async (req, res) => {
        // const { id } = req.params;
        res.status(204).send();
    }),

};

module.exports = { goals };
