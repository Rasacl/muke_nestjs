import { Controller, Get } from '@nestjs/common'

import { UserService } from './user.service'
import { User } from './models/user.entity'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.crate({
      name: '水滴超级管理员',
      desc: '管理员',
      tel: '888888888',
      password: '12345678',
      account: 'admin'
    })
  }

  @Get('/del')
  async del(): Promise<any> {
    return await this.userService.delete('f1a7270e-1a2c-4e20-a7d0-4a1082771c4e')
  }

  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      '5b4d3407-8eea-410d-9727-70c735af1a1f',
      {
        id: 'f1a7270e-1a2c-4e20-a7d0-4a1082771c4e',
        name: '水滴超级管理员11111',
        desc: '管理员',
        tel: '888888888',
        password: '123456',
        account: 'admin'
      }
    )
  }

  @Get('/find')
  async findOne(): Promise<User> {
    return await this.userService.findOne(
      'f1a7270e-1a2c-4e20-a7d0-4a1082771c4e'
    )
  }
}
