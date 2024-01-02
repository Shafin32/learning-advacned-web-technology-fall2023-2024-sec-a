import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {

    home(req: any){
        return req.user;
    }
}
