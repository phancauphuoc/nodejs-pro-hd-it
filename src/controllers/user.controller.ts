import { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDeleteUser, handleGetUserById, handleUpdateUserById } from "services/user.services";

const getHomePage = async (req: Request, res: Response) => {
    //get users
    const users = await getAllUsers();

    return res.render("home", {
        users: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    res.render("create-user");
}

const postCreateUser = async (req: Request, res: Response) => {
    console.log('aa', req.body);
    const { name, email, address } = req.body;
    //handle create user
    await handleCreateUser(name, email, address);
    return res.redirect("/");
}

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect("/");
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    //get user by id
    const user = await handleGetUserById(id);
    return res.render("view-user.ejs", {
        id: id,
        user: user
    });
}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address, name } = req.body;
    //update user by id
    const a = await handleUpdateUserById(id, email, address, name);
    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser }