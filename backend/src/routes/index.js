const { Router } = require("express");
const userRouter = require("./user.route");

const router = Router();

const defaultRoutes = [
    {
        path: "/users",
        route: userRouter,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
