import { Message } from '../../core';
import { JSONValidationFactory } from '../../factories';


export abstract class JSONInPort<I, T extends Message> extends JSONValidationFactory<I, T> {

	inject(input: string): T {
		return this.fromJSON(input);
	}
	abstract map(obj: I): T;
}
