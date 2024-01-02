import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable() //Don't forget this keyword.
export class JwtUserStrategy extends PassportStrategy(Strategy, 'jwt-user'){
    constructor(private authService: AuthService){
        super({
            jwtFromRequest: (req) => {        
                return req.headers['authorization'];
              },
            ignoreExpiration: false,
            secretOrKey: 'FAHIM'
        });
    }

    async validate(payload: any){
        const user = await this.authService.jwtUserDetails(payload);
        //console.log
        return user;
    }
}

@Injectable() //Don't forget this keyword.
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin'){
    constructor(private authService: AuthService){
        super({
            jwtFromRequest: (req) => {         
                return req.headers['authorization'];
              },
            ignoreExpiration: false,
            secretOrKey: 'FAHIM'
        });
    }

    async validate(payload: any){
        const user = await this.authService.jwtUserDetails(payload);
        if(user.role === 'admin'){
            return user;
        }
        else{
            throw new UnauthorizedException();
        }

    }
}