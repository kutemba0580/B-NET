import { Result } from "../../core";
import { Event } from '../../core/event';
export declare class EventsResult implements Result {
    readonly events: Event[];
    constructor(events: Event[]);
}
