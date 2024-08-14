import { Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { ConfigService } from '@nestjs/config'
// import { ConfigEnum } from '../enum/config.enum'
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService
  ) {} // 等价于 this.userService = new UserService()
  @Get()
  getUsers(): any {
    // const db = this.configService.get(ConfigEnum.DB)
    // const host = this.configService.get(ConfigEnum.DB_HOST)
    const data = this.configService.get('db')
    console.log(data, 11111)
    return this.userService.getUsers()
  }

  @Post()
  addUser() {
    return this.userService.addUser()
  }
}
