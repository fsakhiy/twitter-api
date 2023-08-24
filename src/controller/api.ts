import { Request, Response } from "express";

const sayHello = (req: Request, res: Response) => {
    res.json({"message": "hello"})
}

export {sayHello}