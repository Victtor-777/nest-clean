import { Student } from '../../enterprise/entities/student';
export declare abstract class StudentsRepository {
    abstract findByEmail(id: string): Promise<Student | null>;
    abstract create(student: Student): Promise<void>;
}
