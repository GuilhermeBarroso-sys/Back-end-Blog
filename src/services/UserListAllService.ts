import { prisma } from "../database/prisma"
class UserListAllService {
  async execute(id: string) {
    return await prisma.user.findMany({
      where: {
        isActive: true,
        AND: {
          id: {
            not: id
          }
        }
        
      },
      
    });
  }
}
export { UserListAllService }