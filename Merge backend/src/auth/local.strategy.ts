import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private authService: AuthService){
        super();
    }

    //validate is build-in function of local stratagy. Always receive one object {username & password}
    //If you want to send 'email' -> send your email inside username. Like this
    // {"username": "fahim@gmail.com", "password": "1234"}
    async validate(email: string, password: string) : Promise<any> {

        const user = await this.authService.validateUser(email,password);
        if(!user){
            throw new UnauthorizedException();
        }

        return user; // This will be stored in request
    }
}