import bcrypt from 'bcrypt'
import { prisma } from '../database/prisma'
import { RandomNumber } from '../helpers/RandomNumber'
interface IUserCreateService {
  name: string,
  email: string,
  password: string,
  permission: number,
}

class UserCreateService {
  async execute({name,email,password,permission} : IUserCreateService) {
    const userExists = prisma.user.findFirst({
      where:{
        email
      }
    });
    if(userExists) {
      throw new Error("User Already Exists!");
    }
    password = await bcrypt.hash(password, RandomNumber.generate(0,10))
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        permission
      }
    })
    return user;
  }
}

export { UserCreateService }