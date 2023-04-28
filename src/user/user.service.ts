import { Injectable } from '@nestjs/common';
import { InjectRepository  } from '@nestjs/typeorm'
import { sys_user } from './user.entity';

import { Repository } from 'typeorm';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(sys_user)
        private readonly productsRepository: Repository<sys_user>,
    ){}


   async getUserName(userInfo:{ userName: string; password: string }):Promise<boolean>{
        const res = await this.productsRepository.query('select * from sys_user')

        if(res.length === 0){
            return false
        }

        let valid = false
        res.forEach((item:{ id:number; userName: string; password: string })=>{
            if(item.userName ===userInfo.userName){
                valid =  true
            }
        })

        return valid
    }

    async addUser(userInfo:{ userName: string; password: string}){
        const res = await this.productsRepository.query('select * from sys_user')

        if(res.length === 0){
            return await this.productsRepository.insert(userInfo)
        }

        let valid = true

        res.forEach((item:{ id:number; userName: string; password: string })=>{
            if(item.userName ===userInfo.userName){
                valid =  false
            }
        })

       if(!valid){
           return false
       }

        return await this.productsRepository.insert(userInfo)
    }
}
