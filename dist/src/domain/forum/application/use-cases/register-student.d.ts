import { Student } from '../../enterprise/entities/student';
import { StudentsRepository } from '../repositories/students-repository';
import { HashGenerator } from '../cryptography/hash-generator';
import { StudentAlreadyExistsError } from './errors/student-already-exists-error';
import { Either } from '@/core/either';
interface RegisterStudentUseCaseRequest {
    name: string;
    email: string;
    password: string;
}
type RegisterStudentUseCaseResponse = Either<StudentAlreadyExistsError, {
    student: Student;
}>;
export declare class RegisterStudentUseCase {
    private studentsRepository;
    private hashGenerator;
    constructor(studentsRepository: StudentsRepository, hashGenerator: HashGenerator);
    execute({ name, email, password, }: RegisterStudentUseCaseRequest): Promise<RegisterStudentUseCaseResponse>;
}
export {};
