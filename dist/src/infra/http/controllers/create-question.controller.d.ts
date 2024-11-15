import { UserPayload } from '@/infra/auth/jwt.strategy';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { z } from 'zod';
declare const createQuestionBodySchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    title: string;
}, {
    content: string;
    title: string;
}>;
type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>;
export declare class CreateQuestionController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(body: CreateQuestionBodySchema, user: UserPayload): Promise<void>;
    private convertToSlug;
}
export {};
