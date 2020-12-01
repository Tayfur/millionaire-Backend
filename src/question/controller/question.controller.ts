import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Question } from '../models/question.interface';
import {QuestionService} from '../service/question.service';

@Controller('question')
export class QuestionController {
    constructor(private QuestionService:QuestionService){}
    @Get()
    findAll():Observable<Question[]> {
        return this.QuestionService.findAll();
    }
    @Post()
    create(@Body()question:Question):Observable<Question>{
        return this.QuestionService.create(question)
    }

}
