import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getUsers(): any {
    return {
      code: 0,
      data: [111],
      msg: '请求用户成功'
    }
  }

  addUser(): any {
    return {
      code: 0,
      data: [111],
      msg: '用户添加成功'
    }
  }
}
