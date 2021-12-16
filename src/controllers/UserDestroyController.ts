import { Request, Response } from "express";
import { UserDestroyService } from "../services/UserDestroyService";

class UserDestroyController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const userDestroyService = new UserDestroyService();
    try {
      const destroyed = await userDestroyService.execute(id);
      return response.status(200).json(destroyed);
    } catch({message}) {
      return response.status(400).json(message);
    }
  }
}
export { UserDestroyController }