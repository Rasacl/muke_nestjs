import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './models/user.entity'
import { DeepPartial, Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>
  ) {}

  // 新增用户
  async crate(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity)
    return res && res.raw.affectedRowa > 0
  }

  // 删除用户
  async delete(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id)
    console.log(res, 'res')
    return res && res.affected > 0
  }

  // 更新一个用户
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity)
    return res && res.affected > 0
  }

  // 查询用户
  async findOne(id: string): Promise<User> {
    return await this.UserRepository.findOne({ where: { id } })
  }
}
