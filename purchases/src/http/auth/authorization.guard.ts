import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import jwt from "express-jwt";
import { expressJwtSecret } from "jwks-rsa";
import { promisify } from "node:util";

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private configService = configService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    return true;
  }
}
