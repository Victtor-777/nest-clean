import { z } from 'zod';
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student';
declare const authenticateBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>;
export declare class AuthenticateController {
    private authenticateStudent;
    constructor(authenticateStudent: AuthenticateStudentUseCase);
    handle(body: AuthenticateBodySchema): Promise<{
        access_token: string;
    }>;
}
export {};
