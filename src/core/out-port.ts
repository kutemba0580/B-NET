import { Port } from './port';
import { Result } from './result';

export interface OutPort<T extends Result> extends Port<T, void> {
	inject(output: T): void;
}
