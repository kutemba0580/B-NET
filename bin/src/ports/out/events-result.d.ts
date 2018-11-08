import { Event, Result } from 'hex-architect';

export declare class EventsResult implements Result {

    readonly events: Event[];
    constructor(events: Event[]);
}
