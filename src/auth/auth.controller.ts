import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalGuard } from './local.guard';

@Controller()
export class AuthController {
    constructor(private authService:AuthService,){}
    @UseGuards(LocalGuard)
    @Post('/auth/login')
    async login(@Request() req:any){
        return this.authService.login(req.user);
    }
}
