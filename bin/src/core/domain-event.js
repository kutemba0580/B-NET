"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid/v4");
class DomainEvent {
    constructor(eventId) {
        this.eventId = eventId;
    }
    static generateId() { return uuid(); }
}
exports.DomainEvent = DomainEvent;
