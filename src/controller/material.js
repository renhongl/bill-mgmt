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
                        { content: new RegExp("\w*" + searchWord) },
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

/**
 * @swagger
 * /material/total/{timestamp}:
 *    get:
 *      tags:
 *        - Material
 *      summary: Get total count of material
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: timestamp
 *         description: Time stamp
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
const getTotalMaterial = async (ctx, next) => {
    try {
        const timestamp = Number(ctx.params.timestamp);
        const matArr = await Material.find({ createTime: { $gt: timestamp } });
        const unPickupArr = await Material.find({
            createTime: { $gt: timestamp },
            $or: [
                { pickUpTime: '' },
                { pickUpTime: undefined }
            ]
        });
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: `Success`,
            data: {
                total: matArr.length,
                pickedUp: matArr.length - unPickupArr.length,
            },
        };
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /material/top/student/{timestamp}:
 *    get:
 *      tags:
 *        - Material
 *      summary: Get top of student
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: timestamp
 *         description: Time stamp
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
const getTopStudentMaterial = async (ctx, next) => {
    try {
        const timestamp = Number(ctx.params.timestamp);
        const matArr = await Material.find({ createTime: { $gt: timestamp }}).populate('student');
        const mapping = {};
        let res = null;
        for (let item of matArr) {
            if (mapping[item.student.name + '-' + item.student._id] !== undefined) {
                mapping[item.student.name + '-' + item.student._id].push(item);
            } else {
                mapping[item.student.name + '-' + item.student._id] = [item];
            }
        }
        const keys = Object.keys(mapping);
        console.log(mapping);
        for (let key of keys) {
            if (!res) {
                res = {
                    name: key,
                    count: mapping[key].length,
                    items: mapping[key]
                };
            } else {
                if (mapping[key] > res.count) {
                    res = {
                        name: key,
                        count: mapping[key].length,
                        items: mapping[key]
                    }
                }
            }
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: `Success`,
            data: res,
        };
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /material/top/teacher/{timestamp}:
 *    get:
 *      tags:
 *        - Material
 *      summary: Get top of teacher
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: timestamp
 *         description: Time stamp
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
const getTopTeacherMaterial = async (ctx, next) => {
    try {
        const timestamp = Number(ctx.params.timestamp);
        const matArr = await Material.find({ createTime: { $gt: timestamp }}).populate('teacher');
        const mapping = {};
        let res = null;
        for (let item of matArr) {
            if (mapping[item.teacher.name + '-' + item.teacher._id] !== undefined) {
                mapping[item.teacher.name + '-' + item.teacher._id].push(item);
            } else {
                mapping[item.teacher.name + '-' + item.teacher._id] = [item];
            }
        }
        const keys = Object.keys(mapping);
        console.log(mapping);
        for (let key of keys) {
            if (!res) {
                res = {
                    name: key,
                    count: mapping[key].length,
                    items: mapping[key]
                };
            } else {
                if (mapping[key] > res.count) {
                    res = {
                        name: key,
                        count: mapping[key].length,
                        items: mapping[key]
                    }
                }
            }
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: `Success`,
            data: res,
        };
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /material/top/university/{timestamp}:
 *    get:
 *      tags:
 *        - Material
 *      summary: Get top of university
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: timestamp
 *         description: Time stamp
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
const getTopUniversityMaterial = async (ctx, next) => {
    try {
        const timestamp = Number(ctx.params.timestamp);
        const matArr = await Material.find({ createTime: { $gt: timestamp }}).populate('uni');
        const mapping = {};
        let res = null;
        for (let item of matArr) {
            if (mapping[item.uni.name + '-' + item.uni._id] !== undefined) {
                mapping[item.uni.name + '-' + item.uni._id].push(item);
            } else {
                mapping[item.uni.name + '-' + item.uni._id] = [item];
            }
        }
        const keys = Object.keys(mapping);
        console.log(mapping);
        for (let key of keys) {
            if (!res) {
                res = {
                    name: key,
                    count: mapping[key].length,
                    items: mapping[key]
                };
            } else {
                if (mapping[key] > res.count) {
                    res = {
                        name: key,
                        count: mapping[key].length,
                        items: mapping[key]
                    }
                }
            }
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: `Success`,
            data: res,
        };
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /material/trend/university/{timestamp}/{monthly}:
 *    get:
 *      tags:
 *        - Material
 *      summary: Get trend of university
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: timestamp
 *         description: Time stamp
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: monthly
 *         description: Monthly data or year data
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
const getTrendUniversityMaterial = async (ctx, next) => {
    try {
        const timestamp = Number(ctx.params.timestamp);
        const monthly = ctx.params.monthly;
        const matArr = await Material.find({ createTime: { $gt: timestamp }}).populate('uni');
        const uniGroup = {};
        for (let item of matArr) {
            if (uniGroup[item.uni.name + '-' + item.uni._id] !== undefined) {
                uniGroup[item.uni.name + '-' + item.uni._id].push(item);
            } else {
                uniGroup[item.uni.name + '-' + item.uni._id] = [item];
            }
        }
        const keys = Object.keys(uniGroup);
        for(let key of keys) {
            const values = uniGroup[key];
            const dateGrpup = {};
            values.forEach((value) => {
                if (monthly === 'true') {
                    const month = new Date(Number(value.createTime)).getMonth() + 1;
                    if(dateGrpup[month] !== undefined) {
                        dateGrpup[month] += 1;
                    } else {
                        dateGrpup[month] = 1;
                    }
                } else {
                    const date = new Date(Number(value.createTime)).getDate();
                    if(dateGrpup[date] !== undefined) {
                        dateGrpup[date] += 1;
                    } else {
                        dateGrpup[date] = 1;
                    }
                }
            });
            uniGroup[key] = dateGrpup;
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: `Success`,
            data: uniGroup,
        };
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /material/trend/teacher/{timestamp}/{monthly}:
 *    get:
 *      tags:
 *        - Material
 *      summary: Get trend of teacher
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: timestamp
 *         description: Time stamp
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: monthly
 *         description: Monthly data or year data
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
const getTrendTeacherMaterial = async (ctx, next) => {
    try {
        const timestamp = Number(ctx.params.timestamp);
        const monthly = ctx.params.monthly;
        const matArr = await Material.find({ createTime: { $gt: timestamp }}).populate('teacher');
        const uniGroup = {};
        for (let item of matArr) {
            if (uniGroup[item.teacher.name + '-' + item.teacher._id] !== undefined) {
                uniGroup[item.teacher.name + '-' + item.teacher._id].push(item);
            } else {
                uniGroup[item.teacher.name + '-' + item.teacher._id] = [item];
            }
        }
        const keys = Object.keys(uniGroup);
        for(let key of keys) {
            const values = uniGroup[key];
            const dateGrpup = {};
            values.forEach((value) => {
                if (monthly === 'true') {
                    const month = new Date(Number(value.createTime)).getMonth() + 1;
                    if(dateGrpup[month] !== undefined) {
                        dateGrpup[month] += 1;
                    } else {
                        dateGrpup[month] = 1;
                    }
                } else {
                    const date = new Date(Number(value.createTime)).getDate();
                    if(dateGrpup[date] !== undefined) {
                        dateGrpup[date] += 1;
                    } else {
                        dateGrpup[date] = 1;
                    }
                }
            });
            uniGroup[key] = dateGrpup;
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: `Success`,
            data: uniGroup,
        };
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
    getTotalMaterial,
    getTopStudentMaterial,
    getTopTeacherMaterial,
    getTopUniversityMaterial,
    getTrendUniversityMaterial,
    getTrendTeacherMaterial,
};
