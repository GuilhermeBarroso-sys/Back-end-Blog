import { prisma } from "../database/prisma"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
interface IUserAuthenticateService{
  email : string,
  password : string
}

class UserAuthenticateService {
  async execute({email,password} : IUserAuthenticateService) {
    const userExists = await prisma.user.findFirst({
      where: {
        email
      },
    });
    if(!userExists) {
      throw new Error("User doesn't exists!");
    }
    const correctPassword =  await bcrypt.compare(password, userExists.password);
    if(!correctPassword) {
      throw new Error("invalid password!")
    }
    const token = jwt.sign(
      {
        user: {
          id: userExists.id,
          email: userExists.email,
          name: userExists.name
        }
      },
      process.env.JWT_SECRET,
      {
        subject: userExists.id,
        expiresIn: "99d"
      }
    )
    const user = {
      id: userExists.id,
      email: userExists.email,
      name: userExists.name
    }
    return { token, user}
    
  }
}

export { UserAuthenticateService }