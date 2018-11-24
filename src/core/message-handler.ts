import { Message } from './message';
import { Result } from './result';

export interface MessageHandler<T extends Message> {
	handle(command: T): Promise<void | Result>;
}
