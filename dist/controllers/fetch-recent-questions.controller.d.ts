import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';
declare const pageQueryParamSchema: z.ZodPipeline<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>, z.ZodNumber>;
type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>;
export declare class FetchRecentQuestionsController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(page: PageQueryParamSchema): Promise<{
        questions: {
            id: string;
            title: string;
            slug: string;
            content: string;
            createdAt: Date;
            updateAt: Date | null;
            authorId: string;
        }[];
    }>;
}
export {};
