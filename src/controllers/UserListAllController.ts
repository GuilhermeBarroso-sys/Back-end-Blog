import { Request, Response } from "express";
import { UserListAllService } from "../services/UserListAllService";

class UserListAllController {
  async handle(request: Request, response: Response) {
    const userListAllService = new UserListAllService();
    const  {userId} = request;
    try {
      const users = await userListAllService.execute(userId)
      return response.status(200).json(users);
    }catch({message}) {
      return response.status(400).json(message);
    }
  }
}
export { UserListAllController }