import bcrypt from 'bcrypt'
import { prisma } from '../database/prisma'
import { RandomNumber } from '../helpers/RandomNumber'
interface IUserCreateService {
  name: string,
  email: string,
  password: string,
}

class UserCreateService {
  async execute({name,email,password} : IUserCreateService) {
    if(!name|| !email|| !password) {
      throw new Error("400");
    }
    const userExists = await prisma.user.findFirst({
      where:{
        email,
        isActive: true
      }
    });
    if(userExists) {
      throw new Error("409");
    }
    password = await bcrypt.hash(password, RandomNumber.generate(0,10))
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    })
    return user;
  }
}

export { UserCreateService }