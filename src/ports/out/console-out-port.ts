import { Result, OutPort } from "../../core";

export class ConsoleAddToCartOutPort<T extends Result> implements OutPort<T>{
    inject(output: Result): void {
        console.log(output);
    }
}