const asyncHandler = require('express-async-handler');

const Goal = require('../../server/models/goal');

const goals = {

    /***
     * Get Goals
     * @route GET /api/goals/
     * @access Private
     */
    get: asyncHandler(async (req, res) => {
        const goals = await Goal.find();
        res.status(200).json(goals);
    }),

    /***
     * Get Goal
     * @route GET /api/goals/:id
     * @access Private
     */
    get_one: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const goal = await Goal.findById(id);

        if (!goal) {
            res.status(404);
            throw new Error('Goal not found!');
        }

        res.status(200).json(goal);
    }),

    /***
     * Post Goal
     * @route POST /api/goals/
     * @access Private
     */
    post: asyncHandler(async (req, res) => {
        console.log(req.body);
        if (!req.body.text) {
            res.status(422);
            throw new Error('Please add a text field');
        }

        const goal = await Goal.create({
            text: req.body.text
        });
        res.status(201).json(goal);
    }),

    /***
     * Put Goal
     * @route PUT /api/goals/
     * @access Private
     */
    put: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const goal = await Goal.findById(id);

        if (!goal) {
            res.status(404);
            throw new Error('Goal not found!');
        }

        const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
        res.status(202).json(updatedGoal);
    }),

    /***
     * Delete Goal
     * @route DELETE /api/goals/
     * @access Private
     */
    delete: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const goal = await Goal.findById(id);

        if (!goal) {
            res.status(404);
            throw new Error('Goal not found!');
        }

        await goal.remove();
        res.status(202).json({ id });
    }),

};

module.exports = { goals };
