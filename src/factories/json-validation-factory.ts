// Uses a json scheme to validate a json string and create a typed object
export abstract class JSONValidationFactory<I, O>{

    fromJSON(input: string): O {
        return this.map(JSON.parse(input));
    }

    abstract map(obj: I): O;
}