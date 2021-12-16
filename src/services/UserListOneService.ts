import { prisma } from "../database/prisma";

class UserListOneService {
  async execute(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })
    if(!user) {
      throw new Error("User doesn't exists!");
    }
    return user;
  }
}

export { UserListOneService }