const Material = require('../models/material');

/**
 * @swagger
 * /material/search:
 *    post:
 *      tags:
 *        - Material
 *      summary: Search material
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
const searchMaterial = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        let index = body.index || 0;
        let total = body.total || 1000;
        let sortKey = body.sortKey || 'name';
        let asc = body.asc || 1;
        let searchWord = body.searchWord || '';
        let teaArr, totalRecords;
        if (!searchWord) {
            teaArr = await Material.find({}).populate('student').populate('uni').populate('teacher').sort({ [sortKey]: asc });
        } else {
            teaArr = await Material.find(
                {
                    $or: [
                    // { name: new RegExp("\w*"+ searchWord) },
                    // { uni: new RegExp("\w*"+ searchWord) },
                    // { phone: new RegExp("\w*"+ searchWord) },
                    { content: new RegExp("\w*"+ searchWord) },
                    // { teacher: new RegExp("\w*"+ searchWord) }
                    ]
                }).populate('student').populate('uni').populate('teacher').sort({ [sortKey]: asc });
        }
        totalRecords = teaArr.length;
        teaArr = teaArr.splice(index * total, total);
        ctx.status = 200;
        if (teaArr) {
            ctx.body = {
                code: 200,
                message: 'Success',
                data: teaArr,
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
 * /material:
 *    post:
 *      tags:
 *        - Material
 *      summary: Create material
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
const createMaterial = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        if (!body.student || !body.uni) {
            ctx.status = 400;
            ctx.body = {
                code: 400,
                message: `Bad request, student and university is required`,
            };
            return;
        }
        const now = Date.now();
        body.createTime = now;

        const newUniversity = new Material(body);
        let material = await newUniversity.save();
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: 'Success',
            data: material,
        };

    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /material:
 *    put:
 *      tags:
 *        - Material
 *      summary: Update material
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
const updateMaterial = async (ctx, next) => {
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

        let tea = await Material.findOneAndUpdate({ _id: body.id }, body);
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
 * /material/{id}:
 *    delete:
 *      tags:
 *        - Material
 *      summary: Delete material
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: Material id
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
const deleteMaterial = async (ctx, next) => {
    try {
        const id = ctx.params.id;
        console.log('delete id: ' + id);
        let tea = await Material.findOneAndDelete({ _id: id });
        ctx.status = 200;
        if (tea) {
            ctx.body = {
                code: 200,
                message: 'Delete Success',
                data: tea,
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
 * /material/{id}:
 *    get:
 *      tags:
 *        - Material
 *      summary: Get material by id
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: Material id
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
const getMaterial = async (ctx, next) => {
    try {
        const id = ctx.params.id;
        let tea = await Material.findOne({ _id: id });
        ctx.status = 200;
        if (tea) {
            ctx.body = {
                code: 200,
                message: 'Get Success',
                data: tea[0],
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
    searchMaterial,
    createMaterial,
    deleteMaterial,
    updateMaterial,
    getMaterial,
};
