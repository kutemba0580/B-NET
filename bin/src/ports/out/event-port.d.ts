import { OutPort } from "../../core";
import { EventsResult } from "./events-result";
export interface EventDispatchingOutPort extends OutPort<EventsResult> {
}
