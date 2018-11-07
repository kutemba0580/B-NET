import { Event } from './event';
export declare abstract class DomainEvent implements Event {
    readonly eventId: string;
    constructor(eventId: string);
    static generateId(): string;
}
