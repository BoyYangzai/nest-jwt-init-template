import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import sequelize from 'sequelize';
@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User,) {

  }
  async create(createUserDto: CreateUserDto) {
 
   let res= await this.userModel.build({
      ...createUserDto
   })
   await res.save()
    return res
  }
  async findAll() {
    let res = await this.userModel.findAll()
    return res
  }
  async find(createUserDto: CreateUserDto) {
    let res = await this.userModel.findOne({
      where: {
        ...createUserDto
      }
    })
    return res
  }

  async findOne(username: string) {

    let res = await this.userModel.findOne({
      where: {
        username
      }
    }) 
    return res !== null ? res :null
  }



}
