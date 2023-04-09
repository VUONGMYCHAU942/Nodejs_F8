const newsRouter = require('./news');
const meRouter = require('./me');
const rolesRouter = require('./roles');
const departmentsRouter = require('./departments');


const coursesRouter = require('./courses');


const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/roles', rolesRouter);
    app.use('/departments', departmentsRouter);

    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}
module.exports = route;
