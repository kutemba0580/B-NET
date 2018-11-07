import { Command } from "./command";
import { MessageBus } from "./message-bus";

export interface CommandBus extends MessageBus<Command> { }