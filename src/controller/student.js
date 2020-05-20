const Student = require('../models/student');
const Material = require('../models/material');

/**
 * @swagger
 * /student/search:
 *    post:
 *      tags:
 *        - Student
 *      summary: Search student
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
const searchStudent = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        let index = body.index || 0;
        let total = body.total || 1000;
        let sortKey = body.sortKey || 'name';
        let asc = body.asc || 1;
        let searchWord = body.searchWord || '';
        let teaArr, totalRecords;
        if (!searchWord) {
            teaArr = await Student.find({deleted: false}).populate('teacher').populate('uni').sort({ [sortKey]: asc });
        } else {
            teaArr = await Student.find(
                {
                deleted: false,
                $or:[{name: new RegExp("\w*"+ searchWord)},
                // {uni: new RegExp("\w*"+ searchWord)},
                {phone: searchWord}
            ]}).populate('teacher').populate('uni').sort({ [sortKey]: asc });
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
 * /student:
 *    post:
 *      tags:
 *        - Student
 *      summary: Create student
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
const createStudent = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        if (!body.name || !body.uni) {
            ctx.status = 400;
            ctx.body = {
                code: 400,
                message: `Bad request, name and university is required`,
            };
            return;
        }

        let temp = await Student.find({ phone: body.phone });
        if (temp.length !== 0) {
            ctx.status = 200;
            return ctx.body = {
                code: 406,
                message: '学生的手机号重复，请使用其他手机号。',
            };
        }

        let tea = await Student.find({ name: body.name });
        if (!body.address) {
            body.address = '未填写';
        }

        if (!tea.length) {
            body.deleted = false;
            const newUniversity = new Student(body);
            let student = await newUniversity.save();
            ctx.status = 200;
            ctx.body = {
                code: 200,
                message: 'Success',
                data: student,
            };
        } else {
            ctx.status = 406;
            ctx.body = {
                code: 406,
                message: 'Student existed',
            };
        }
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /student:
 *    put:
 *      tags:
 *        - Student
 *      summary: Update student
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
const updateStudent = async (ctx, next) => {
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

        let tea = await Student.findOneAndUpdate({ _id: body.id }, body);
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
 * /student/{id}:
 *    delete:
 *      tags:
 *        - Student
 *      summary: Delete student
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: Student id
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
const deleteStudent = async (ctx, next) => {
    try {
        const id = ctx.params.id;
        console.log('delete id: ' + id);
        let materials = await Material.find({deleted: false}).populate('student');
        materials = materials.filter((material) => {
            console.log('stu id: ' + material.student._id.toString() === id);
            return material.student._id.toString() === id;
        });
        if (materials && materials.length > 0) {
            return ctx.body = {
                code: 406,
                message: '有材料关联该学生，请先删除材料。',
                data: null,
            };
        }
        let tea = await Student.findOneAndUpdate({_id: id}, {deleted: true});
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
 * /student/{id}:
 *    get:
 *      tags:
 *        - Student
 *      summary: Get student by id
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: Student id
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
const getStudent = async (ctx, next) => {
    try {
        const id = ctx.params.id;
        let tea = await Student.findOne({_id: id});
        ctx.status = 200;
        if (tea) {
            ctx.body = {
                code: 200,
                message: 'Get Success',
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

module.exports = {
    searchStudent,
    createStudent,
    deleteStudent,
    updateStudent,
    getStudent,
};
