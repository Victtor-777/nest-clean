import { Question } from '@/domain/forum/enterprise/entities/question';
import { Question as PrismaQuestion } from '@prisma/client';
export declare class PrismaQuestionMapper {
    static toDomain(raw: PrismaQuestion): Question;
}
