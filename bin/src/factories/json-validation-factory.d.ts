export declare abstract class JSONValidationFactory<I, O> {
    fromJSON(input: string): O;
    abstract map(obj: I): O;
}
