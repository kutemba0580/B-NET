import { Event, Result } from 'hex-architect';

export declare class EventsResult<T extends Event> implements Result {

    readonly events: T[];
    constructor(events: T[]);
}
