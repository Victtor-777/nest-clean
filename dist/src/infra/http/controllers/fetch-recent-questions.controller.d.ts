import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { z } from 'zod';
declare const pageQueryParamSchema: z.ZodPipeline<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>, z.ZodNumber>;
type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>;
export declare class FetchRecentQuestionsController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(page: PageQueryParamSchema): Promise<{
        questions: {
            createdAt: Date;
            authorId: string;
            content: string;
            slug: string;
            bestAnswerId: string | null;
            title: string;
            id: string;
            updateAt: Date | null;
        }[];
    }>;
}
export {};
