import { z } from 'zod';
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions';
declare const pageQueryParamSchema: z.ZodPipeline<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>, z.ZodNumber>;
type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>;
export declare class FetchRecentQuestionsController {
    private fetchRecentQuestions;
    constructor(fetchRecentQuestions: FetchRecentQuestionsUseCase);
    handle(page: PageQueryParamSchema): Promise<{
        questions: import("../../../core/either").Left<null, {
            questions: import("../../../domain/forum/enterprise/entities/question").Question[];
        }> | import("../../../core/either").Right<null, {
            questions: import("../../../domain/forum/enterprise/entities/question").Question[];
        }>;
    }>;
}
export {};
