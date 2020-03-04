const University = require('../models/university');

/**
 * @swagger
 * /university/all:
 *    get:
 *      tags:
 *        - Univsersity
 *      summary: Query all university
 *      produces:
 *        - application/json
 *      responses:
 *        401:
 *           description: Invalid token
 *        200:
 *          description: Success
 *
 */
const getAllUniversity = async (ctx, next) => {
    try {
        let uniArr = await University.find({});
        ctx.status = 200;
        if (uniArr) {
            ctx.body = {
                code: 200,
                message: 'Success',
                data: uniArr,
            };
        } else {
            ctx.body = {
                code: 200,
                message: `No data`,
                data: null,
            };
        }
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /university:
 *    post:
 *      tags:
 *        - Univsersity
 *      summary: Create university
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#definitions/createUniSchema"
 *      produces:
 *        - application/json
 *      responses:
 *        401:
 *           description: Invalid token
 *        200:
 *          description: Success
 *
 */
const createUniversity = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        if (!body.name) {
            ctx.status = 400;
            ctx.body = {
                code: 400,
                message: `Bad request, name is required`,
            };
            return;
        }

        let uni = await University.find({ name: body.name });

        if (!uni.length) {
            const newUniversity = new University(body);
            let university = await newUniversity.save();
            ctx.status = 200;
            ctx.body = {
                code: 200,
                message: 'Success',
                data: university,
            };
        } else {
            ctx.status = 406;
            ctx.body = {
                code: 406,
                message: 'University existed',
            };
        }
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /university/{name}:
 *    delete:
 *      tags:
 *        - Univsersity
 *      summary: Delete university
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: name
 *         description: University name
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *      responses:
 *        401:
 *           description: Invalid token
 *        200:
 *          description: Success
 *
 */
const deleteUniversity = async (ctx, next) => {
    try {
        const name = ctx.params.name;
        let uni = await University.findOneAndDelete({name});
        ctx.status = 200;
        if (uni) {
            ctx.body = {
                code: 200,
                message: 'Delete Success',
                data: uni,
            };
        } else {
            ctx.body = {
                code: 200,
                message: `No data`,
                data: null,
            };
        }
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

module.exports = {
    getAllUniversity,
    createUniversity,
    deleteUniversity,
};
