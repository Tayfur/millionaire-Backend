import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { QuestionEntity } from '../models/question.entity';
import { Question } from '../models/question.interface';

@Injectable()
export class QuestionService {

    constructor(
        @InjectRepository(QuestionEntity) private readonly questionRepository:Repository<QuestionEntity>
    ){}
        create(question:Question): Observable<Question>{
            return from(this.questionRepository.save(question));
        }

        findAll(): Observable<Question[]>{
            return from(this.questionRepository.find());
        }

        findOne(id:number):Observable<Question>{
            return from(this.questionRepository.findOne());
        }
}
