import { prisma } from "../database/prisma"

class UserDestroyService {
  async execute(id: string) {
    const destroyed = prisma.user.update({
      where: {
        id
      },
      data: {
        isActive: false
      }
    })
    return destroyed;
  }
}
export { UserDestroyService}