const University = require('../models/university');

/**
 * @swagger
 * /university/search:
 *    post:
 *      tags:
 *        - Univsersity
 *      summary: Search university
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#definitions/searchSchema"
 *      produces:
 *        - application/json
 *      responses:
 *        401:
 *           description: Invalid token
 *        200:
 *          description: Success
 *
 */
const searchUniversity = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        let index = body.index || 0;
        let total = body.total || 1000;
        let sortKey = body.sortKey || 'name';
        let asc = body.asc || 1;
        let searchWord = body.searchWord || '';
        let uniArr, totalRecords;
        if (!searchWord) {
            uniArr = await University.find({deleted: false}).sort({ [sortKey]: asc });
        } else {
            uniArr = await University.find({
                deleted: false,
                $or:[{
                name: new RegExp("\w*"+ searchWord)},
                {address: new RegExp("\w*"+ searchWord)
            }]}).sort({ [sortKey]: asc });
        }
        totalRecords = uniArr.length;
        uniArr = uniArr.splice(index * total, total);
        ctx.status = 200;
        if (uniArr) {
            ctx.body = {
                code: 200,
                message: 'Success',
                data: uniArr,
                total: totalRecords
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
            body.deleted = false;
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
 * /university:
 *    put:
 *      tags:
 *        - Univsersity
 *      summary: Update university
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
const updateUniversity = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        if (!body.id) {
            ctx.status = 400;
            ctx.body = {
                code: 400,
                message: `Bad request, id is required`,
            };
            return;
        }

        let uni = await University.findOneAndUpdate({ _id: body.id }, body);
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: 'Success',
            data: body,
        };
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};


/**
 * @swagger
 * /university/{id}:
 *    delete:
 *      tags:
 *        - Univsersity
 *      summary: Delete university
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: University id
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
        const id = ctx.params.id;
        console.log('delete id: ' + id);
        let uni = await University.findOneAndUpdate({_id: id}, {deleted: true});
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

/**
 * @swagger
 * /university/{id}:
 *    get:
 *      tags:
 *        - Univsersity
 *      summary: Get university by id
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: University id
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
const getUniversity = async (ctx, next) => {
    try {
        const id = ctx.params.id;
        let uni = await University.findOne({_id: id});
        ctx.status = 200;
        if (uni) {
            ctx.body = {
                code: 200,
                message: 'Get Success',
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
    searchUniversity,
    createUniversity,
    deleteUniversity,
    updateUniversity,
    getUniversity,
};
