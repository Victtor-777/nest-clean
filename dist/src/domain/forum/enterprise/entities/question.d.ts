import { AggregateRoot } from '@/core/entities/aggregate-root';
import { Slug } from './value-objects/slug';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';
import { QuestionAttachmentList } from './question-attachment-list';
export interface QuestionProps {
    authorId: UniqueEntityID;
    bestAnswerId?: UniqueEntityID;
    title: string;
    content: string;
    slug: Slug;
    attachments: QuestionAttachmentList;
    createdAt: Date;
    updatedAt?: Date;
}
export declare class Question extends AggregateRoot<QuestionProps> {
    get authorId(): UniqueEntityID;
    get bestAnswerId(): UniqueEntityID | undefined;
    get title(): string;
    get content(): string;
    get slug(): Slug;
    get attachments(): QuestionAttachmentList;
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    get isNew(): boolean;
    get excerpt(): string;
    private touch;
    set title(title: string);
    set content(content: string);
    set attachments(attachments: QuestionAttachmentList);
    set bestAnswerId(bestAnswerId: UniqueEntityID | undefined);
    static create(props: Optional<QuestionProps, 'createdAt' | 'slug' | 'attachments'>, id?: UniqueEntityID): Question;
}
