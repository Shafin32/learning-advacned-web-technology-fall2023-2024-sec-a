import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

constructor(private userService: UserService, private jwtService: JwtService){}

//LOCAL Strategy
async validateUser(email: string,password: string){

    const user = await this.userService.findOneByEmail(email);
    if(user && (await bcrypt.compare(password, user.password) || password == user.password)){
        const {password, email, ...rest} = user  
        return rest; // // return user object except {password & email}
    }

    return null;
}

//JWT Strategy
async getJwtToken(user: any){
    const payload = { name: user.name, sub: user.id};

    return{
        access_token: this.jwtService.sign(payload) //JWT Token
    };
}

//Get User Details From JWT payload
async jwtUserDetails(payload: any){
    const user = await this.userService.findOne(payload.sub);
    const{password, ...rest} = user; // return user object except {password}
    return rest;
}

}
