# hex-architect

hex-architect is collection of components for creating hexagonal architecture with ports and adapters which allows for clean separation of the application and domain layers from the execution environment.

## Ports

Act as an interface to the application.

* In-ports translate any **input** to commands/queries
* Out-ports are used to relay command/query results (output)
  
## Message Bus

Routes commands/queries to a command/query handler

## Use cases

Use cases or command/query handlers define the application layer. Each use case exposes a boundary interface defined by in/out ports and command/query handler interface.

1. boundaries
    * in-port interface
    * out-port interface
    * command handler interface
2. command
3. command handler

## Flow of control

The flow of control always points to the center domain layer. An input is injected through a port. This gets translated to a command or a query which gets executed by the command/query bus. The bus routes the message to the correct handler which fulfils the use case by orchestrating domain objects. Components from the infrastructure layer such as external services, 3rd party libraries and persistance adapters can be used by the use cases as long as they are hidden behind an interface. Finally, if the use case requires output to be sent back, an out port is used to route the result to the correct endpoint.  
Each use case (message handler) has to be loaded in the command/query bus(es) with mapping 1 to 1. All external interfaces of the application such as HTTP controllers will need an in- and/or out-port that conforms with their interface and maps to a command/query and a reference to a command/query bus through which the messages will be sent.
