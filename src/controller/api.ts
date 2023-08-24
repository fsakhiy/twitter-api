import { Request, Response } from "express";

const sayHello = (req: Request, res: Response) => {
    res.json({"message": "hello"})
}

const getAllUser = (req: Request, res: Response) => {
    res.json([{"username": 1}, {"username": 2}, {"username": 3}, {"username": 4}])
}

export {sayHello, getAllUser}