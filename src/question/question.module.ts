import { Controller, Module } from '@nestjs/common';
import {QuestionController} from './controller/question.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {QuestionEntity} from './models/question.entity';
import {QuestionService} from './service/question.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionEntity])
  ],
  providers:[QuestionService],
  controllers:[QuestionController]  
})
export class QuestionModule {}
