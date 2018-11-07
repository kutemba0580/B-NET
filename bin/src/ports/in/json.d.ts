import { Message } from "../../core";
import { JSONValidationFactory } from "../../factories";
export declare abstract class JSONInPort<I, T extends Message> extends JSONValidationFactory<I, T> {
    inject(input: string): T;
    abstract map(obj: I): T;
}
