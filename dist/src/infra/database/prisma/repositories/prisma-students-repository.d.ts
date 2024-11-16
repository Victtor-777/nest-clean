import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository';
import { Student } from '@/domain/forum/enterprise/entities/student';
import { PrismaService } from '../prisma.service';
export declare class PrismaStudentsRepository implements StudentsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<Student | null>;
    create(student: Student): Promise<void>;
}
