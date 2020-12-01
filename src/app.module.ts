import { Module } from '@nestjs/common';

import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'
import { QuestionModule } from './question/question.module';
@Module({
  imports: [

    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      url:process.env.DB_URL,
      autoLoadEntities:true,
      synchronize:true,
    }),
    QuestionModule
  ]

})
export class AppModule {}
