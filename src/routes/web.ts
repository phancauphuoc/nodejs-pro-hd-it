import express, { Express } from 'express';
import { getCreateUserPage, getHomePage } from '../controllers/user.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage)

    router.get("/create", getCreateUserPage)

    app.use("/", router);
}



export default webRoutes;