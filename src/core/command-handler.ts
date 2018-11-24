import { Command } from './command';
import { MessageHandler } from './message-handler';

export interface CommandHandler<T extends Command> extends MessageHandler<T> { }
