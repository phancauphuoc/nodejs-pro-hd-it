import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.services";

const getHomePage = (req: Request, res: Response) => {
    res.render("home");
}

const getCreateUserPage = (req: Request, res: Response) => {
    res.render("create-user");
}

const postCreateUser = (req: Request, res: Response) => {
    console.log('aa', req.body);
    const { name, email, address } = req.body;
    //handle create user
    handleCreateUser(name, email, address);
    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUser }