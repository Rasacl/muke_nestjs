import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库主机名
      port: 3306, // 数据库端口号
      username: 'root', // 数据库用户名
      password: 'chen991029', // 数据库密码
      database: 'water-drop', // 数据库名称
      entities: [`${__dirname}/../modules/**/*.entity{.ts,.js}`], // 数据库实体文件
      logging: true, // 是否打印日志
      autoLoadEntities: true, // 是否自动加载实体
      synchronize: true // 是否自动同步数据库
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
