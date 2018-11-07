import { Result, OutPort } from "../../core";
export declare class ConsoleAddToCartOutPort<T extends Result> implements OutPort<T> {
    inject(output: Result): void;
}
