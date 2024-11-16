import { Student } from '@/domain/forum/enterprise/entities/student';
import { User as PrismaUser, Prisma } from '@prisma/client';
export declare class PrismaStudentMapper {
    static toDomain(raw: PrismaUser): Student;
    static toPrisma(student: Student): Prisma.UserUncheckedCreateInput;
}
