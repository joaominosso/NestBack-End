import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalGuard } from './local.guard';

@Controller()
export class AuthController {
    @UseGuards(LocalGuard)
    @Post('/auth/login')
    async login(@Request() req:any){
        return req.user;
    }
}
