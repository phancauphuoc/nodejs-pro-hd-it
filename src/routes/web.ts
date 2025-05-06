import express, { Express } from 'express';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", (req, res) => {
        res.render("home.ejs");
    })

    router.get("/phuoc", (req, res) => {
        res.send("Hello Phuoc 111");
    })

    app.use("/", router);
}



export default webRoutes;