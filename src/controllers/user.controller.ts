import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.services";

const getHomePage = async (req: Request, res: Response) => {
    //get users
    const users = await getAllUsers();
    console.log('check user', users);
    res.render("home", {
        users: users
    });
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