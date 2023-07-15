const { Router } = require("express");
const userRouter = require("./user.route");
const appointmentRouter = require("./appointment.route");

const router = Router();

const defaultRoutes = [
    {
        path: "/users",
        route: userRouter,
    },
    {
        path: "/appointments",
        route: appointmentRouter,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
