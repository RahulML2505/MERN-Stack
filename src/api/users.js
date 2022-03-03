const asyncHandler = require('express-async-handler');

const User = require('../../server/models/user');

const users = {

    /***
     * Get Users
     * @route GET /api/users/
     * @access Private
     */
    get: asyncHandler(async (req, res) => {
        const users = await User.find();
        res.status(200).json(users);
    }),

    /***
     * Get User me
     * @route GET /api/users/me
     * @access Private
     */
    get_me: asyncHandler(async (req, res) => {
        res.status(200).json({message: `Get User display`});
    }),

    /***
     * Get User
     * @route GET /api/users/:id
     * @access Private
     */
    get_one: asyncHandler(async (req, res) => {
        res.status(200).json({message: `Get User display`});
    }),

    /***
     * Create User
     * @route POST /api/users/
     * @access Public
     */
    post: asyncHandler(async (req, res) => {
        res.status(201).json({message: `Create User`});
    }),

    /***
     * Authenticate User
     * @route POST /api/users/login
     * @access Public
     */
    post_login: asyncHandler(async (req, res) => {
        res.status(201).json({message: `Login User`});
    }),

    /***
     * Put User
     * @route PUT /api/users/
     * @access Private
     */
    put: asyncHandler(async (req, res) => {
        res.status(202).json({message: `Update User`});
    }),

    /***
     * Delete User
     * @route DELETE /api/users/
     * @access Private
     */
    delete: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            res.status(404);
            throw new Error('User not found!');
        }

        await user.remove();
        res.status(200).json({ id });
    }),

};

module.exports = { users };
