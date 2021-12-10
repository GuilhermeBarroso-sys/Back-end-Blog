import { Request, Response } from "express";
import { UserAuthenticateService } from "../services/UserAuthenticateService";
class AuthenticateController {
  async login(request: Request,response : Response) {
    const {email,password} = request.body;
    const userAuthenticateService = new UserAuthenticateService();
    try {
      const user = await userAuthenticateService.execute({email,password});
      return response.status(200).json(user);
    } catch(err) {
      return response.status(400).json(err.message)
    }
  }
}

export { AuthenticateController }