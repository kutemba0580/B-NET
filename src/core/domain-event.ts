import * as uuid from 'uuid/v4';

import { Event } from './event';

export abstract class DomainEvent implements Event {

	constructor(
		public readonly eventId: string
	) { }
	
	public static generateId() { return uuid(); }
}
