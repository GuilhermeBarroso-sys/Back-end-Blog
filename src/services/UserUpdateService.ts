import { prisma } from "../database/prisma"
interface IUserUpdateService {
  id: string;
  name: string;
  email: string;
}
class UserUpdateService {
  async execute({id,name,email} : IUserUpdateService) {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        email
      }
    })
    return user;
  }
}

export { UserUpdateService }