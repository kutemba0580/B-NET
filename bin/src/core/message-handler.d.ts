import { Message } from "./message";
export interface MessageHandler<T extends Message> {
    handle(command: T): Promise<void>;
}
