const { Router } = require("express");
const router = Router();

const studentRoute = require('./student.route.js');
const teacherRoute = require('./teacher.route.js');
const userRoute = require('./user.route.js');
const gradeRoute = require('./grade.route.js');
const classRoute = require('./class.route.js');

const defaultRoutes = [
    {
        path: '/users',
        route: userRoute
    },
    {
        path: '/students',
        route: studentRoute
    },
    {
        path: '/teachers',
        route: teacherRoute
    },
    {
        path: '/classes',
        route: classRoute
    },
    {
        path: '/grades',
        route: gradeRoute
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});

module.exports = router;
    