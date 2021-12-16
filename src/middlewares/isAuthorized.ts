import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export async function IsAuthorized(request: Request,response: Response,next: NextFunction) {
  const {userId} = request;
  const {permission} = await prisma.user.findFirst({
    select: {
      permission:true
    },
    where: {
      id: userId
    }
  })
  if(permission < 9) {
    return response.status(401).send();
  }
  return next();
}