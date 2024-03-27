# Iterator Pattern

The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

## Problem

You need to iterate over a collection of objects, but you don't want to expose the internal representation of the collection.

## Solution

Use the Iterator pattern to create an iterator object that can traverse the collection. The iterator object provides a way to access the elements of the collection one at a time, without exposing the underlying representation of the collection.

## Benefits

* **Encapsulation:** The Iterator pattern encapsulates the internal representation of the collection, making it easier to change the implementation of the collection without affecting the clients that use the iterator.
* **Flexibility:** The Iterator pattern allows you to create iterators that can traverse the collection in different ways. For example, you can create an iterator that traverses the collection in reverse order, or an iterator that only returns elements that meet certain criteria.
* **Reusability:** Iterators can be reused to traverse different collections. This makes it easy to write code that can work with multiple collections without having to rewrite the code for each collection.
