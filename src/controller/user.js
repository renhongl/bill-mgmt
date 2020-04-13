const User = require('../models/user');
const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * @swagger
 * /user/{id}:
 *    get:
 *      tags:
 *        - User
 *      summary: Query user information by id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: User name
 *          in: path
 *          required: true
 *          schema:
 *             type: string
 *      responses:
 *        401:
 *           description: Invalid token
 *        200:
 *          description: Success
 *
 */
const getUser = async (ctx, next) => {
  try {
    const id = ctx.params.id;
    let user = await User.findOne({ _id: id }, { password: 0 });
    ctx.status = 200;
    if (user) {
      ctx.body = {
        code: 200,
        message: 'Success',
        data: user,
      };
    } else {
      ctx.body = {
        code: 200,
        message: `No user id: ${id}`,
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
 * /user/{id}:
 *  put:
 *    tags:
 *      - User
 *    summary: Update user information
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: id
 *         description: Admin ID
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#definitions/user"
 *    responses:
 *      401:
 *        description: Invalid token
 *      200:
 *        description: Success
 *        content:
 *            application/json:
 *              schema:
 *                $ref: "#definitions/apiResponse"
 *
 */
const updateUser = async (ctx, next) => {
  try {
    const { body } = ctx.request;
    ctx.status = 200;
    const adminId = ctx.params.id;
    const id = body.id;
    if (adminId === 'null') {
      delete body.auth;
      let res = await User.updateOne({ _id: id }, body);
      return  ctx.body = {
        code: 200,
        message: 'Success',
        data: res,
      };
    }
    let adminUser = await User.findOne({ _id: adminId });
    if (adminUser && adminUser.auth === 0) {
      delete body.id;
      // body.password = await bcrypt.hash(body.password, 5);
      let res = await User.updateOne({ _id: id }, body);
      console.log('Update' + res);
      ctx.status = 200;
      ctx.body = {
        code: 200,
        message: 'Success',
        data: res,
      };
    } else {
      ctx.body = {
        code: 200,
        message: `No auth`,
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
 * /user/search:
 *    post:
 *      tags:
 *        - User
 *      summary: Search user
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
const searchUser = async (ctx, next) => {
  try {

    const { body } = ctx.request;
    let id = body.id;
    let index = body.index || 0;
    let total = body.total || 1000;
    let sortKey = body.sortKey || 'name';
    let asc = body.asc || 1;
    let searchWord = body.searchWord || '';
    console.log('sort key: ' + sortKey);
    console.log('sort key: ' + asc);
    let uniArr, totalRecords;
    const user = await User.findOne({ _id: id });
    if (user && user.auth !== 0) {
      return ctx.body = {
        code: 200,
        message: 'No auth',
        data: null,
      };
    }
    if (!searchWord) {
      uniArr = await User.find({}).sort({ [sortKey]: asc });
    } else {
      uniArr = await User.find({
        $or: [{
          name: new RegExp("\w*" + searchWord)
        }]
      }).sort({ [sortKey]: asc });
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
 * /user/delete/{id}:
 *    delete:
 *      tags:
 *        - User
 *      summary: Delete user
 *      produces:
 *        - application/json
 *      parameters:
 *       - name: id
 *         description: Admin id
 *         in: path
 *         required: true
 *         schema:
 *           type: string]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#definitions/user"
 *      responses:
 *        401:
 *           description: Invalid token
 *        200:
 *          description: Success
 *
 */
const deleteUser = async (ctx, next) => {
  try {
    const adminId = ctx.params.id;
    const { body } = ctx.request;
    const id = body.id;
    let adminUser = await User.findOne({ _id: adminId });
    if (adminUser && adminUser.auth === 0) {
      console.log('Delete id: ' + id);
      let uni = await User.findOneAndDelete({ _id: id });
      ctx.status = 200;
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
 * /user/{id}:
 *  post:
 *    tags:
 *      - User
 *    summary: Create user
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: id
 *         description: Admin ID
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#definitions/user"
 *    responses:
 *      401:
 *        description: Invalid token
 *      200:
 *        description: Success
 *        content:
 *            application/json:
 *              schema:
 *                $ref: "#definitions/apiResponse"
 *
 */
const createUser = async (ctx, next) => {
  try {
    const { body } = ctx.request;
    ctx.status = 200;
    const adminId = ctx.params.id;
    let adminUser = await User.findOne({ _id: adminId });
    if (adminUser && adminUser.auth === 0) {
      body.password = await bcrypt.hash(body.password, 5);
      let res = new User(body);
      let user = await res.save();
      console.log('Create' + user);
      ctx.status = 200;
      ctx.body = {
        code: 200,
        message: 'Success',
        data: res,
      };
    } else {
      ctx.body = {
        code: 200,
        message: `No auth`,
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
    ctx.throw(500);
  }
};

module.exports = {
  getUser,
  updateUser,
  searchUser,
  deleteUser,
  createUser,
};
