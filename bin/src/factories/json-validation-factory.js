"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Uses a json scheme to validate a json string and create a typed object
class JSONValidationFactory {
    fromJSON(input) {
        return this.map(JSON.parse(input));
    }
}
exports.JSONValidationFactory = JSONValidationFactory;
