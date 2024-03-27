# Singleton Pattern

The singleton pattern is where you have only one instance of your class during the whole duration of your application lifecycle.

NOTE: Ensures the class has only one instance and provides global point of access to it.

There's a chapter in the book where if you run the class in multi-thread the class would actually be creating a multiple instance. For NodeJS since it's running in a single thread there's no current equivalent to it even if NodeJS is releasing it's capability to do multi-threaded application. Might be a different solution altogether to solve this issue.

Violates the principle of loose-coupling since every object that depends on the singleton will be tightly coupled to this code.
Violates the SRP since it's purpose is managing it's own instance and the role of it in the application.

Singleton Enums for instances not possible with typescript since there's a difference with enums between Java and Nodejs. Java's enums are classes underneath while NodeJS's is an object.
