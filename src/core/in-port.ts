import { Message } from './message';
import { Port } from './port';

export interface InPort<I extends Message, O> extends Port<I, O> {
	inject(input: I): O;
}
