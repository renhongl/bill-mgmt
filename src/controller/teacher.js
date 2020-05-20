const Teacher = require('../models/teacher');
const Student = require('../models/student');

/**
 * @swagger
 * /teacher/search/uni:
 *    post:
 *      tags:
 *        - Teacher
 *      summary: Search teacher by university
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
const searchTeacherByUni = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        let index = body.index || 0;
        let total = body.total || 1000;
        let sortKey = body.sortKey || 'name';
        let asc = body.asc || 1;
        let searchWord = body.searchWord || '';
        let teaArr, totalRecords;
        teaArr = await Teacher.find({deleted: false}).populate('uni').sort({ [sortKey]: asc });
        teaArr = teaArr.filter(item => item.uni.name === searchWord);

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
 * /teacher/search:
 *    post:
 *      tags:
 *        - Teacher
 *      summary: Search teacher
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
const searchTeacher = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        let index = body.index || 0;
        let total = body.total || 1000;
        let sortKey = body.sortKey || 'name';
        let asc = body.asc || 1;
        let searchWord = body.searchWord || '';
        let teaArr, totalRecords;
        if (!searchWord) {
            teaArr = await Teacher.find({deleted: false}).populate('uni').sort({ [sortKey]: asc });
        } else {
            teaArr = await Teacher.find(
                {$or:[{name: new RegExp("\w*"+ searchWord)},
                // {uni: new RegExp("\w*"+ searchWord)},
                {phone: new RegExp("\w*"+ searchWord)}
            ]}).populate('uni').sort({ [sortKey]: asc });
        }
        console.log(teaArr);
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
 * /teacher:
 *    post:
 *      tags:
 *        - Teacher
 *      summary: Create teacher
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
const createTeacher = async (ctx, next) => {
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

        let tea = await Teacher.find({ name: body.name });
        if (!body.address) {
            body.address = '未填写';
        }

        if (!tea.length) {
            body.deleted = false;
            const newUniversity = new Teacher(body);
            let teacher = await newUniversity.save();
            ctx.status = 200;
            ctx.body = {
                code: 200,
                message: 'Success',
                data: teacher,
            };
        } else {
            ctx.status = 406;
            ctx.body = {
                code: 406,
                message: 'Teacher existed',
            };
        }
    } catch (error) {
        console.log(error);
        ctx.throw(500);
    }
};

/**
 * @swagger
 * /teacher:
 *    put:
 *      tags:
 *        - Teacher
 *      summary: Update teacher
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
const updateTeacher = async (ctx, next) => {
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

        let tea = await Teacher.findOneAndUpdate({ _id: body.id }, body);
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
 * /teacher/{id}:
 *    delete:
 *      tags:
 *        - Teacher
 *      summary: Delete teacher
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: Teacher id
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
const deleteTeacher = async (ctx, next) => {
    try {
        const id = ctx.params.id;
        console.log('delete id: ' + id);
        let students = await Student.find({deleted: false}).populate('teacher');
        students = students.filter((student) => {
            console.log('tea id: ' + student.teacher._id.toString() === id);
            return student.teacher._id.toString() === id;
        });
        if (students && students.length > 0) {
            return ctx.body = {
                code: 406,
                message: '有其他学生关联该老师，请先删除学生。',
                data: null,
            };
        }
        let tea = await Teacher.findOneAndUpdate({_id: id}, {deleted: true});
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
 * /teacher/{id}:
 *    get:
 *      tags:
 *        - Teacher
 *      summary: Get teacher by id
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: Teacher id
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
const getTeacher = async (ctx, next) => {
    try {
        const id = ctx.params.id;
        let tea = await Teacher.findOne({_id: id});
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
    searchTeacher,
    createTeacher,
    deleteTeacher,
    updateTeacher,
    searchTeacherByUni,
    getTeacher,
};
