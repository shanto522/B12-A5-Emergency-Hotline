### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   ANSWER : getElementById()
   This method is used to find an element by its unique id. Since an id should only appear once in a page, it always returns a single element.

getElementsByClassName()
This method returns all elements that share the same class name. The result comes as an HTMLCollection, which looks like an array but is not exactly a real array.

querySelector()
With this method, we can use any CSS selector to find an element. However, it only returns the first element that matches the selector.

querySelectorAll()
This method also uses CSS selectors, but instead of one, it returns all matching elements. The result is a NodeList, which can be easily looped through.

2. How do you **create and insert a new element into the DOM**?
   ANSWER : A new element can be created with document.createElement(). Then text or attributes can be added to it. Finally, it is inserted into the DOM using methods like appendChild() or append().

3. What is **Event Bubbling** and how does it work?
   ANSWER : Event Bubbling is a process in the DOM where an event triggered on a child element also propagates upward to its parent elements. In other words, the event starts from the innermost element and bubbles up through its ancestors in order (child → parent → grandparent).

4. What is **Event Delegation** in JavaScript? Why is it useful?
   ANSWER : Event Delegation means placing one event listener on a parent element to handle events from its children. It saves code, improves performance, and works well even with dynamically added elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   ANSWER : preventDefault() stops the browser’s default action, like submitting a form or following a link.
   stopPropagation() prevents the event from bubbling or capturing, so it doesn’t reach parent elements.
