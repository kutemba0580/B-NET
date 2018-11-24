import { Query } from './query';
import { MessageHandler } from './message-handler';

export interface QueryHandler<T extends Query> extends MessageHandler<T> { }
