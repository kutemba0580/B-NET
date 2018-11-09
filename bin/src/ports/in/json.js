"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("../../factories");
class JSONInPort extends factories_1.JSONValidationFactory {
    inject(input) {
        return this.fromJSON(input);
    }
}
exports.JSONInPort = JSONInPort;
