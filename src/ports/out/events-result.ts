import { Result } from "../../core";
import { Event } from '../../core/event';
export class EventsResult implements Result {
	constructor(
		public readonly events: Event[]
	) { }
}