import { CommandBus, Command } from "../core";

export class SimpleCommandBus implements CommandBus {

    constructor(
    ) { }

    public async execute(command: Command) {

    }
}