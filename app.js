/**
 * News App API entry file
 * @author renhongl
 * @email liangrenhong2017@gmail.com
 */
const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('koa-jsonwebtoken').default;
const koaBody = require('koa-body');
const { getUser, updateUser } = require('./src/controller/user');
const { register, login, verifyMail, keepAlive } = require('./src/controller/auth');
const { searchUniversity, createUniversity, deleteUniversity, updateUniversity, getUniversity } = require('./src/controller/university');
const { searchTeacher, createTeacher, deleteTeacher, updateTeacher, searchTeacherByUni, getTeacher } = require('./src/controller/teacher');
const { searchStudent, createStudent, deleteStudent, updateStudent, getStudent } = require('./src/controller/student');
const { searchMaterial, createMaterial, deleteMaterial, updateMaterial, getMaterial } = require('./src/controller/material');
const { connectDB } = require('./src/common/db');
const { errorHandle } = require('./src/common/errorHandle');
const {
  SECRET,
  DB_URL,
  STATIC_PATH,
  TOKEN_KEY,
  SWAGGER_DOC_JSON,
  PORT,
} = require('./src/settings/constants');
const { fileUpload } = require('./src/controller/file');
const serve = require('koa-static');
const koaSwagger = require('koa2-swagger-ui');

const cors = require('@koa/cors');

// Create app and router instance
const app = new Koa();
const router = new Router();

const corsOptions = {
  origin: '*'
}

// Connecting db
connectDB(DB_URL);

app.use(cors(corsOptions));

// Handle common error
app.use(errorHandle);

// Parse request body
app.use(koaBody({ multipart: true }));

// Apply static file server
app.use(serve(STATIC_PATH));

// Apply token validation
app.use(
  jwt({
    secret: SECRET,
    extractToken: ctx => {
      return ctx.header.token;
    },
    key: TOKEN_KEY,
  }).unless({
    path: [/\/auth\/register/, /\/auth\/mail/, /\/auth\/login/, /\/doc/, /\/avator/, /\/common/, /\/gui\/*/],
  }),
);

// Router definition
router
  .post('/auth/register', register)
  .post('/auth/mail/', verifyMail)
  .post('/auth/login', login)
  .post('/auth/keepAlive', keepAlive)
  .get('/user/:id', getUser)
  .put('/user/:id', updateUser)
  .post('/file/:type', fileUpload)
  .post('/university/search', searchUniversity)
  .post('/university', createUniversity)
  .delete('/university/:id', deleteUniversity)
  .get('/university/:id', getUniversity)
  .put('/university/', updateUniversity)
  .post('/teacher/search', searchTeacher)
  .post('/teacher', createTeacher)
  .delete('/teacher/:id', deleteTeacher)
  .get('/teacher/:id', getTeacher)
  .put('/teacher/', updateTeacher)
  .post('/teacher/search/uni', searchTeacherByUni)
  .post('/student/search', searchStudent)
  .post('/student', createStudent)
  .delete('/student/:id', deleteStudent)
  .get('/student/:id', getStudent)
  .put('/student/', updateStudent)
  .post('/material/search', searchMaterial)
  .post('/material', createMaterial)
  .delete('/material/:id', deleteMaterial)
  .put('/material/', updateMaterial)
  .get('/material/:id', getMaterial)


// Apply route middleware
app.use(router.routes()).use(router.allowedMethods());

// Apply swagger middleware
app.use(
  koaSwagger({
    routePrefix: '/doc', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: SWAGGER_DOC_JSON, // example path to json
    },
  }),
);

// Listen to port
app.listen(PORT);

// Print log on console
console.log('Server Running: http://localhost:' + PORT);
console.log('Swagger Running: http://localhost:' + PORT + '/doc');
