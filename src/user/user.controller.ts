import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



@ApiTags('用户')
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('all')
  async findAll() {
    let res = await this.userService.findAll()
    return res
  }

}
