# Factory Pattern

## Factory Method Pattern

A factory method pattern is a type of factory pattern where you encapsulate the object creation into a method. A factory method pattern consist of two classes 1. The creator class. This class is an abstract class where we will define our abstract factory method and let it's subclasses define this method. Often the creator class also has a code that depends on an abstract product where it is produced by this abstract factory method. The creator does not know what concrete product is produced. 2. The creator subclass this is where you will implement the factory method to produce your concrete product. 3. The product class this is your concrete product class.

Note: Every concrete creator there's typically a set of product that it creates. Factory Method pattern The Creator class let's subclasses decides which concrete product class to instantiate

## Abstract Factory Method Pattern

The abstract factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.
