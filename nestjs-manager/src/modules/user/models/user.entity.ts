import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column({
    comment: '昵称',
    default: ''
  })
  @IsNotEmpty() // name不为空
  name: string

  @Column({
    comment: '描述',
    default: ''
  })
  desc: string
  @Column({
    comment: '手机号',
    nullable: true // 可以为空,给数据库做确认
  })
  tel: string
  @Column({
    comment: '密码',
    nullable: true
  })
  password: string
  @Column({
    comment: '账号',
    nullable: true
  })
  account: string
}
