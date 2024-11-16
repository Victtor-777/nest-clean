import { Question } from '@/domain/forum/enterprise/entities/question';
export declare class QuestionPresenter {
    static toHTTP(question: Question): {
        id: import("../../../core/entities/unique-entity-id").UniqueEntityID;
        slug: import("../../../domain/forum/enterprise/entities/value-objects/slug").Slug;
        title: string;
        content: string;
        bestAnswerId: string | undefined;
        createdAt: Date;
        updatedAt: Date | null | undefined;
    };
}
