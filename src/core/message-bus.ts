import { Message } from "./message";

export interface MessageBus<T extends Message> {
    execute(message: T): Promise<void>;
}