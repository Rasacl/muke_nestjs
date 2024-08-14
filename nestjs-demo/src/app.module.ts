import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import Configuration from './configuration'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigEnum } from './enum/config.enum'
import { User } from './user/user.entity'
import { Profile } from './user/profile.entity'
import { Logs } from './logs/logs.entity'
import { Roles } from './roles/roles.entity'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 是否全局使用
      load: [Configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get(ConfigEnum.DB)?.mysql
        return {
          type: 'mysql',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.database,
          entities: [User, Profile, Logs, Roles],
          synchronize: true, // 同步本地的schema与数据库 -》 初始化的时候使用
          logging: ['error']
        }
      }
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'example',
    //   database: 'testdb',
    //   entities: [],
    //   synchronize: true, // 同步本地的schema与数据库 -》 初始化的时候使用
    //   logging: ['error']
    // }),
    UserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
