// import { Module, OnModuleInit } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
// import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { Post } from './typeorm/entities/Post';
// Give me the code to use DataSource

@Module({
  imports: [
    // TypeOrmModule.forRoot() method is used to connect to the database.
    // In this case to MySQL database.
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testuser',
      database: 'nestjs_mysql_tutorial',
      entities: [User, Profile, Post], // Il faut connecter la propriété entities à l'entité User du doissier src/typeorm/entities/User.ts pour que l'entité soit reconnue par le module TypeOrmModule.
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements OnModuleInit {
//   constructor(private readonly dataSource: DataSource) {}
//   async onModuleInit() {
//     try {
//       await this.dataSource.query('SELECT 1');
//       console.log('Database connection is successful.');
//     } catch (error) {
//       console.error('Database connection is failed.');
//     }
//   }
