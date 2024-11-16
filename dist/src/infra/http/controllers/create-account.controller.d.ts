import { z } from 'zod';
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student';
declare const createAccountBodySchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>;
export declare class CreateAccountController {
    private registerStudent;
    constructor(registerStudent: RegisterStudentUseCase);
    handle(body: CreateAccountBodySchema): Promise<void>;
}
export {};
