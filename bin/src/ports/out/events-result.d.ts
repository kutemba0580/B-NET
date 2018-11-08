import { Result } from "../../core";
export declare class EventsResult implements Result {
    readonly events: Event[];
    constructor(events: Event[]);
}
