import { MessageBus } from './message-bus';
import { Query } from './query';

export interface QueryBus extends MessageBus<Query> { }
