import { Result } from "../../core";

export class EventsResult implements Result {
	constructor(
		public readonly events: Event[]
	) { }
}