import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor (private authservice:AuthService){
        super({
            userNamefield: 'name',
            passwordField: 'password'
        })
    }
    async validation(userName:string, password:string){
        const user = await this.authservice.UserValidation(userName, password);
        if(!user){
            throw new UnauthorizedException();
        }
        return (user)
      }
}