import { prisma } from "../database/prisma"
class UserListAllService {
  async execute() {
    return await prisma.user.findMany({
      where: {
        isActive: true
      }
    });
  }
}
export { UserListAllService }