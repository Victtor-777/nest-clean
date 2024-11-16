import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
interface StudentProps {
    name: string;
    email: string;
    password: string;
}
export declare class Student extends Entity<StudentProps> {
    get name(): string;
    get email(): string;
    get password(): string;
    static create(props: StudentProps, id?: UniqueEntityID): Student;
}
export {};
