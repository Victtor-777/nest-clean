import { StudentsRepository } from '../repositories/students-repository';
import { Either } from '@/core/either';
import { HashComparer } from '../cryptography/hash-comparer';
import { Encrypter } from '../cryptography/encrypter';
import { WrongCredentialsError } from './errors/wrong-credentials-error';
interface AuthenticateStudentUseCaseRequest {
    email: string;
    password: string;
}
type AuthenticateStudentUseCaseResponse = Either<WrongCredentialsError, {
    accessToken: string;
}>;
export declare class AuthenticateStudentUseCase {
    private studentsRepository;
    private hashComparer;
    private encrypter;
    constructor(studentsRepository: StudentsRepository, hashComparer: HashComparer, encrypter: Encrypter);
    execute({ email, password, }: AuthenticateStudentUseCaseRequest): Promise<AuthenticateStudentUseCaseResponse>;
}
export {};
