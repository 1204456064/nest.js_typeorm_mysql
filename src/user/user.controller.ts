import { UserService } from './user.service';
import { Body, Controller, Post, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService){}

    @Post('get-username')
    create(@Body() Body:{ userName:string; password: string}): Promise<boolean>{        
        return this.UserService.getUserName(Body)
    }

    @Post('add-username')
    addUser(@Body() Body:any){        
        return this.UserService.addUser(Body)
    }
}
