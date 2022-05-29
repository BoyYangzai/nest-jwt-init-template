import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user/model/user.model';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './ws/event.module';
import { WebSocketGateway } from '@nestjs/websockets';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '你的数据库名称',
      password: '你的数据库密码',
      database: 'nest',
      models: [User],
      autoLoadModels: true
    }),
    SequelizeModule.forFeature([User]),
    UserModule,
    AuthModule,
    EventsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
