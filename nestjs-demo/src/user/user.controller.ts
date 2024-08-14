import { Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
// import { ConfigService } from '@nestjs/config'
import { User } from './user.entity'
// import { ConfigEnum } from '../enum/config.enum'
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
    // private readonly configService: ConfigService
  ) {} // 等价于 this.userService = new UserService()
  @Get()
  getUsers(): any {
    return this.userService.findAll()
  }

  @Post()
  addUser() {
    const user = {
      username: 'Timo',
      password: '123456'
    } as User
    return this.userService.create(user)
  }

  @Get('/logs')
  getUserLogs() {
    return this.userService.findLogs(1)
  }
}
